if (is_mobile()) {
  const base_link_width = Math.floor(document.body.offsetWidth * 0.8);

  document.getElementById('base_link').style.width = `${base_link_width}px`;
}
else {
  document.getElementById('base_link').size = 60;
}
