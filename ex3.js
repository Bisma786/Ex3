"use strict";
//Q:3Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let Name = "biSmA gOnDal";
//lets make it in lowercase
let lowercase = Name.toLowerCase();
console.log(lowercase);
//lets make it in UPPERCASE
let uppercasename = Name.toUpperCase();
console.log(uppercasename);
//lets make it in titlecase
let words = Name.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + "";
}
;
console.log(titlecaseName);
