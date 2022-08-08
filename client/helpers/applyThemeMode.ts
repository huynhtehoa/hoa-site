
export default function () {
  const currentHour = new Date().getHours();
  if (currentHour >= 19 || currentHour <= 6) {
    document.querySelector(':root').className += 'dark';
  } else {
    document.querySelector(':root').className += 'light';
  }
};
