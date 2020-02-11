var td_pos = 0;
for (var i = 0; i < 10; i++) {
  console.log(document.getElementsByTagName('td')[td_pos].innerText);
  var td_pos = td_pos + 6;
}
