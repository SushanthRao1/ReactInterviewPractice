function getDetails(name, age){
  console.log('This is '+ this.name + ' and age is '+ this.age)
};

const person1 = {name: 'Sushanth', age: 20}

const person2 = {name: 'Pramod', age:50}


const userDetails = getDetails.bind(person2)

userDetails()



const person = {
  name: "John",
  greet() {
    setTimeout(() => {
      console.log(this.name);
    }, 100);
  }
};

person.greet(); 