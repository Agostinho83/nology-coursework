const user = {
    id: "fddfhgyrs123vghvjhvu",
    loggedIn: true,
    information: {
        firstName: "charlie",
        lastName: "richardson",
        age: 30,
        likes: ["cycling", "disco", "coding"],
    },
    contact: {
        email: "charlie@charlie.co.uk",
        contactNumber: "07814527782",
        address: {
            houseNumber: 12,
            nameOfRoad: "electric avenue",
            postcode: "pl179ns",
            country: "uk"
        }
    },

};

const userTwo = {
    id: "fddfhgyrs123vghvjhvu",
    loggedIn: true,
    information: {
        firstName: "charlie",
        lastName: "richardson",
        age: 30,
        likes: ["cycling", "disco", "coding"],
    },
    contact: {
        email: "charlie@charlie.co.uk",
        contactNumber: "07814527782",
        address: {
            houseNumber: 12,
            nameOfRoad: "electric avenue",
            postcode: "pl179ns",
            country: "uk"
        }
    },

};


// console.log(user.contact.contactNumber);

// // AGE
// console.log(user.information.age);
// // COUNTRY
// console.log(user.contact.address.country);
// // CONTACT OBJECT
// console.log(user.contact);

// console.log(user.information.likes);

// // ACCESS INDIVIDUAL ITEM
// console.log(user.information.likes[2]);

const userArray = [user, userTwo];

userArray.forEach(user => {
    //console.log(user.id);
    console.log(user.information.likes);

})