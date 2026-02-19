const values = [1,2,3,34,5]

const newValues = values.map(val =>{
  if(val % 2 ===0) return;
  return val = val *2;
});

console.log('newValues', newValues)



//
const numbers = [10,20,30,40];
const disValues = numbers.map((num) => {
  let newValue = num += num * 0.5
  return newValue;
})
console.log(disValues)
console.log(numbers)

//
const products = [{name: 'laptop', price: 100},
                  {name: 'mobiles', price:200}]
const updatePrice = products.map((item) => {
    item.price += item.price*0.50
    return { ...item}
});
console.log(updatePrice)
console.log(products)
//

const preson = {
  name: 'sushanth',
  age: 30,
  adress:{
    city: 'nzb'
  }
};
const newUser = {...preson}

newUser.name ='Pramod'
newUser.adress.city = 'hyd'

console.log(preson)
console.log(newUser)

//


