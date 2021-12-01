// const fruitObjectArray = [
//     { fruit: "apple" },
//     { fruit: "banana" },
//     { fruit: "orange" }

// ];

// //  Array[index].key
// //console.log("banana");

// // console.log(fruitObjectArray[0].fruit);

// // console.log(fruitObjectArray[1].fruit);

// // console.log(fruitObjectArray[2].fruit);

// // Iterate over our array -> array of the value

// const fruitValueArray = fruitObjectArray.map((fruitObject) => {
//     const fruiValue = fruitObject.fruit;
//     return fruiValue;
// })

// //console.log(fruitValueArray); //

// const searchTerm = "a"; //if change to an gives banana, orange
// const matchingFruitArray = fruitObjectArray.filter((fruitObject) => {
//     const fruitMacth = fruitObject.fruit.includes(searchTerm);
//     return fruitMacth;
// })

// console.log(matchingFruitArray);

// // create a function that takes an array of fruit
// // -> Map over the array and generate some <li>FRUITNAME</LI>
// // -> Array turn it into a string
// // RETURN a string

// const generateFruitHTML = (fruitArray) => {
//     const html = fruitArray.map(fruitObject => {
//         return `<li>${fruitObject.fruit}</li>`
//     });
//     return html.join("");
// }
// console.log(generateFruitHTML(fruitObjectArray));

// ADDING MORE KEY TO OUR OBJECT
// const fruitObjectArray = [
//     { fruit: "apple", rating: 8, price: 100 },
//     { fruit: "banana", rating: 5, price: 100 },
//     { fruit: "orange", rating: 6, price: 120 }
// ];

// console.log(fruitObjectArray[2].rating);

// const generateFruitHTML = (fruitArray) => {
//     const html = fruitArray.map(fruitObject => {
//         const cardHtml = `
//           <di>
//           <h3>${fruitObject.fruit}</h3>
//           <p>This fruit is ${fruitObject.rating} / 10 </p>
//           <p>Buy now for ${fruitObject.price}</p>
//           </div>
//           `

//         return cardHtml;
//     });
//     return html.join("");
// }

// console.log(generateFruitHTML(fruitObjectArray));

// CONVERTING PRICE AND CAPITALIZE THE NAME
// if you can convert price £1.00 £1.50
// I want you to capitalize the name apple -> Apple
const fruitObjectArray = [
    { fruit: "apple", rating: 8, price: 150 },
    { fruit: "banana", rating: 5, price: 180 },
    { fruit: "orange", rating: 6, price: 120 }
];

const generateFruitHTML = (fruitArray) => {
    const html = fruitArray.map(fruitObject => {
        const price = (fruitObject.price / 100).toFixed(2);

        const captalized = fruitObject.fruit[0].toUpperCase() + fruitObject.fruit.slice(1);

        const cardHtml = `
          <di>
          <h3>${captalized}</h3>
          <p>This fruit is ${fruitObject.rating} / 10 </p>
          <p>Buy now for £${price}</p>
          </div>
          `
        return cardHtml;
    });

    return html.join("");
}

//console.log(generateFruitHTML(fruitObjectArray));

// SORT THE OBJECTS BY RATING HIGHEST FIRST
const sortedByHighestRating = fruitObjectArray.sort((a, b) => {
    //return b.rating - a.rating;
    return b.price - a.price;
})
console.log(sortedByHighestRating);
console.log(generateFruitHTML(sortedByHighestRating));