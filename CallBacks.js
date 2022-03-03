//1) Declare a JavaScript array and initialize it with some names
// (Lars, Jan, Peter, Bo, Frederik etc.). Use the filter method to create a new array with only names of length <=3.

const names = ["kurt","ole","hans","ib"];
var lenghtThree = names.filter(function (name) {
    return name.length <= 3;
})

// Use the forEach method to iterate and print (console.log) both the original and the new array.
names.forEach(function(name){
    console.log(name);})
lenghtThree.forEach(function (name){
    console.log(name)
})

// Use the names-array created above, and, using its map method, create a new array with all names uppercased.
var upperCase = names.map(function (name){
    return name.toUpperCase()
})
console.log(upperCase)