const numbre = [1,5,3,5,8];

const updatedNum = numbre.reduce((acc, currentVal) => { console.log(acc, currentVal)
    return acc+currentVal}, 0);

console.log(updatedNum);

const fruitBasket = ['apple', 'banana', 'cherry', 'apple', 'apple', 'cherry'];

const fritCount = fruitBasket.reduce((acc, count) => {
    acc += count
    return acc
}, 0)
console.log(fritCount);