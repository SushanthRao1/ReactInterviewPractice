// clouser
function getBankBalance(amount){
  let balance = amount;
  return {
    withDraw(withMoney){
      if(balance >= withMoney){
      balance = amount - withMoney
      console.log(balance)
      } else{
        console.log('insufficient fund')
      }
    },
    Deposite(deposit){
      balance = balance+ deposit
      console.log(balance)
    },
    currentBal(){
      console.log(balance)
    }
  }
}


// const balanceDetails = getBankBalance(1000);
// balanceDetails.currentBal();
// balanceDetails.withDraw(3000);
// balanceDetails.currentBal();


// function prototype && class prototype

function Person(name, age){
  this.name = name
  this.age = age
}

Person.prototype.getDetails = function(){
   console.log('person is', this.name, 'age is ', this.age)
}

Person.getUserDetails= function(){
  console.log('these are user Details', this.name)
}
const userObj = {
  name: 'Sushanth',
  age: 10
}
console.log(Person.getUserDetails.call(userObj))



const UserDetails = new Person()
const NewUser = new Person('pramod', 50)

NewUser.getDetails()
UserDetails.getUserDetails.call(userObj);

console.log(UserDetails instanceof Person )

//////------




// callBack fn
// promises
// currying
// loop based Questions
// debounce & throttle
// map group by and use reducer



//fetchAPI
//customeHook for debounce
//dropdown list for countries and states



