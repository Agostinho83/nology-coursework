/* This challenge is designed to test you knowledge of Types and Control Flow (If and Switch Statements) */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

/**
 * A function that programmatically concatenates two strings together with a space in between them.
 * This means if the string were different it would still add them together.
 *
 * @returns {string} John Smith
 */
const name = "John";
const surname = "Smith";

export const createFullName = () => {
    // Write your code here
    const fullname = name + " " + surname;
    return fullname;
    // or return name + " " + surname;
};

/**
 * A function that programmatically returns the largest number.
 * This means if the numbers were different it would still return the largest one.
 *
 * @returns {number} the largest number
 */
//const largeNumber1 = 100;
//const largeNumber2 = 200;
const n1 = 200
const n2 = 100

export const findLargestNumber = () => {
    // Write your code here
    if (n2 > n1) {
        return n2;
    } else {
        return n1;
    }
};

/**
 * A function that programmatically adds two numbers together.
 * This means if the numbers were different it would still add them together.
 *
 * @returns {number} the sum of both numbers
 */
const addNumber1 = 12;
const addNumber2 = 24;

export const addNumbers = () => {
    // Write your code here
    const addNumbers = addNumber1 + addNumber2;

    return addNumbers;
};

/* Intermediate Challenges */

/**
 * A function to programmatically find the length of a string.
 * This means if the string was different it would still find the length.
 *
 * @returns {number} the length of the string
 */
const password = "thisIsMyVeryLongPassword123456789";

export const findLengthOfPassword = () => {
    // Write your code here
    const len = password.length;

    return len;

};

/**
 * A function that programmatically tells you what the type of the variable is.
 * This variable was still one of the accepted types it would still output a string.
 * If the variable is a string output "This is a string"
 * If the variable is a number output "This is a number"
 * If the variable is a boolean output "This is a boolean"
 * If the variable is not any of those types output "I don't know what this thing is"
 *
 * @returns {string} This is a string
 */
const thing = "I am a thing";

export const findType = () => {
    // Write your code here
    const variableType = typeof thing;
    if (variableType === "boolean") {
        return "This is a boolean";
    } else if (variableType === "string") {
        return "This is a string";
    } else if (variableType === "number") {
        return "This is a number";
    } else {
        return "undefined";
    }
};

/**
 * A function to programmatically decide if a name is suitable for a name tag.
 * This means it must still work even if the name is different and return something if name provided is incorrect.
 * Name tag rules are: The name must be less than or equal to 8 characters and begin with a capital letter.
 *
 * @returns {boolean} true || false
 */
const nameTagOption = "Timothy";

export const getIsValidOnNameTag = () => {
    // Write your code here
    const nameInicial = nameTagOption.substring(1, 0);
    const isValidName = nameTagOption.length <= 8 && nameInicial === nameInicial.toUpperCase();

    return isValidName;
};

/* Advanced Challenges */

/**
 * A function that programmatically converts a number stored as a string to a number type.
 * This means if the string was different it would still convert it to a number.
 *
 * @returns {number} The number converted from the string "32.87" -> 32.87
 */
//const stringToConvert = "14.45";

export const convertStringToNumber = () => {
    // Write your code here
    const pointNumber = "14.45";
    const stringToNumber = parseFloat(pointNumber);

    return stringToNumber;
};

/**
 * A function that uses regex to programmatically test if a string contains uppercase letters.
 * This means if the string was different it would still accurately return true or false.
 *
 * !!NOTE!! You should use regex to solve this problem!
 *
 * @returns {boolean} true || false
 */
const stringWithUppercaseLetters = "I Am A String With Uppercase Letters";

export const getHasUppercaseLetters = () => {
    // Write your code here
    const regex = /\w/g;
    const hasUpperCaseLetters = regex.test(stringWithUppercaseLetters);

    return hasUpperCaseLetters;
};

/* Expert Challenge */

/**
 * A function that programmatically converts a string written in PascalCase to a string written in snake_case (lowercase with underscores).
 * This means if the PascalCase string changes then the function should still convert it.
 *
 * @returns {string} i_want_to_be_snake_case
 */
const pascalCaseVariableName = "IWantToBeSnakeCase";

export const convertPascalCaseToSnakeCase = () => {
    // Write your code here
    const splitStr = pascalCaseVariableName.split(/(?=[A-Z])/);
    const toSnakeCase = splitStr.join("_");
    const newStr = toSnakeCase.toLowerCase();

    return newStr;
};