let myScore = 100;
let computerScore = 90;

if (myScore > computerScore) {
  console.log("You win!"); // kondisi jika nilai saya lebih besar
} else if //jika ada 2 kondisi atau lebih
(myScore < computerScore) {
  console.log("You lose!"); // kondisi jika nilai komputer lebih besar
}   else {
  console.log("It's a tie!"); // kondisi jika nilai sama
}

//Operator perbandingan lainnya
//== (sama dengan)
//!= (tidak sama dengan)
//=== (sama dengan nilai dan tipe data)
//!== (tidak sama dengan nilai dan tipe data)
//> (lebih besar dari)
//< (lebih kecil dari)
//>= (lebih besar atau sama dengan)
//<= (lebih kecil atau sama dengan)

let a = 10;
let b = "10";

console.log(a == b);  // true, karena nilai sama meskipun tipe data berbeda
console.log(a === b); // false, karena tipe data berbeda
console.log(a != b);  // false, karena nilai sama
console.log(a !== b); // true, karena tipe data berbeda
console.log(a > 5);   // true, karena 10 lebih besar dari 5
console.log(a < 20);  // true, karena 10 lebih kecil dari 20
console.log(a >= 10); // true, karena 10 sama dengan 10
console.log(a <= 15); // true, karena 10 lebih kecil dari 15