// 1.Filter()
const scores = [8, 9, 12];

const highScores = scores.filter((score) => score > 10)

console.log(highScores);

scoresArr = [7, 7, 6, 2, 3, 2, 3]

const totalScores = scoresArr.reduce((accumulator, current) => {
    return accumulator + current;
}, 0)
console.log(totalScores);

/*
// POP(): Remove an item from the end of an array
let cats = ['Bob', 'Willy', 'Mini'];

cats.pop(); // ['Bob', 'Willy']
//pop() returns the removed item.

//PUSH(): Add items to the end of an array
let dogs = ['Bob'];

dogs.push('Willy'); // ['Bob', 'Willy']

console.log(dogs.push('Puff', 'George')); // ['Bob', 'Willy', 'Puff', 'George']
//push() returns the new array length.


//SHIFT(): Remove an item from the beginning of an array
let cats = ['Bob', 'Willy', 'Mini'];

cats.shift(); // ['Willy', 'Mini']
//shift() returns the removed item.


//UNSHIFT()): Add items to the beginning of an array
let cats = ['Bob'];

cats.unshift('Willy'); // ['Willy', 'Bob']

cats.unshift('Puff', 'George'); // ['Puff', 'George', 'Willy', 'Bob']
//unshift() returns the new array length.
/** */

const nums = [1, 2, 34, 54, 55, 34, 32, 11, 19, 17, 54, 66, 13];
const evens = [];
const odds = [];

const evenNumbers = function(nums) {
    for (let i = 0; i < nums.length; i++) {

        if ((nums[i] % 2) != 1) {
            evens.push(nums[i]);
            console.log(evens);
        } else {
            odds.push(nums[i]);
            console.log(odds);
        }
    }

};

alert(evens);
alert(odds);