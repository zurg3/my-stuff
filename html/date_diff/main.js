const date_from = document.getElementById('date_from');
const date_to = document.getElementById('date_to');
const output = document.getElementById('output');

function set_current_date() {
  const current_date = dayjs().format('YYYY-MM-DD');

  date_from.value = current_date;
  date_to.value = current_date;
}

function get_difference() {
  if (date_from.value && date_to.value) {
    const date1 = dayjs(date_from.value);
    const date2 = dayjs(date_to.value);

    const diff_days = Math.abs(date1.diff(date2, 'day'));

    let diff_output = '';

    if (diff_days >= 1) {
      diff_output = `${diff_days} ${diff_days === 1 ? 'day' : 'days'}`;
    }
    else {
      diff_output = 'Same dates';
    }

    output.innerText = diff_output;
  }
  else {
    set_current_date();
    output.innerText = 'Error';
  }
}
