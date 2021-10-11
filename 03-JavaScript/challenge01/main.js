function calculateyearsUntilRetirement(event) {
    const currentAge = event.target.value;


    // start your code here..
    const yearsleft = 65 - currentAge;
    alert(yearsleft)
}

//Translate hello and goodbye into french for users
// if it is neither of these, alert'not recognised'
function getGreetingInFrench(event) {
    const greeting = event.target.value;
    if (greeting == "Hello") {
        alert('Bonjour')

    } else if (greeting == "Goodbye") {
        alert('Au revoir')

    } else {
        alert('not recognised')
    }


}

// calculater

function MultiplicationBy09(event) {

    const currentNumber = event.target.value;


    // start your code here..
    const multiply = currentNumber * 9;
    alert(multiply)
}

function DivideBy10(event) {

    const currentNumber = event.target.value;


    // start your code here..
    const Divide = currentNumber / 10;
    alert(Divide)
}

function getCityCountry(event) {
    let country = event.target.value;

    if (!country) return;

    // Stop lowercase/uppercase tricking our code

    console.log(country)
    let city;
    switch (country) {
        case "Argentina":
            city = "Buenos Aires";
            break;
        case "Australia":
            city = "Canberra";
            break;
        case "Angola":
            city = "Luanda";
            break;
        case "Belgium":
            city = "russels";
            break;
        case "Brazil":
            city = "Brasilia";
            break;
        case "Canada":
            city = "Ottawa'";
            break;
        case "Cape verde":
            city = "Praia";
            break;
        case "China":
            city = "Beijing";
            break;
        case "Colombia":
            city = "Bogota";
            break;
        case "Denmark":
            city = "Copenhagen";
            break;
        case "Germany":
            city = "Berlin";
            break;
        case "Hungary":
            city = "Budapest";
            break;
        case "Italy":
            city = "Rome";
            break;
        case "United Kingdom":
            city = "London";
            break;
        case "Portugal":
            city = "Lisbon";
            break;
        default:
            break;
    }
    alert("The city is " + city);
}