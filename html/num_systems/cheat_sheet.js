const {append_html} = lib;

const table = document.querySelector('table');
const table_data = [];

for (let i = 1; i <= 100; i++) {
  const cs_bin = i.toString(2);
  const cs_oct = i.toString(8);
  const cs_dec = i.toString(10);
  const cs_hex = i.toString(16).toUpperCase();

  table_data.push(
    '<tr>',
      `<td>${cs_bin}</td>`,
      `<td>${cs_oct}</td>`,
      `<td>${cs_dec}</td>`,
      `<td>${cs_hex}</td>`,
    '</tr>'
  );
}

append_html(table, table_data.join(''));
