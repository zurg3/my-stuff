dayjs.extend(window.dayjs_plugin_utc);

const timeout_delay = 1000;

function print_time() {
  const now = dayjs();

  const unix_time = now.unix();
  const utc_time = now.utc().format('HH:mm:ss');
  const local_time = now;
  const local_time_format = local_time.format('HH:mm:ss');

  let timezone_offset = local_time.utcOffset() / 60;
  timezone_offset = `${timezone_offset >= 0 ? '+' : '-'}${timezone_offset}`;

  document.getElementById('unix_time').innerText = unix_time;
  document.getElementById('utc_time').innerText = utc_time;
  document.getElementById('timezone_offset').innerText = timezone_offset;
  document.getElementById('local_time').innerText = local_time_format;

  setTimeout(print_time, timeout_delay);
}

function change_font_size() {
  const font_size = document.getElementById('font_size').value;

  document.getElementById('main').style.fontSize = `${font_size}pt`;
  document.getElementById('current_font_size').innerText = font_size;
}

function check_options() {
  const unix_time_full = document.getElementById('unix_time_full');
  const utc_time_full = document.getElementById('utc_time_full');
  const local_time_full = document.getElementById('local_time_full');

  const unix_time_option = document.getElementById('unix_time_option');
  const utc_time_option = document.getElementById('utc_time_option');
  const local_time_option = document.getElementById('local_time_option');

  unix_time_full.style.display = unix_time_option.checked ? 'block' : 'none';
  utc_time_full.style.display = utc_time_option.checked ? 'block' : 'none';
  local_time_full.style.display = local_time_option.checked ? 'block' : 'none';
}

function start() {
  print_time();
}
