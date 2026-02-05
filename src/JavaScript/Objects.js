// object.groupby javascript  Ans: “Group by” means taking a collection of items and organizing them based on a key or property.
//1.
const objq = { person: { age: 10 } };
Object.freeze(objq);
objq.person.age = 20;
console.log(objq.person.age);

// Ans: 20,
//Object.freeze() makes an object’s existing properties immutable. It is a shallow freeze — nested objects inside are still mutable.


//2.
const obj = {
  name: 'JS',
  greet() {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
};

obj.greet();
obj.arrow();


// Ans: JS undefined // exp: Arrow functions capture this lexically from their surrounding scope, bind() has no effect on them.


const obj1 = {
  name: 'Alice',
  greet: function() {
    console.log(this.name);
  }
};

const greetFn = obj1.greet;
greetFn();



//3.
const o = Object.create(null); 
console.log(typeof o.toString);
