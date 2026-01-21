let name = "Zacky"; //let bisa di ubah
name = 'Zacky Muhammad Dinata '; //string bisa di ubah 
console.log("Hello, " + name + "!");

const score = 100;
//score = 150; //ini error karena const gabisa di ubah
console.log("Your score is: " + score);

//undefined (Tidak terdefinisi)
let score2;
console.log(typeof(score2));

// undefined number
let age = 20;
console.log(typeof(age));

//ditambah aritmatika
age = age + 1;
console.log("Happy birthday! You are now " + age + " years old.");
age++;
console.log("Age incremented: " + age);
age--;
console.log("Age decremented: " + age);
age += 10;
console.log("Age increased by 10: " + age);


//aritmatika
let a = 7;
let b = 3;
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;
console.log('Sum:', sum);
console.log('Difference:', difference);
console.log('Product:', product);
console.log('Quotient:', quotient);
console.log('Remainder:', remainder);

//boolean (memiliki 2 nilai: true atau false)
let isStudent = true;
console.log("Is student: " + isStudent);
isStudent = false;
console.log("Is student: " + isStudent);

const x=10;
const years=20;
let isAGreater = x > years;
console.log("Is X greater than years? " + isAGreater);
isAGreater = x < years;
console.log("Is X less than years? " + isAGreater);

//null (nilai kosong)
let emptyValue = null;
console.log("Empty value:", emptyValue);
console.log("Type of empty value:", typeof(emptyValue));