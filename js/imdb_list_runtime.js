var list_items_runtime_full = document.getElementsByClassName('runtime');
var list_items_num = document.getElementsByClassName('runtime').length;
var total_runtime = 0;
for (var i = 0; i < list_items_num; i++) {
  var list_items_runtime = Number(list_items_runtime_full[i].innerText.replace(' min',''));
  total_runtime = total_runtime + list_items_runtime;
}
console.log('Total runtime: ' + total_runtime + ' minutes');
var total_runtime_days = total_runtime / 60 / 24;
var total_runtime_hours = total_runtime / 60 % 24;
var total_runtime_minutes = total_runtime % 60;
console.log(Math.floor(total_runtime_days) + ' days');
console.log(Math.floor(total_runtime_hours) + ' hours');
console.log(total_runtime_minutes + ' minutes');
