const table = document.getElementsByTagName('table')[0];
const fragment = document.createDocumentFragment();

for (let i = 1; i <= 100; i++) {
  const cs_bin = i.toString(2);
  const cs_oct = i.toString(8);
  const cs_dec = i.toString(10);
  const cs_hex = i.toString(16).toUpperCase();

  const row = document.createElement('tr');
  const row_data = [cs_bin, cs_oct, cs_dec, cs_hex];

  for (let j = 0; j < row_data.length; j++) {
    const cell = document.createElement('td');

    cell.textContent = row_data[j];
    row.append(cell);
  }

  fragment.append(row);
}

table.append(fragment);
