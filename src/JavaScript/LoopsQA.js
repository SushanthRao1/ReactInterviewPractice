
// Check palindrome
// Anagram check
// Group by property
// Sort array of objects
// Merge two arrays without duplicates
// Deep clone object
// Find missing number// 
//   Fibonacci series (iterative and recursive)
//   Remove duplicates from an array or Array of object with some Key as unique (using loop or filter method)
//    Input: [1, 2, 2, 3, 4, 4]
//    Output: [1, 2, 3, 4]
//   Split an array into chunks of fixed size (dynamic UI)
//     Input: chunk([1, 2, 3, 4, 5], 2)
//     Output: [[1, 2], [3, 4], [5]]
//   Find the first non-repeating character in a string
//     Input: "aabbcddee"
//     Output: "c"
// Implement debounce function (commonly asked with search input use case)
// memoization utility to cache results of a pure function





// Loop based questions to practice daily.
// 1. Remove duplicates from a string while preserving order.
// 2. Find the largest number in an array
// 3. Reverse a string using a loop.
// 4. Capitalize the first letter of each word in a string.
// 5.  Return the frequency of unique characters in a string (duplicates counted once).


// **
// Find the Nth largest number in an array (handle duplicates).
// Find the sum of all numbers in an array.



// Remove Duplicates from Array of Objects
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 1, name: "Alice" },
  { id: 3, name: "Charlie" },
  { id: 2, name: "Bob" }
];


const uniqueUsers = users.reduce((acc, current) => {
  if (!acc.some(user => user.id === current.id)) {
    acc.push(current);
  }
  return acc;
}, []);

console.log(uniqueUsers);


//find the largest

const name = [1,2,3,5,8,4,5,'s','s'];

function findCount(name){
  let count = {};
  for(let char of name){
  count[char] = (count[char] || 0)+1;
  }
  return count;
}

console.log(findCount(name))

// removeDup

const value = [1,2,2,4,5,5];

function removeDup(value){
  let unique ="";
  for(let val of value){
    if(!unique.includes(val)){
      unique += val
    }
  
}
  return unique;
};

console.log(removeDup(value))



const number3 = [1,2,5,8,9,10];
function largestNum(arr) {
  let largestVal = -Infinity;

  for (let num of arr) {
    if (num > largestVal) {
      largestVal = num;
    }
  }

  return largestVal;
}

console.log(largestNum(number3));


function nthLargest(arr, n) {
  let tempArr = [...arr];

  for (let i = 1; i < n; i++) {
    let max = tempArr[0];
    let maxIndex = 0;

    for (let j = 1; j < tempArr.length; j++) {
      if (tempArr[j] > max) {
        max = tempArr[j];
        maxIndex = j;
      }
    }

    tempArr.splice(maxIndex, 1);
  }

  // find max again
  let max = tempArr[0];
  for (let i = 1; i < tempArr.length; i++) {
    if (tempArr[i] > max) {
      max = tempArr[i];
    }
  }

  return max;
}


console.log(nthLargest([3, 5, 1, 8, 2], 2));



const name = [1,2,4,4,5,5];

function charOccurance(name) {
  
  let charVal = {}

   for (let char of name) {
    charVal[char] = (charVal[char] || 0) + 1;
  }
  

  return charVal;
}

console.log(charOccurance(name));


const name1 = 'programming';

function removeDup(name) {
  let unique = {};
  let result = "";

  for (let char of name) {
    if (!unique[char]) {
      unique[char] = true;
      result += char;
    }
  }

  return result;
}

console.log( removeDup(name1))


for (let i = 0; i < 3; i++) {
    let i = 'inner';
    console.log(i);
}

// Ans: inner, inner, inner.  // exp: It's Concept: Variable Shadowing, Both exist independently; they don’t interfere.


//2.
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log('The index of this number is: ' + i);
    }, 1000);
}

// Ans: 5,5,5,5,5 as we used var. if we use let it will print 1,2,3,4,5


//3. find the 5!(5 factorial)
function factorial(n) {
    let result = 1;
    for (let i = 1; i < n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5))


//4. filter an array keep only even numbers in javascript without inbuilt function

let numbers = [1, 2, 3, 4, 5, 6];
let filteredArray = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        filteredArray.push(numbers[i]);
    }
}
console.log(filteredArray);


//5.take the nested array Example and Flatten a nested array manually in javascript
let nestedArray = [1, [2, [3, 4], 5], 6];

function flattenArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // If element is an array, recursively flatten it
            let flattened = flattenArray(arr[i]);
            for (let j = 0; j < flattened.length; j++) {
                result.push(flattened[j]);
            }
        } else {
            // If element is not an array, just push it
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]


//6. RevertString
function revertStringWithInBuilt(str){
    return str.split('').reverse().join('');
}
console.log(revertStringWithInBuilt('hello'))

function revertString(str){
  let tempStr = '';
    for( let i=0; i<str.length; i++){
      tempStr = str[i]+tempStr
    }
  console.log(tempStr);
}
revertString('Sushanth')

//7. removeDuplicates

function removeDup(val){
  let tempVal = [];
     for (let i = 0; i<val.length; i++){
       if(!tempVal.includes(val[i])){
         tempVal.push(val[i])
       }
     }
  console.log(tempVal);
}

removeDup([1,2,3,4,4])

const removeDup2 = arr => [...new Set(arr)];

console.log(removeDup2([1,2,3,4,2,3]));


//8.Find Largest Number

function findLargestNum(number){
  let tempNum= number[0];
  for (let i=0; i<number.length;i++){
    if(tempNum <= number[i]){
      tempNum = number[i]
    }
  }
  return tempNum
}

console.log(findLargestNum([1,2,3,4]))


const largestNumbre = Math.max(...[1,2,3,4,5]);
console.log(largestNumbre)

const smallestNumbre = Math.min(...[1,2,3,4,5])
console.log(smallestNumbre)


//9. charecter Occurance
function characterCount(str, value){
  let tempStr = 0
  for( let i=0; i<str.length; i++){
    if(str[i] === value){
      tempStr++;
    }
  }
  return tempStr
}

console.log(characterCount('tempSSStr', 'S'));

//10. 
function characterCount(str, value) {
  let count = 0;
  value = value.toLowerCase();

  for (let char of str.toLowerCase()) {
    if (char === value) count++;
  }

  return count;
}

console.log(characterCount('tempStr', 't')); // → 2


//11. 

for (let i = 1; i <= 4; i++) {
  let pattern = "";

  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }

  console.log(pattern);
}

