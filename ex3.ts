//Q:3Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let Name: string="biSmA gOnDal";
//lets make it in lowercase
let lowercase: string= Name.toLowerCase();
console.log(lowercase)
//lets make it in UPPERCASE

let uppercasename:string=Name.toUpperCase();
console.log(uppercasename)

//lets make it in titlecase
let words:string[]=Name.split(" ");
let titlecaseName:string=""
for (let i = 0 ; i < words.length; i++) {
titlecaseName +=words[i].charAt(0).toUpperCase()+ words[i].slice(1).toLowerCase()+""};
console.log(titlecaseName)


