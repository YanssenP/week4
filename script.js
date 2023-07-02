/*Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
Use a loop to iterate through the array and calculate the average age.

Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
How do you access the last element of any array?

How do you access the first element of any array?

Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array

Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

Write a function that takes an array of numbers and returns the average of all the elements in the array.

Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

Create a function of your own that solves a problem. In comments, write what the function does and why you created it.*/



//1a. substract the value of the first element from the value in the last element.
var ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log(ages[ages.length-1] - ages[0])

//1b. use method push to add an element to ages 
// and repeat step 1a
ages.push(20)
console.log(ages[ages.length-1] - ages[0])

//1c.loop through the array
//calculate the total of the array and divide that total by the length of the array to find the average
let total = 0
for(i = 0; i < ages.length; i++) {total += ages[i]}

console.log(total / ages.length)

//2 
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
//2a.loop through the array
//calculate the total letters per name and divide that total letters per name by the name length
var totalLetters = 0
for(i = 0; i < names.length; i++) {totalLetters += names[i].length}
var averageNumberOfLettersPerNames = totalLetters / names.length
console.log(averageNumberOfLettersPerNames)

//2b. concatenate all the names together, separated by spaces
let text = ('')
for(i = 0; i < names.length; i++) {text = text.concat(names[i] + ' ')}
console.log(text)

//3 How do you access the last element of any array?
//Array[-1]

//4 How do you access the first element of any array?
//Array[0]

//5 create new array called nameLengths
// add the previously created names array and add the length of each name
let nameLengths = []
for(i = 0; i < names.length; i++) { nameLengths.push(names[i].length)}
console.log(nameLengths)

//6 loop through the array namelenghts and calculate the total of all the elements in namelengths
total = 0
for(i = 0; i < nameLengths.length; i++) {total += nameLengths[i] }
console.log(total)

//7 function that takes 2 parameters and return the word to itself to concat a word n times
let word = (" 'Hello' ")
let repeated = word.repeat(3);

console.log(repeated)

//8 function that takes two parameters, firstName and lastName, and returns a full name. first name and last name separated by a space.
function fullName(firstName, lastName) {
    return (firstName + " " + lastName)}
    console.log(fullName("Aarul", "Perianen"))


//9 function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100
function maxNumber (ages) {
    total = 0
    for(i = 0; i < ages.length; i++){
        total += ages[i]
    }
if(total > 100) {
    return true}
}

console.log(maxNumber(ages))

//10 function that takes an array of numbers and returns the average of that array

function averageNumber (ages){
    total = 0
    for(var i = 0; i < ages.length; i++) {
        total += ages[i]}

        console.log(total / ages.length)
    }

