// 1. let´s do something with some headlines
let currentHeadline = " News in the world today"
const currentarticle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus finibus nibh, consectetur porta urna eleifend at. Vivamus sit amet turpis sit amet nulla cursus bibendum vitae nec velit."


// true, false
const isEditor = true;
// or
const hasPassedTest = true; //nofake news
// number
const amountOfWords = 957;



// 2. Before we start we need to make sure the  headline isn´t too long
if (currentHeadline.length > 15) {
    currentHeadline = currentHeadline + "...";
}

// 3. show it to the user
console.log("Nology Post 2021")
console.log("Headline:" + "" + currentHeadline)
console.log(currentarticle);


//function
// 4. Example of a meaningful function name..getData() is vague :(
function getPost() {
    //Get your post in here..
}