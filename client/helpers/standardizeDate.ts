const standardMonthMap = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec',
};

function standardizeDay (date: string): string {
  if (parseInt(date) < 10 && date.charAt(0) !== '0') {
    return `0${date}`;
  }
  return date;
}

function standardizeYear (year: string): string {
  if (year.length === 2) {
    return `20${year}`;
  }
  return year;
}

export default function (date: string) {
  const dateArray = date.split('/');

  const standardDay = standardizeDay(dateArray[0]);
  const standardMonth = standardMonthMap[parseInt(dateArray[1])];
  const standardYear = standardizeYear(dateArray[2]);

  return standardDay + ' ' + standardMonth + ' ' + standardYear;
}
