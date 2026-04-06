const gallery = document.getElementById('gallery');

delete themes.system;
delete themes.random;

Object.keys(themes).forEach(theme_key => {
  const theme_info = [];
  const bg_color = themes[theme_key].colors[0];
  const font_color = themes[theme_key].colors[1];

  const notepad_link = 'zurg3.github.io/my-stuff/html/notepad.html';

  theme_info.push(
    `Name: ${themes[theme_key].name}`,
    `Key: ${theme_key}`,
    `Description: ${themes[theme_key].description ? themes[theme_key].description : 'none'}`,
    `Background color: ${bg_color}`,
    `Font color: ${font_color}`,
    `Apply: ${notepad_link}?theme=${theme_key}`
  );

  const textarea = document.createElement('textarea');

  textarea.className = 'theme';
  textarea.id = `${theme_key}`;
  textarea.value = theme_info.join('\n');
  textarea.cols = 40;
  textarea.rows = 8;
  textarea.wrap = 'soft';
  textarea.spellcheck = false;
  textarea.readOnly = false;
  textarea.style.background = `${bg_color}`;
  textarea.style.color = `${font_color}`;
  textarea.style.scrollbarColor = `${font_color} ${bg_color}`;

  gallery.append(textarea);
});
