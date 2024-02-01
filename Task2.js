const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//Sort the array and find the min and max age.
ages.sort((a, b) => a - b);

//Find the median age
let median;

if (ages.length % 2 == 0) {
  median = (ages[ages.length / 2] + ages[ages.length / 2 + 1]) / 2;
} else {
  median = ages[Math.floor(ages.length / 2)];
}
console.log(median);

//Find the average age

let average = ages.reduce((acc, cur) => acc + cur) / ages.length;
console.log(average);

//Find the range of the ages
let range = ages[ages.length - 1] - ages[0];
console.log(range);

//Compare the value
let com1 = Math.abs(ages[0] - average);
let com2 = Math.abs(ages[ages.length - 1] - average);
console.log(com1, com2);
