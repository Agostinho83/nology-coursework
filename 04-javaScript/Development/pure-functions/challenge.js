const todaysDate = new Date("02/16/2021");

const doesLotsOfThings = (firstName, lastName, birthday, arrayName) => {
    // Making a full name uppercase
    const fullName = firstName.toUpperCase() + " " + lastName.toUpperCase();
    console.log(fullName);

    // Days between two dates. One is a birthday. Days someone has been alive
    const bday = new Date(birthday);
    const diff = todaysDate.getTime() - bday.getTime();

    let ms = 1000 * 3600 * 24;

    const result = diff / ms;
    console.log(result);

    // Finding news headlines include the word tech
    let myArray = [];
    arrayName.forEach((item) => {
        if (item.includes("Tech")) {
            return myArray.push(item);
        } else {
            console.log("nope not tech");
        }
    });
};

// const test = doesLotsOfThings("matt", "Bickell", "09/26/1993", [
//     "Tech is booming",
//     "Covid 19 yada yada yada",
//     "Economy due for a resurgance!",
//     "You can retrain in tech too!"
// ]);
/*
const makeFullNameUpperCase = (firstName, lastName) => {
    const fullName = firstName.toUpperCase() + " " + lastName.toUpperCase();
    return fullName;
}
console.log(makeFullNameUpperCase("matt", "bickELl"));


const findDaysSinceBirth = (birthday) => {
    const todaysDate = new Date("02/16/2021"); // was a global and now is local
    const bday = new Date(birthday);

    const diff = todaysDate.getTime() - bday.getTime();

    let ms = 1000 * 3600 * 24;

    const result = diff / ms;

    return result;

}
console.log(findDaysSinceBirth("09/26/1993"));

const findHeadlineIncludingTech = (headlineArr) => {
    let techHeadlineArr = [];
    headlineArr.forEach((headline) => {
        if (headline.includes("Tech")) {
            return techHeadlineArr.push(headline);
        } else {
            console.log("nope not tech");
        }
    });

    return techHeadlineArr;

}

console.table(findHeadlineIncludingTech([
    "Tech is booming",
    "Covid 19 yada yada yada",
    "Economy due for a resurgance!",
    "You can retrain in tech too!"
]));
*/

// Challenge Purefunctions
// we can take a one line return
/*const makeFullNameUpperCase = (firstName, lastName) => firstName.toUpperCase() + " " + lastName.toUpperCase();*/
//or
const makeFullNameUpperCase = (firstName, lastName) => `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
console.log(makeFullNameUpperCase("matt", "bickELl"));


// Giving good variable makes it easier to read code

const findDaysSinceBirth = (birthday) => {
    const todaysDate = new Date(); // was a global and now is local
    const birthDate = new Date(birthday);

    const differenceInMS = todaysDate.getTime() - birthDate.getTime();
    const MSInDay = 1000 * 3600 * 24;

    const numberOfDaysSinceBirth = Math.floor(differenceInMS / MSInDay);

    //return numberOfDaysSinceBirth;
    return `${numberOfDaysSinceBirth} days since birth.`;

}
console.log(findDaysSinceBirth("09/26/1993"));




const findHeadlineIncludingTech = (headlineArr) => {
    /* const techHeadlineArr = headlineArr.filter((headline) => {
         // return headline.includes("Tech");
         return headline.toLowerCase().includes("tech");
     });

     return techHeadlineArr;*/
    // or 
    const techHeadlineArr = headlineArr.filter((headline) => headline.toLowerCase().includes("tech"));

    return techHeadlineArr;

}

console.table(findHeadlineIncludingTech([
    "Tech is booming",
    "Covid 19 yada yada yada",
    "Economy due for a resurgance!",
    "You can retrain in tech too!"
]));