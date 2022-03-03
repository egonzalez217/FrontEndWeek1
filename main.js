//1 create array with ages
var ages = [3, 9, 23, 64, 2, 8, 28, 93];

//1a programmatically subtract last age from first
console.log("ages: " + ages);

console.log(
  "1a. Last element: " +
    ages[ages.length - 1] +
    " first element: " +
    ages[0] +
    " Last element - first element: " +
    (ages[ages.length - 1] - ages[0])
);

//1b add new age and repeat with previous code to ensure it's programmatic in function
ages.push(39);

console.log("1b. ages with new age added: " + ages);

console.log(
  "Last element: " +
    ages[ages.length - 1] +
    " first element: " +
    ages[0] +
    " Last element - first element: " +
    (ages[ages.length - 1] - ages[0])
);

//1c use loop to calculate average age of array
var mean = 0;

for (i = 0; i < ages.length; i++) {
  mean += ages[i];
}
console.log("1c. " + mean);
console.log(ages.length);
console.log("average age of ages: " + mean / ages.length);

//2 create array of names
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log("2. names: " + names);

//2a calculate average letters per name
var letters = 0;
for (i = 0; i < names.length; i++) {
  var currentString = names[i];
  letters += currentString.length;
}

console.log("2a. average letters per name: " + letters / names.length);

//2b iterate through array and concatenate all names seperated by spaces

var concatenated = "";

for (i = 0; i < names.length; i++) {
  concatenated = concatenated.concat(names[i] + " ");
}

console.log("concatenated names: " + concatenated);

//3 Array_name.length – 1 due to the 0 notation of arrays to access last element of an array
//4 Array_name[0] due to the 0 notation of arrays as well as the bracket syntax to access first element of an array
//5 create new array arrayLengths and create an array with the length of each name in previous Names array

var namesLength = [];
var nameLength = 0;
for (i = 0; i < names.length; i++) {
  nameLength = names[i].length;
  namesLength.push(nameLength);
}
console.log("5. Names array: " + names);
console.log("array with lenght of each name in Names array: " + namesLength);

//6 find sum of namelengths with a loop

var namesLengthsSum = 0;

for (i = 0; i < namesLength.length; i++) {
  namesLengthsSum += namesLength[i];
}

console.log("6. sum of nameslengths: " + namesLengthsSum);

//7 write function takes 2 parameters word, n and returns the word concatenated to itself n times

function wordConcatenated(word, n) {
  var finalString = "";

  for (i = 0; i < n; i++) {
    finalString = finalString.concat(word);
  }

  return finalString;
}
console.log("7. " + wordConcatenated("Hello", 3));

//8 write function that takes firstName and lastName and returns a full name with a space between

function fullName(firstName, lastName) {
  var fullName = "";
  fullName = fullName.concat(firstName + " " + lastName);
  return fullName;
}

console.log("8. " + fullName("Snoop", "Dogg"));

//9write function that takes array of numbers and returns true if sum of numbers is greater than 100

function greaterThan100(array) {
  var arraySum = 0;

  for (i = 0; i < array.length; i++) {
    arraySum += array[i];
  }

  if (arraySum > 100) {
    return true;
  } else {
    return false;
  }
}

var lessThanHundred = [1, 26, 3, 17];
var greaterThanHundred = [11, 34, 14, 15, 46, 36, 17, 85];

console.log(
  "9. array: " +
    lessThanHundred +
    ", < 100 or > 100? " +
    greaterThan100(lessThanHundred)
);

console.log(
  "array: " +
    greaterThanHundred +
    ", < 100 or > 100? " +
    greaterThan100(greaterThanHundred)
);

//10 function takes array of numbers and returns average of elements

function meanOfArray(array) {
  var average = 0;

  for (i = 0; i < array.length; i++) {
    average += array[i];
  }

  average = average / array.length;

  return average;
}

var arraySum = [1, 24, 6, 35, 3];
console.log(
  "10. array: " + arraySum + " average of elements: " + meanOfArray(arraySum)
);

//11 first array has greater average than second array

function firstGreaterThanSecond(array1, array2) {
  var avg1 = 0;
  var avg2 = 0;

  for (i = 0; i < array1.length; i++) {
    avg1 += array1[i];
  }
  avg1 = avg1 / array1.length;

  for (i = 0; i < array2.length; i++) {
    avg2 += array2[i];
  }
  avg2 = avg2 / array2.length;

  if (avg1 > avg2) {
    return true;
  } else {
    return false;
  }
}

var example1 = [100, 100, 100];
var example2 = [14, 68, 23, 45];

console.log(
  "11. First array: " +
    example1 +
    " second array: " +
    example2 +
    ",  is the first array average greater than average of second array? " +
    firstGreaterThanSecond(example1, example2)
);

//12 willbuydrink boolean function
function willBuyDrink(isHotOutside, moneyInsidePocket) {
  if (isHotOutside == true && moneyInsidePocket > 10.5) {
    return true;
  } else {
    return false;
  }
}

//13 function that middle 2 elements if even number of elements in an array, or middle element if odd

function middleArrayElement(array) {
  if (array.length % 2 == 0) {
    var middle1 = array[array.length / 2 - 1];
    var middle2 = array[array.length / 2];
    return { middle1, middle2 };
  } else {
    var middle = array[array.length / 2 - 0.5];
    return { middle };
  }
}

var oddArray = [1, 2, 3, 4, 5];
var evenArray = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(
  "13. Function that finds either exact middle element of an odd array, or 2 middle elements of an even array"
);
console.log(
  "array: " + oddArray + " " + JSON.stringify(middleArrayElement(oddArray))
);
console.log(
  "array: " + evenArray + " " + JSON.stringify(middleArrayElement(evenArray))
);
