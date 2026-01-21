function greeting(name="Guest" //parameter dengan nilai default
    ) {
  console.log("Hello, " + name //parameter
     + "!");
}

greeting();
greeting("Zacky"); //contoh pemanggilan fungsi dengan argumen

function add(a, b) {
  return a + b;
}
let sum = add(5, 10); //contoh pemanggilan fungsi dengan argumen
console.log("Sum: " + sum);