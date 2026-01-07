//1. promises
Promise.resolve()
    .then(() => {
        console.log('A');
        return Promise.resolve('B');
    })
    .then(console.log)
    .then(() => console.log('C'));


//2.
function foo() {
    return Promise.resolve("P");
}
async function bar() {
    return "A";
}
console.log(foo() instanceof Promise, bar() instanceof Promise);

// ans: true true -- exp: Async functions always return Promises, even if returning a plain value.



//3.
console.log(0);
Promise.resolve(1)
    .then(
        (value) => value + 2,
        (value) => value + 3
    )
    .then((value) => { throw new Error(value + 4); })
    .catch((error) => console.log(error.message))
    .finally(() => console.log(5))
    .finally(() => 6)
    .then(console.log);
console.log(7)

