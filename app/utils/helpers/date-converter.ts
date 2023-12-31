import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

TimeAgo.addDefaultLocale(en);

const timeAgo = new TimeAgo('en-US');

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
  const year = a.getFullYear();
  const hour = String(a.getHours()).padStart(2, '0');
  const min = String(a.getMinutes()).padStart(2, '0');

  const date = day + ' ' + month;
  const time = hour + ':' + min;

  return {date, time, year};
}

export function getRelativeTime(timstamp: number): string {
  const date = new Date(timstamp);
  return timeAgo.format(date, 'mini');
}
