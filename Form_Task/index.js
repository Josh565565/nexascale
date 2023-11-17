let currentDate = new Date();

let daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDayOfTheWeek = currentDate.getDay();
let currentDayName = daysOfTheWeek[currentDayOfTheWeek];

console.log(currentDayName);
