//console.log("alert");

// what is a promise
// a promise has 3 states...pending, resolved and rejected


// let samsPromises = new Promise((resolve, reject) => {
//     let a = 1 + 2;
//     if (a == 2) {
//         resolve("success");
//     } else {
//         reject("Failed");
//     }
// })

// samsPromises
//     .then((message) => {
//         console.log(message + '. I am in the Then');

//     })
//     .catch((message) => {
//         console.log(message + '. I am in the CATCH');

//     })


// https://randomuser.me/api/


// const heading = document.querySelector('h1');

// const getRandomUser = () => {
//     fetch('https://randomuser.me/api/')
//         //.then(res => console.log(res));
//         .then(res => res.json())
//         //.then(json => console.log(json.results[0].name.first)) 
//         .then(json => heading.innerHTML = json.results[0].name.first)
//         .catch(err => console.log(err))
// }

// getRandomUser();

// challenge 
// https://api.punkapi.com/v2/beers/random

// Make a request to the above api... from the response please display the following data in a 'card' (div)
// - name(h1)
// - tagline (h4)
// - description (p)
// - abv (h2/3)
// - the first food that it pairs well with (p)


const makeBeerCard = beer => {
    return `
<div class ="beer-container">
    <h1>${beer.name}</h1>
    <h4>${beer.tagline}</h4>
    <p>${beer.description}</p>
    <h3>${beer.abv}%</h3>
    <p>Served best with: ${beer.food_pairing[0]}</p>
</div>
`
}

const getRandomBeer = () => {
    fetch('https://api.punkapi.com/v2/beers/random')
        .then(res => res.json())
        .then(json => document.body.innerHTML += makeBeerCard(json[0]))
}

getRandomBeer();