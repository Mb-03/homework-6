// მიშო ბარათაშვილი 17/05

const firstName = "Misho";
const lastName = "Baratashvili";
const email = "mb@gmail.com";
const phoneNumber = "995+ 123 123";
// let - ით განვსაზღვრავ ისეთ რაღაცეებს, რომლების მნიშვნელობის შეცვლას ვაპირებ
let age = 21;
let hobby = "coding";
let isStudent = true;

// + - ებით ვაერთიანებ strings და ჩემ variables

console.log("First Name: " + firstName);
console.log("Last Name: " + lastName);
console.log("Email: " + email);
console.log("Phone Number: " + phoneNumber);
console.log("age: " + age);
console.log("Hobby: " + hobby);
console.log("I am a Student: " + isStudent);

hobby = "programming";

// ამით age-ს მნიშვნელობას მუვატებ 1
age += 1;

console.log("New Hobby: " + hobby);
console.log("New age: " + age);
