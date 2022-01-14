const fire = document.getElementById("fire");

function playAudio() {
    fire.play();
    fire.volume = 0.5;
}


const aliensSection = document.getElementById("spaceShips");

class spaceShip {
    constructor(name, sp, lossPoint, image) {
        this.name = name;
        this.sp = sp;
        this.lossPoint = lossPoint;
        this.image = image;
    }

    haveHit() {
        this.sp = this.sp - this.lossPoint;
    }

    destroyed() {
        this.sp = 0;
    }

}

let spaceShips = [];

const buildGame = () => {
    spaceShips = [];
    const momships = parseInt(document.getElementById("motherShip").value);
    const defeships = parseInt(document.getElementById("defenceShip").value);
    const attaships = parseInt(document.getElementById("attackShip").value);

    const motherShipNum = momships;
    const attackShipNum = attaships;
    const defenceShipNum = defeships;

    const sumShips = motherShipNum + attackShipNum + defenceShipNum;

    for (let index = 0; index < sumShips; index++) {
        let newSpaceShips;
        if (index < motherShipNum) {
            newSpaceShips = new spaceShip(
                "Mother Ship",
                100,
                9,
                "./assets/image/mothership.png"
            );
        } else if (index <= attackShipNum) {
            newSpaceShips = new spaceShip(
                "Attack Ship",
                45,
                12,
                "./assets/image/kindpng_1308621.png"
            );

        } else if (index <= sumShips) {
            newSpaceShips = new spaceShip(
                "Defense Ship",
                80,
                10,
                "./assets/image/kindpng_2025347.png"
            );
        }
        spaceShips.push(newSpaceShips);
    }
    updateHtml();
};

const updateHtml = () => {
    aliensSection.innerHTML = "";
    spaceShips.forEach((spaceShip) => {
        aliensSection.innerHTML += `<div>
          <img src=${spaceShip.image} />
          <p>${spaceShip.name}</p
          <p>${spaceShip.sp}</p
        </div>`;
    });
};

const endGame = () => {
    spaceShips.forEach((spaceShip) => spaceShip.destroyed());
    spaceShips.splice(0, spaceShips.length);
};

const delShip = () => {
    const randomIndex = Math.floor(Math.random() * spaceShips.length);
    const randomShip = spaceShips[randomIndex];
    randomShip.haveHit();
    if (randomShip.sp <= 0 && randomShip.name === "MotherShip") {
        hitSound.volume = 0.7;
        hitSound.play();
        endGame();
    } else if (randomShip.sp <= 0) {
        spaceShips.splice(randomIndex, 1);
    }
    updateHtml();
};

document.querySelector(".shoot").addEventListener("click", delShip);