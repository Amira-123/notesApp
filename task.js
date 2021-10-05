const person={
    name:'amira',
    age:'26'
}
// console.log(person)
const personJson=JSON.stringify(person);
// console.log(personJson)
const fs= require('fs');
fs.writeFileSync('txt.json',personJson)
const data=fs.readFileSync('txt.json').toString();
// console.log(data)

 const perObj= JSON.parse(data);
//  console.log(perObj)
 perObj.name="moh";
//  console.log(perObj);
 const secJson=JSON.stringify(perObj);
//  console.log(secJson);
fs.writeFileSync('txt.json',secJson)
const data2=fs.readFileSync('txt.json').toString();
console.log(data2)
