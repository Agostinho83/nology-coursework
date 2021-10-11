// Client Brief...
// Create an application which can be used tokeep track
// of a score in a football match..

// 1..It´s football there´s two teams, so lets keep two scores going
let teamScorOne = 0;
let teamScorTwo = 0;
let isGameStopped = false;

// 2.when a team one button is clicked, increment team1 score 
function handleTeamOneClick() {
    let team1 = teamScorOne++;
    document.getElementById('inc').value = team1;
}

// 2.when a team two button is clicked, increment team2 score
function handleTeamTwoClick() {
    let team2 = teamScorTwo++;
    document.getElementById('disc').value = team2;
}
// when do we finish/stop?
function handleStopGame() {
    isGameStopped = true;
}


//<script>
//let teamScorOne = 0;

//function handleTeamOneClick() {
//teamScorOne++;
// document.getElementById('inc').value = teamScorOne;
//}
//</script>
//<button onclick=" handleTeamOneClick();">Team1</button>
//<input type="text" id="inc" value="0"></input>

function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
}

function teamTwoincreaseValue() {
    var value = parseInt(document.getElementById('num').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('num').value = value;
}

function teamTwodecreaseValue() {
    var value = parseInt(document.getElementById('num').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('num').value = value;
}