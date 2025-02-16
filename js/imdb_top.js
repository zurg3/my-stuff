const json_schema = JSON.parse(document.querySelector('script[type="application/ld+json"]').innerText);
const list_items = json_schema.itemListElement;

for (let i = 0; i < list_items.length; i++) {
  let list_item_title = list_items[i].item.name.replace('&apos;', '\'');

  console.log(`${i + 1}. ${list_item_title}`);
}
