// You are given an array:
// var fruit = ['Apple', 'Banana', 'Orange'];
// a) Find the index of 'Banana' and replace 'Banana' with 'Mango'.
// b) Remove 'Orange' and add 'Watermelon'.

var fruit = ['Apple', 'Banana', 'Orange'];
// i will try find index of Banana
console.log(fruit[1]);
// now i will try to replace Banana with Mango
fruit[1] = 'Mango';
// print replace output
console.log(fruit);
// now i will try to remove last element from array 
fruit.pop();
// without last element 
console.log(fruit);
// now add a new element 
fruit.push('Watermelon');
// print with watermelon
console.log(fruit);