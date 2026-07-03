// function isLegal(age) {
//     if (age >= 18) {
//         console.log("You are legally an adult.");
//     }
//     else {
//         console.log("You are not legally an adult.");
//     }
// }

// // for (let i = 0; i <= 18; i++) {
// //     isLegal(i);
// // }

// while (age < 18) {
//     console.log("You are not legally an adult.");
//     age++;
// }


// user = ["jai", "james", "john", "joseph", "jordan"];

// const n = user.length;

// for (let i = 0; i < n; i++) {
//     console.log(user[i]);
// }




function isLegal(users) {

    let LegalUsers = [];

    for (let i = 0; i < users.length; i++) {
        if (users[i].age >= 18) {
            LegalUsers.push(users[i]);
        }
    }
    return LegalUsers;
}

const users = [{
    name: "jai",
    age: 20,
    city: "Hyderabad",
    male: true
}, {
    name: "james",
    age: 17,
    city: "New York",
    male: true
}, {
    name: "john",
    age: 25,
    city: "London",
    male: true
}]

AllowedLegalUsers = isLegal(users);

console.log(AllowedLegalUsers);