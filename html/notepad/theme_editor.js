const preview = document.getElementById('preview');

const bg_color_picker = document.getElementById('bg_color_picker');
const bg_color_hex = document.getElementById('bg_color_hex');

const font_color_picker = document.getElementById('font_color_picker');
const font_color_hex = document.getElementById('font_color_hex');

new ClipboardJS('#copy_bg_button');
new ClipboardJS('#copy_font_button');

bg_color_picker.oninput = () => {
  bg_color_hex.innerText = `${bg_color_picker.value}`;
  preview.style.background = `${bg_color_picker.value}`;
  preview.style.scrollbarColor = `${font_color_picker.value} ${bg_color_picker.value}`;
};

font_color_picker.oninput = () => {
  font_color_hex.innerText = `${font_color_picker.value}`;
  preview.style.color = `${font_color_picker.value}`;
  preview.style.scrollbarColor = `${font_color_picker.value} ${bg_color_picker.value}`;
};
