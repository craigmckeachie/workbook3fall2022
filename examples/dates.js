let date = new Date();
console.log(date.toDateString());

date.setFullYear(2023);
console.log(date.toDateString());

date.setMonth(9);
console.log(date.toDateString());

let milliSec = Date.parse("May 1, 2022");
console.log(milliSec);
let d = new Date(milliSec);
console.log(d);

let date1 = new Date("May 31, 1971");
let date2 = new Date();
let msec_per_day = 1000 * 60 * 60 * 24;

let elapsedMilliseconds = date2.getTime() - date1.getTime();
let dayDiff = elapsedMilliseconds / msec_per_day;
let numDays = Math.round(dayDiff);
console.log("The number of days between dates is " + numDays);
