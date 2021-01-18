// Example link: https://www.imdb.com/list/ls079114487/

var names_array = [];
for (var i = 0; i < document.getElementsByClassName('lister-item-header').length; i++) {
  names_array.push(document.getElementsByClassName('lister-item-header')[i].children[1].innerText);
}
names_array.sort();
for (var j = 0; j < names_array.length; j++) {
  console.log(names_array[j]);
}
