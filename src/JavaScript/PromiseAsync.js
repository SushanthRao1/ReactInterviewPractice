const P1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('API is resolve'), 1000 )
});

const P2 = new Promise((resolve, reject) => {
    setTimeout(() =>  reject('API is failed'), 2000 )
})


const P3 = new Promise((resolve, reject) => {
    setTimeout(() =>  resolve('API resolved late'), 3000 )
})


Promise.race([P1,P2, P3])
    .then((result) => {
        console.log("all results:", result)
    })
    .catch((error) => {
        console.log('ErrorMessage', error)
    });

//1. promises
Promise.resolve()
    .then(() => {
        console.log('A');
        return Promise.resolve('B');
    })
    .then(console.log)
    .then(() => console.log('C'));


///
console.log('Start');

setTimeout(() => {
    console.log('Timeout 1');

    Promise.resolve().then(() => {
        console.log('Promise 1 inside Timeout');
    });

}, 0);

Promise.resolve().then(() => {
    console.log('Promise 2');

    setTimeout(() => {
        console.log('Timeout 2 inside Promise');
    }, 0);
});

console.log('End');


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


//4.
Promise.resolve(10)
    .finally(() => { throw new Error("boom"); })
    .then(console.log)
    .catch(err => console.log(err.message));

Promise.resolve(10)
    .finally(() => console.log(6))
    .then(console.log);


//
const fun = () => {
 try {
 return 1;
 } finally {
 return 3;
 }
};

console.log(fun());