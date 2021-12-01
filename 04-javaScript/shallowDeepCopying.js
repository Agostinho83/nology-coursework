// Shallow

const simpleArray = [1, 2, 3];
const simpleObject = { key: "value" };

const shallowArrayCopy = simpleArray;
const shallowObjectCopy = simpleObject;

// Interacting with original complex data type
// simpleArray.push(4);
// simpleObject.newKey = "new value";

// console.log(shallowArrayCopy);
// console.log(shallowObjectCopy);


// Deep Copy
// Spread operator -> ...

const deepArrayCopy = [...simpleArray];
const deepObjectCopy = {...simpleObject };

simpleArray.push(4);
simpleObject.newKey = "new value";

// console.log(simpleArray);
// console.log(deepArrayCopy);

// console.log(simpleObject);
// console.log(deepObjectCopy);

// Nested Objects
const complexArray = [
    [1],
    [2],
    [3]
];
const complexObject = { data: { key: "value" } };

const complexArrayCopy = complexArray.map(array => [...array]); //[...complexArray];  
const complexObjectCopy = {...complexObject, data: {...complexObject.data } }; //{...complexObject };

// complexArray[0].push(2);
// complexObject.data.newKey = "new value";

// console.log(complexArrayCopy);
// console.log(complexObjectCopy);


// JSON

const JSONObject = JSON.stringify(complexObject);
const parsedJSON = JSON.parse(JSONObject);

complexObject.data.newkey = "new value";
console.log(parsedJSON.data);