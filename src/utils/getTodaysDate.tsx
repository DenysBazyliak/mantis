
export function getCurrentDate() {
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return new Intl.DateTimeFormat('en-US', options).format(currentDate);
}
