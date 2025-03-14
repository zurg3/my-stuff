for (let i = 1; i <= 100; i++) {
  const cs_bin = parseInt(i, 10).toString(2);
  const cs_oct = parseInt(i, 10).toString(8);
  const cs_dec = parseInt(i, 10).toString(10);
  const cs_hex = parseInt(i, 10).toString(16).toUpperCase();

  document.write('<tr>');
    document.write(`<td>${cs_bin}</td>`);
    document.write(`<td>${cs_oct}</td>`);
    document.write(`<td>${cs_dec}</td>`);
    document.write(`<td>${cs_hex}</td>`);
  document.write('</tr>');
}
