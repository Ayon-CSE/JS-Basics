let myDate = new Date();
console.log(myDate.toString()); // current date and time
console.log(myDate.toDateString()); // current date in a more readable format
console.log(myDate.toTimeString()); // current time in a more readable format
console.log(myDate.toLocaleString()); // current time in a more readable format
console.log(typeof myDate); // object



let myDate2 = new Date(2023, 0, 23); // January 23, 2023 (months are 0-indexed)
console.log(myDate2.toDateString()); // "Mon Jan 23 2023"


let myDatetime = new Date(2023, 0, 23, 5, 3,2); // January 23, 2023 at 5:03:02 AM (months are 0-indexed)
console.log(myDatetime.toLocaleString()); // "1/23/2023, 5:03:02 AM" (format may vary based on locale)


let myDate3 = new Date("2023-01-23"); // January 23, 2023 (ISO format)
console.log(myDate3.toDateString()); // "Mon Jan 23 2023"

let myTimeStamp = Date.now(); // current timestamp in milliseconds
console.log(myTimeStamp); // e.g., 1674500000000
console.log(myDate3.getTime());// timestamp of January 23, 2023 in milliseconds

console.log(Math.floor(Date.now() / 1000)); // current timestamp in seconds

let d = new Date();
console.log(d.getFullYear()); // current year
console.log(d.getMonth()); // current month (0-indexed)
console.log(d.getDate()); // current day of the month
console.log(d.getHours()); // current hour
console.log(d.getMinutes()); // current minute
console.log(d.getDay()); // current day of the week (0 for Sunday, 1 for Monday, etc.)

d.toLocaleString('default', { month: 'long' }); // get current month in long format
d.toLocaleString('default', { date: 'short' });// get current date in short format

