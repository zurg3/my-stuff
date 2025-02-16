// https://aur.archlinux.org/packages

const td_pos = 7;

for (let i = 0; i < 10 * td_pos; i += td_pos) {
  console.log(document.getElementsByTagName('td')[i].innerText);
}
