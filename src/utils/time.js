const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

// returns format => Thursday, September 21st, at 7pm
export const longEventDate = (eventDate) => {
  const weekday = days[eventDate.getDay()];
  const month = months[eventDate.getMonth()];
  const date = `${month} ${suffixed(eventDate.getDate())}`;

  return [weekday, date, 'at 7pm'].join(', ');
}

// returns format => 9/21
export const shortEventDate = (eventDate) => {
  const month = eventDate.getMonth() + 1;
  const date = eventDate.getDate();

  return [month, date].join('/');
};

// returns format => 21st
export const suffixed = (number) => {
  if (number > 9 && number < 21) {
    return `${number}th`;
  }

  const lastDigit = number % 10;

  switch(lastDigit) {
    case 1:
      return `${number}st`;
    case 2:
      return `${number}nd`;
    case 3:
      return `${number}rd`;
    default:
      return `${number}th`;
  }
};

// returns format => 31 days
export const timeLeft = (eventDate, now = new Date()) => {
  const n = 0 | (eventDate - now) / 86400000

  return n >  1 ? n + " days" :
    n === 1 ? "1 day"     :
    n === 0 ? "A while"   : "";
};
