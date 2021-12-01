//  const message = {
//      userName: "Charlie",
//      content: "Have a great day",
//  };

// //Looping over Object
// for (let key in message) {
//     console.log(key);
//     console.log(message[key]);
// }

// // Create a function that loops throuh a message object
// // Check that All of the value are string
// // you will return true if they are and false otherwise

const validMessage = {
    userName: "Charlie",
    content: "Have a great day",
};

// const invalidMessage = {
//     userName: "Charlie",
//     content: 45654566,
// };

const invalidMessage = {
    userName: "Charlie",
    error: 45654566,
};

// const validateMessageObject = (messageObject) => {
//     for (let key in messageObject) {
//         const typeCheck = typeof messageObject[key] !== "string";
//         if (typeCheck) {
//             return false;
//         }
//     }
//     return true; //out of for look return true
// };

// console.log(validateMessageObject(validMessage));
// console.log(validateMessageObject(invalidMessage));

// Getting Values/keys from Object part1

const validMessageValues = Object.values(validMessage);
const invalidMessageValues = Object.values(invalidMessage);
// console.log(validMessageValues);
// console.log(invalidMessageValues);


// console.log(
//     validMessageValues.every((validMessage) => {
//         const typeCheck = typeof validMessage === "string";
//         return typeCheck;
//     })

// );
// console.log(
//     invalidMessageValues.every((validMessage) => {
//         const typeCheck = typeof validMessage === "string";
//         return typeCheck;
//     })

// );

//OBJECT KEYS

const validMessageKeys = Object.keys(validMessage);
const invalidMessageKeys = Object.keys(invalidMessage);

console.log(validMessageKeys);
console.log(invalidMessageKeys);

// WRITE A FUNCTION THAT WILL CHECK THE KEYS OF A MASSAGE OBJECT
// VALID KEYS -> [ "userName", "content"]
// SO I WANT YOU RETURN TRUE FOR VALID AND FALSE FOR INVALID

const validateMessageKeys = (messageObject) => {
    // GET THE KEYS
    const objectKeys = Object.keys(messageObject);
    // CHECK IF THEY ARE VALID
    const keyCheck = objectKeys.every((key) => {
        const validKeys = ["userName", "content"];
        return validKeys.includes(key);
    });
    // RETURN THIS CHECK
    return keyCheck;

};

// console.log(validateMessageKeys(validMessage));
// console.log(validateMessageKeys(invalidMessage));

// OBJECT ENTRIES
const validMessageEntries = Object.entries(validMessage);
const invalidMessageEntries = Object.entries(invalidMessage);

console.log(validMessageEntries);
console.log(invalidMessageEntries); //Arrays inside of array


// Validate a message Object


const validateMessageObject = (messageObject) => {
    const objectEntries = Object.entries(messageObject);

    const validation = objectEntries.every((entry) => {
        const key = entry[0];
        const value = entry[1];

        //Check the type of value
        const typeCheck = typeof value === "string";
        //Check key is valid
        const validKeys = ["userName", "content"];
        const keyCheck = validKeys.includes(key);
        return typeCheck && keyCheck;
    });

    return validation;
};
console.log(validateMessageObject(validMessage));
console.log(validateMessageObject(invalidMessage));