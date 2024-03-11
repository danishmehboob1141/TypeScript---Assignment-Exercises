// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name 
// in lowercase, uppercase, and titlecase.

let myName = "danish mehboob"
console.log(myName.toLowerCase())   // lower case
console.log(myName.toUpperCase())   // upper case
console.log(myName.replace(/\b\w/g, (char) => char.toUpperCase())) // title case
