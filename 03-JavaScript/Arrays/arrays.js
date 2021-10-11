// 1. Create a coaches array
const coaches = ["Andy", "Sam", "Bex"];
console.log(coaches[1]);

// 2. Create an array of pets
const pets = ["Fido", "Rusty", "Jack"];

console.log(pets[2]);

// 3. Create a sample for loop
for (let index = 0; index < 5; index++) {
    console.log("The index on this loop was " + index);
}
for (let index = 0; index < pets.length; index++) {
    console.log(pets[index]);
}

pets.forEach((pet) => {
    console.log(pet)
})

coaches.forEach((coach) => {
    console.log(coach)
})

// 4. Use a map to prepend the word coach to each coach
//const newCoaches = coaches.map((coach) => {
//return "Coach - " + coach;
//})
//console.log(newCoaches);

// 5.Filter()
const names = ["Andy", "Sam", "Bex"];

const coaches = names.filter((name) => {
    return true;
})

console.log(coaches);


// 5.1 Filter includes.
const names = ["Andy", "Sam", "Bex"];
const coaches = names.filter((name) => {
    if (name.includes("e")) {
        return true;
    } else {
        return false;
    }
})

console.log(coaches);


// 5.2 Filter length.
const names = ["Andy", "Sam", "Bex"];

const coaches = names.filter((name) => {
    if (name.length > 3) {
        return true;
    } else {
        return false;
    }
})

console.log(coaches);

// 5.3 Filter scores.
const scores = [8, 9, 12];

const highScores = scores.filter((score) => {
    if (score > 10) {
        return true;
    } else {
        return false;
    }
})

console.log(highScores);

// or
const scores = [8, 9, 12];

const highScores = scores.filter((score) => {
    return score > 10;

})

console.log(highScores);

// or short form
const scores = [8, 9, 12];

const highScores = scores.filter((score) => score > 10)

console.log(highScores);