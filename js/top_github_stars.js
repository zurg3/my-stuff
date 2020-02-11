var user = document.getElementsByClassName('p-nickname vcard-username d-block')[0].innerText;
console.log('TOP-10 repositories starred by ' + user + ' on GitHub:');
var stars_pos = 0;
for (var i = 0; i < 10; i++) {
  var repo_name = document.getElementsByClassName('d-inline-block mb-1')[i].innerText;
  var stars = document.getElementsByClassName('muted-link mr-3')[stars_pos].innerText;
  var stars = stars.replace(/\s/g, '');
  var lang = document.getElementsByClassName('ml-0 mr-3')[i].innerText;
  var lang = lang.replace(/\s/g, '');
  var repo_rank = i + 1;
  console.log(repo_rank + '. ' + repo_name + ' | Stars: ' + stars + ' | Lang: ' + lang);
  
  var stars_pos = stars_pos + 2;
}
