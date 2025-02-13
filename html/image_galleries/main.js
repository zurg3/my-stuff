function is_mobile() {
  return window.screen.width < window.screen.height;
}

if (is_mobile()) {
  const base_link_width = Math.floor(document.body.offsetWidth * 0.8);

  document.getElementById('base_link').style.width = `${base_link_width}px`;
}
else {
  document.getElementById('base_link').size = 60;
}

new ClipboardJS('.copy_image_url_button');

// 80% - mobile, 50% - desktop
const default_img_scale = is_mobile() ? 80 : 50;
const change_scale_step = 10; // 10%
let current_img_scale = default_img_scale;

const default_blur_radius = 16; // 16px

const scroll_top = 1000;

const statistics_help = 'L - Loaded\nF - Failed\nT - Total\nLR - Loaded Rate\n\nG - Gallery\nA - All';

let loading_progress = document.getElementById('loading_progress_value');

// Gallery
let loaded_counter_gallery = document.getElementById('loaded_counter_gallery');
let failed_counter_gallery = document.getElementById('failed_counter_gallery');
let total_counter_gallery = document.getElementById('total_counter_gallery');
let loaded_rate_gallery = document.getElementById('loaded_rate_gallery');

// All
let loaded_counter_all = document.getElementById('loaded_counter_all');
let failed_counter_all = document.getElementById('failed_counter_all');
let total_counter_all = document.getElementById('total_counter_all');
let loaded_rate_all = document.getElementById('loaded_rate_all');

let galleries_counter = document.getElementById('galleries_counter');
let average_counter = document.getElementById('average_counter');

function detect_scroll() {
  document.getElementById('back_to_top_button').style.display = (document.body.scrollTop > scroll_top || document.documentElement.scrollTop > scroll_top) ? 'block' : 'none';
}

function back_to_top() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = () => {
  detect_scroll();
};

let current_blur_radius = is_mobile() ? 16 : 28;

function change_scale(operation) {
  if (operation === 'decrease' && current_img_scale > 10) {
    current_img_scale -= change_scale_step;
  }
  else if (operation === 'increase' && current_img_scale < 100) {
    current_img_scale += change_scale_step;
  }
  else if (operation === 'reset') {
    current_img_scale = default_img_scale;
  }

  for (let i = 0; i < document.images.length; i++) {
    document.images[i].style.maxWidth = `${current_img_scale}%`;
  }

  document.getElementById('img_scale_value').innerText = `${current_img_scale}%`;
}

function is_any_radio_checked(radio_name) {
  return document.querySelector(`input[name="${radio_name}"]:checked`) !== null;
}

function get_checked_radio_value(radio_name) {
  for (let i = 0; i < document.getElementsByName(radio_name).length; i++) {
    if (document.getElementsByName(radio_name)[i].checked) {
      return document.getElementsByName(radio_name)[i].value;
    }
  }
}

function get_image_size(img_num) {
  if (document.images[img_num].naturalWidth >= 1 && document.images[img_num].naturalHeight >= 1) {
    document.getElementsByClassName('image_size')[img_num].innerText = `${document.images[img_num].naturalWidth}x${document.images[img_num].naturalHeight}`;
  }
}

function handle_loaded_image(img_num, search_option) {
  document.images[img_num].style.border = '1px solid Black';
  document.getElementsByClassName('image_id')[img_num].innerText = document.images[img_num].alt;
  get_image_size(img_num);
  for (let i = 0; i < document.getElementById('output').getElementsByTagName('p')[img_num].getElementsByTagName('br').length; i++) {
    document.getElementById('output').getElementsByTagName('p')[img_num].getElementsByTagName('br')[i].hidden = false;
  }
  document.getElementsByClassName('open_image_button')[img_num].hidden = false;
  document.getElementsByClassName('copy_image_url_button')[img_num].hidden = false;

  if (search_option) {
    document.getElementsByClassName('search_image_button')[img_num].hidden = false;
  }
}

function open_image(img_url) {
  window.open(img_url, '_blank');
}

function search_image(img_url, search_engine) {
  let search_engines = {
    'google': `https://lens.google.com/uploadbyurl?url=${img_url}`,
    'yandex': `https://ya.ru/images/search?rpt=imageview&url=${img_url}`
  };

  window.open(search_engines[search_engine], '_blank');
}

