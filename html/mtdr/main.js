const birthday = dayjs.unix('910249200'); // 1998-11-05 10:00:00 (UTC +03:00/MSK)
const now = dayjs().unix();
const seconds_per_day = 60 * 60 * 24;

for (let i = 1; i <= 30; i++) {
  const milestone_days = i * 1000;
  const milestone_seconds = milestone_days * seconds_per_day;
  const next_milestone = birthday.add(milestone_seconds, 'second');
  const previous_milestone = next_milestone.subtract(seconds_per_day * 1000, 'second').unix();
  const milestone = next_milestone.unix();
  const milestone_date = next_milestone.format('DD.MM.YYYY');

  if (now < milestone && now >= previous_milestone) {
    const current_status = document.createElement('p');
    const milestone_status = Math.floor((now - previous_milestone) / (seconds_per_day * 1000) * 100);
    current_status.innerHTML = `► YOU ARE HERE <progress max="100" value="${milestone_status}"></progress> ${milestone_status}% ◄`;
    document.body.append(current_status);
  }

  const milestone_item = document.createElement('p');
  const milestone_check = now >= milestone ? '✔️' : '❌';
  milestone_item.innerText = `${milestone_check} ${milestone_days} days - ${milestone_date}`;
  document.body.append(milestone_item);
}
