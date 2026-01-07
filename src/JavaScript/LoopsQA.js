//1.
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

