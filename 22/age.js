const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(`min age is ${ages[0]} max age is ${ages[ages.length - 1]}`);
console.log(ages[ages.length / 2]);

const average = ages.reduce((a, b) => a + b) / ages.length;
console.log(`Average age is ${average}`);
console.log("range is ", ages[ages.length - 1] - ages[0]);
console.log(Math.abs(ages[0] - average));
console.log(ages[ages.length - 1] - average);
console.log(ages);
