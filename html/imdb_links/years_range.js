const date = new Date();
const current_year = date.getFullYear();
const year_option_begin = 1900;
const year_option_end = current_year + 5;

for (let year_option = year_option_end; year_option >= year_option_begin; year_option--) {
  document.write(`<option`);
  if (year_option === current_year) document.write(` selected`);
  document.write(` value="${year_option}">${year_option}</option>`);
}