function blur_image(image, radius) {
  image.style.filter = (image.style.filter === 'none') ? `blur(${radius}px)` : 'none';
}

function handle_failed_image(image, hide_failed_option, blur_option) {
  image.removeAttribute('onerror');

  image.style.filter = 'none';

  if (image.hasAttribute('onclick')) {
    image.removeAttribute('onclick');
  }

  if (hide_failed_option) {
    image.parentNode.hidden = true;
  }
  else {
    image.outerHTML = `<a href="${image.src}" target="_blank">${image.outerHTML}</a>`;
  }
}

function update_loaded_rate_color() {
  let update_color = (loaded_rate_element) => {
    let rate = parseInt(loaded_rate_element.innerText, 10);

    loaded_rate_element.parentNode.style.color = (rate === 100) ? 'Green' : (rate === 0) ? 'Red' : 'Black';
  };

  update_color(loaded_rate_gallery);
  update_color(loaded_rate_all);
}

function reset_loaded_rate_color() {
  loaded_rate_gallery.parentNode.style.color = 'Black';
  loaded_rate_all.parentNode.style.color = 'Black';
}

function load_gallery() {
  if ((document.getElementById('base_link').value && document.getElementById('images_amount').value && is_any_radio_checked('file_format')) && (document.getElementById('base_link').value.startsWith('https://') || document.getElementById('base_link').value.startsWith('http://'))) {
    document.getElementById('loading_progress').hidden = true;
    document.getElementById('statistics').hidden = true;
    document.getElementById('scale_control').hidden = false;
    document.getElementById('output').hidden = false;

    document.getElementById('img_scale_value').innerText = `${current_img_scale}%`;

    // Required fields
    const base_link = document.getElementById('base_link').value;
    const images_amount = parseInt(document.getElementById('images_amount').value, 10);
    const file_format = get_checked_radio_value('file_format');

    // Optional fields
    let start_id = parseInt(document.getElementById('start_id').value, 10) || 1;
    let id_length = parseInt(document.getElementById('id_length').value, 10) || 0;
    let id_additional = document.getElementById('id_additional').value;
    let id_step = parseInt(document.getElementById('id_step').value, 10) || 1;
    let search_engine = get_checked_radio_value('search_engine');
    let hide_failed_images = document.getElementsByName('hide_failed_images')[0].checked;
    let blur_images = document.getElementsByName('blur_images')[0].checked;

    // Experimental options
    let show_statistics = document.getElementsByName('show_statistics')[0].checked;
    let use_document_fragment = document.getElementsByName('use_document_fragment')[0].checked;

    let final_id = start_id + ((images_amount - 1) * id_step);

    reset_statistics('gallery');

    if (show_statistics) {
      document.getElementById('loading_progress').hidden = false;
      document.getElementById('statistics').hidden = false;

      total_counter_gallery.innerText = images_amount;
      total_counter_all.innerText = parseInt(total_counter_all.innerText, 10) + parseInt(total_counter_gallery.innerText, 10);

      reset_loaded_rate_color();
    }

    let image_id = '';
    let image_url = '';
    let image_item;
    let image_gallery = use_document_fragment ? document.createDocumentFragment() : '';
    let last_img_index = 0;

    clear_output();

    for (let i = start_id; i <= final_id; i += id_step) {
      image_id = `${i.toString().padStart(id_length, '0')}`;
      image_url = `${base_link}${image_id}${id_additional}${file_format}`;

      image_item = document.createElement('p');
      image_item.align = 'center';
      if (use_document_fragment) {
        last_img_index = image_gallery.childElementCount;
      }
      else {
        last_img_index = document.images.length;
      }
      image_item.innerHTML = `<span class="image_id"></span>
        <br hidden>
        <img style="max-width: ${current_img_scale}%; filter: blur(${blur_images ? `${current_blur_radius}px` : `0px`});" src="${image_url}" alt="image${image_id}" onload="handle_loaded_image(${last_img_index}, ${is_any_radio_checked('search_engine')})" onerror="handle_failed_image(this, ${hide_failed_images}, ${blur_images})"${blur_images ? ` onclick="blur_image(this, ${current_blur_radius})"` : ''}>
        <br hidden>
        <span class="image_size"></span>
        <br hidden>
        <input type="button" class="open_image_button" value="Open" onclick="open_image('${image_url}')" title="${image_url}" hidden>
        <input type="button" class="copy_image_url_button" value="Copy URL" data-clipboard-text="${image_url}" data-clipboard-action="copy" hidden>
        <input type="button" class="search_image_button" value="Search" onclick="search_image('${image_url}', '${search_engine}')" hidden>`;

      if (use_document_fragment) {
        image_gallery.append(image_item);
      }
      else {
        document.getElementById('output').append(image_item);
      }

      // Statistics
      if (show_statistics) {
        let img_test = new Image();
        img_test.onload = () => {
          // Gallery
          loaded_counter_gallery.innerText = parseInt(loaded_counter_gallery.innerText, 10) + 1;
          loaded_rate_gallery.innerText = Math.floor(parseInt(loaded_counter_gallery.innerText, 10) / (parseInt(loaded_counter_gallery.innerText, 10) + parseInt(failed_counter_gallery.innerText, 10)) * 100);

          // All
          loaded_counter_all.innerText = parseInt(loaded_counter_all.innerText, 10) + 1;
          loaded_rate_all.innerText = Math.floor(parseInt(loaded_counter_all.innerText, 10) / parseInt(total_counter_all.innerText, 10) * 100);

          // Loading progress
          loading_progress.innerText = Math.floor((parseInt(loaded_counter_gallery.innerText, 10) + parseInt(failed_counter_gallery.innerText, 10)) / images_amount * 100);

          update_loaded_rate_color();
        };
        img_test.onerror = () => {
          // Gallery
          failed_counter_gallery.innerText = parseInt(failed_counter_gallery.innerText, 10) + 1;
          loaded_rate_gallery.innerText = Math.floor(parseInt(loaded_counter_gallery.innerText, 10) / (parseInt(loaded_counter_gallery.innerText, 10) + parseInt(failed_counter_gallery.innerText, 10)) * 100);

          // All
          failed_counter_all.innerText = parseInt(failed_counter_all.innerText, 10) + 1;
          loaded_rate_all.innerText = Math.floor(parseInt(loaded_counter_all.innerText, 10) / parseInt(total_counter_all.innerText, 10) * 100);

          // Loading progress
          loading_progress.innerText = Math.floor((parseInt(loaded_counter_gallery.innerText, 10) + parseInt(failed_counter_gallery.innerText, 10)) / images_amount * 100);

          update_loaded_rate_color();
        };
        img_test.src = image_url;
      }
    }

    if (use_document_fragment) {
      document.getElementById('output').append(image_gallery);
    }

    if (show_statistics) {
      galleries_counter.innerText = parseInt(galleries_counter.innerText, 10) + 1;
      average_counter.innerText = Math.floor(parseInt(total_counter_all.innerText, 10) / parseInt(galleries_counter.innerText, 10));
    }
  }
  else {
    alert('Something is wrong!');
  }
}

