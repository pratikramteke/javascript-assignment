let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date);
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
let newDate = new Date(1970, 1, 1);
console.log((date - newDate) / 1000);
