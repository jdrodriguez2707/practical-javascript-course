const myArray = ["Monday", "Tuesday", "Wednesday"];

let [day1, day2, day3] = myArray;
console.log(day1);
console.log(day2);
console.log(day3);

// let [firstDay,,lastDay] = myArray;
// console.log(firstDay);
// console.log(lastDay);

// const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
// let [firstDay,,,,lastDay] = daysOfWeek;
// console.log(firstDay);
// console.log(lastDay);

// const daysOfWeek = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];
// let [monday, tuesday, wednesday, thursday, ...weekend] = daysOfWeek;
// console.log(monday, tuesday, wednesday, thursday);
// console.log(weekend);
// console.log(daysOfWeek);

// let [monday, tuesday, wednesday, thursday, ...weekend] = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

// console.log(monday, tuesday, wednesday, thursday);
// console.log(weekend);

// const zoo = {
//   felines: "Lion",
//   equines: "Horse",
//   rodents: "Guinea pig",
// };

// let { felines, equines, rodents } = zoo;
// console.log(felines);
// console.log(equines);
// console.log(rodents);

// let { felines, equines, rodents } = {
//   felines: "Lion",
//   equines: "Horse",
//   rodents: "Guinea pig",
// };

// console.log(felines);
// console.log(equines);
// console.log(rodents);

// const zoo = {
//   felines: "Lion",
//   equines: "Horse",
//   rodents: "Guinea pig",
// };

// let felines, equines, rodents;
// ({ felines, equines, rodents } = zoo);
// console.log(felines);
// console.log(equines);
// console.log(rodents);

const zoo = {
  felines: "Lion",
  equines: "Horse",
  rodents: "Guinea pig",
};

let { felines: kittens, equines: paws, rodents: teeth } = zoo;
console.log(kittens);
console.log(paws);
console.log(teeth);
console.log(zoo);
