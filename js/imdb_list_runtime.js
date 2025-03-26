const json_schema = JSON.parse(document.querySelector('script[type="application/ld+json"]').innerText);
const list_items = json_schema.itemListElement;

let total_runtime = 0;

for (let i = 0; i < list_items.length; i++) {
  const runtime = list_items[i].item.duration.replace('PT', '');
  let runtime_min = 0;

  if (runtime.match('H') && runtime.match('M')) {
    runtime_min += parseInt(runtime.split('H')[0], 10) * 60;
    runtime_min += parseInt(runtime.split('H')[1].replace('M', ''), 10);
  }
  else if (runtime.match('H') && !runtime.match('M')) {
    runtime_min += parseInt(runtime.split('H')[0], 10) * 60;
  }
  else if (!runtime.match('H') && runtime.match('M')) {
    runtime_min += parseInt(runtime.split('H')[0].replace('M', ''), 10);
  }

  total_runtime += runtime_min;
}

console.log(`Total runtime: ${total_runtime} minutes`);

const total_runtime_days = total_runtime / 60 / 24;
const total_runtime_hours = total_runtime / 60 % 24;
const total_runtime_minutes = total_runtime % 60;

console.log(`${Math.floor(total_runtime_days)} days`);
console.log(`${Math.floor(total_runtime_hours)} hours`);
console.log(`${total_runtime_minutes} minutes`);
