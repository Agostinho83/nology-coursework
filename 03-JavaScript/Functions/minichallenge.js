// write a function named getDescription that:
// Takes 4 arguments: number of children, partner´s name, geographic location, job title.
// Outputs yours statement to the console like so: "I am currently a X living in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

const getDescription = (partner, amountOfChildren, location, jobTitle) => {
    const message = "I am currently a " + jobTitle + " living in " + location + ", and married to " + partner + " with " + amountOfChildren + " Kids. "
    console.log(message)
}
getDescription("jane", 2, "London", "Software Coach")


// **The Lifetime Supply of Snickers**

// Ever wonder how much a lifetime supply of Snickers would actually be? wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of your life (based on a constant max age).
// outputs the result to console like so:"you will need X to last you until the ripe old age of y"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.


const calculateSupply = (currentAge, amountOfSnickeresPerDay) => {
    const maxAge = 90;
    const amountOfSnickeresPerLifetime = (amountOfSnickeresPerDay + 365) * (maxAge - currentAge);
    const message = 'you will need ' + amountOfSnickeresPerLifetime + ' bars of snickers to last you until the ripe old age of ' + maxAge
    console.log(message);
}
calculateSupply(28, 4);
calculateSupply(28, 2.5);
calculateSupply(28, 12);

// **The Temperature Converter**
// .It´s hot out! Not. Let´s make a celsius/farenheit converter..

const celsiusFahrenheit = (celsius) => {
    const celsiusInF = (celsius * 9) / 5 + 32;
    console.log(celsius + 'ºC is ' + celsiusInF + 'ºF');
}
celsiusFahrenheit(21)

// **The Puppy Age Calculator**
// you know how old your dog is in human years, but what about dog years? Calculate it!
const calculateDogAge = (age) => {
    const dogAge = age * 7;
    console.log('Your dog is ' + dogAge + ' years old in dog years! ')
}
calculateDogAge(2);
calculateDogAge(6);
calculateDogAge(10);