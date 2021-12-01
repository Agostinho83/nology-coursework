// // Attach event listener to my button
// document.querySelector(".translate-btn").addEventListener("click", () => {
//     // Get the input value
//     const englishWord = document.querySelector(".input-box").value;

//     // If word matches, put translation into DOM
//     if (englishWord === "hello") {
//         document.querySelector(".translate-result").innerHTML = "bonjour";

//     } else if (englishWord === "goodbye") {
//         document.querySelector(".translate-result").innerHTML = "au revoir";
//     } else {
//         document.querySelector(".translate-result").innerHTML = "unavailable";
//     }
// });


// Make the code more testable
// Decouple logic
// 1. Function that tranlate english to french
// 2. Some dom interaction in an event listener

// Accept inputs => return outputs
const translateEnglishToFrench = (englishWord) => {
    if (englishWord === "hello") {
        return "bonjour";

    } else if (englishWord === "goodbye") {
        return "au revoir";
    } else {
        return "unavailable";
    }
};

document.querySelector(".translate-btn").addEventListener("click", () => {
    const englishWord = document.querySelector(".input-box").value;
    const frenchWord = translateEnglishToFrench(englishWord);

    document.querySelector(".translate-result").innerHTML = frenchWord;
});

/*
const aDate = new Date("02/16/2021");

const doesLotsOfThings = (firstName, lastName, birthday, arrayName) => {
  const fullName = firstName.toUpperCase() + " " + lastName.toUpperCase();
  console.log(fullName);

  const bday = new Date(birthday);
  const diff = aDate.getTime() - bday.getTime();

  let ms = 1000 * 3600 * 24;

  const result = diff / ms;
  console.log(result);

  let myArray = [];
  arrayName.forEach((item) => {
    if (item.includes("Tech")) {
      return myArray.push(item);
    } else {
      console.log("nope not tech");
    }
  });
};

const test = doesLotsOfThings("matt", "Bickell", "09/26/1993", [
  "Tech is booming",
  "Covid 19 yada yada yada",
  "Economy due for a resurgance!",
  "You can retrain in tech too!"
]);*/