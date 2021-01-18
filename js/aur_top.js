// https://aur.archlinux.org/packages/

var td_pos = 6;
for (var i = 0; i < 10 * td_pos; i += td_pos) {
  console.log(document.getElementsByTagName('td')[i].innerText);
}