function clear_base_link() {
  document.getElementById('base_link').value = '';
}

function clear_output() {
  document.getElementById('output').innerHTML = '';
}

function reset_statistics_gallery() {
  loaded_counter_gallery.innerText = 0;
  failed_counter_gallery.innerText = 0;
  total_counter_gallery.innerText = 0;
  loaded_rate_gallery.innerText = 0;
}

function reset_statistics_all() {
  loaded_counter_all.innerText = 0;
  failed_counter_all.innerText = 0;
  total_counter_all.innerText = 0;
  loaded_rate_all.innerText = 0;

  galleries_counter.innerText = 0;
  average_counter.innerText = 0;
}

function reset_statistics(reset_scope) {
  if (reset_scope === 'gallery') {
    loading_progress.innerText = 0;
    reset_statistics_gallery();
  }
  else if (reset_scope === 'all') {
    reset_statistics_all();
  }
  else {
    reset_statistics_gallery();
    reset_statistics_all();
  }

  reset_loaded_rate_color();
}

function clear_input() {
  reset_statistics('gallery');
  clear_output();
  change_scale('reset');
  document.getElementById('loading_progress').hidden = true;
  document.getElementById('statistics').hidden = true;
  document.getElementById('scale_control').hidden = true;
  document.getElementById('output').hidden = true;
}
