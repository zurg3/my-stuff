// You need open a list in compact view to use this script

var list_items = document.getElementsByClassName('lister-item-header');
var list_items_num = list_items.length;
for (var i = 0; i < list_items_num; i++) {
  var list_item_title = list_items[i].innerText;
  var list_item = list_items[i].children[1].children[0].attributes[0].nodeValue;
  var list_item_id = list_item.split('/');
  console.log(list_item_title + ' - ' + list_item_id[2]);
}
