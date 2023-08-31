export function timstampToDate(timestamp: number) {
  const a = new Date(timestamp * 1000);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = months[a.getMonth()];
  const day = a.getDate();
  const hour = String(a.getHours()).padStart(2, '0');
  const min = String(a.getMinutes()).padStart(2, '0');

  const date = day + ' ' + month;
  const time = hour + ':' + min;

  return {date, time};
}
