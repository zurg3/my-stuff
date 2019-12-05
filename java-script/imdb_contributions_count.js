// https://contribute.imdb.com/updates/history

var contributions_table = document.getElementsByClassName('item')[0].children[0];
var submitted_contributions_num = contributions_table.children.length - 1;
var contribution_items_num = 0;

for (var i = 1; i < submitted_contributions_num; i++) {
  var contribution_item_summary = contributions_table.children[i].children[3].innerText;
  var contribution_item_summary_lines = contribution_item_summary.split('\n').length;
  for (var j = 1; j <= contribution_item_summary_lines - 2; j++) {
    var contribution_item = contribution_item_summary.split('\n')[j].split(' item')[0];
    contribution_items_num = contribution_items_num + parseInt(contribution_item[contribution_item.length - 1], 10);
  }
}

console.log('Total IMDb contributions: ' + contribution_items_num);
