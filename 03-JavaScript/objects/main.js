const studentContainer = document.querySelector(".students-container");
//studentContainer.style.border = "50px solid red";

const person = {
    firstName: "Telmo",
    lastName: "Micanda",
    quote: "it doesn't get easier, you just go faster",
    skills: ["html", "css", "Javascript"],
    imgURL: "https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png",
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    },
    getSkillsHtml() {
        const SkillsHtml = this.skills.map(skill => `<li>${skill}</li>`);
        console.log(SkillsHtml);
        return SkillsHtml.join("\n "); // take array and join together. "\n "
    },

    getPersonHTML() {
        const personHTML = `
      <article class="student-card">
      <img src=${this.imgURL} />
      <h2>${this.getFullName()}</h2
      <blockquote>${this.quote}</blockquote>
      <h3>Skills</h3>
      <ul>${this.getSkillsHtml()}<ul>
      </article>
      `
        return personHTML;
    }
}

//studentContainer.innerHTML = person.getPersonHTML();
/*
for (let index = 0; index < 10; index++) {
    studentContainer.innerHTML += person.getPersonHTML();

}*/

// ADD A METHOD INTO PERSON OBJECT THAT RETURNS THE SAME HTML
//I WANT YOU TO USE THIS KEYWORD


//Classes SYNTAXE
//PASCALCASE -> NAMING CONVENTION FOR CLASSES

/*
class ExampleClass {
    constructor(firstName, lastName, age) {
        (this.firstName = firstName),
        (this.lastName = lastName),
        (this.age = age);
    }
    greet() {
        return `hi name is ${this.firstName} ${this.lastName}`;
    }
}
const exampleOne = new ExampleClass("Charlie", "Richardson", 30);
const exampleTwo = new ExampleClass("jone", "Doe", 27);

console.log(exampleOne);
console.log(exampleOne.greet());
console.log(exampleTwo);
console.log(exampleTwo.greet());*/

//Run Property
//Write Key Word

class Profile {
    constructor(firstName, lastName, quote, skills, imgURL) {
        (this.firstName = firstName),
        (this.lastName = lastName),
        (this.skills = skills),
        (this.quote = quote),
        (this.imgURL = imgURL);
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    getSkillsHtml() {
        const SkillsHtml = this.skills.map(skill => `<li>${skill}</li>`);
        console.log(SkillsHtml);
        return SkillsHtml.join("\n "); // take array and join together. "\n "
    }

    getProfileHTML() {
        const profileHTML = `
      <article class="student-card">
      <img src=${this.imgURL} />
      <h2>${this.getFullName()}</h2
      <blockquote>${this.quote}</blockquote>
      <h3>Skills</h3>
      <ul>${this.getSkillsHtml()}<ul>
      </article>
      `;
        return profileHTML;
    }

}

const Telmo = new Profile(
    "Telmo",
    "Micanda",
    "it doesn't get easier, you just go faster", ["html", "css", "Javascript"],
    "https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png",
);

const exampleOne = new Profile(
    "John",
    "Doe",
    "it doesn't get easier, you just go faster", ["html", "css", "Javascript"],
    "https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png",
);
const exampleTwo = new Profile(
    "Jane",
    "Doe",
    "it doesn't get easier, you just go faster", ["html", "css", "Javascript"],
    "https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png",
);

//console.log(Telmo.getProfileHTML());
studentContainer.innerHTML += Telmo.getProfileHTML();
studentContainer.innerHTML += exampleOne.getProfileHTML();
studentContainer.innerHTML += exampleTwo.getProfileHTML();