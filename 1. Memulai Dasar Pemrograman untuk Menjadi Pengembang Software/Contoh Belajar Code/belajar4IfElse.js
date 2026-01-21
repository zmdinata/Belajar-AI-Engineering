//Gabungan dengan or (||)
let totalBelanja = 25;
let jenisMember= "Bronze";

if(totalBelanja > 20 || jenisMember === "premium"){
  console.log("You get a discount!");
} else {
  console.log("You don't get a discount.");
}

//Gabungan dengan and (&&)
if (totalBelanja > 50 && jenisMember === "premium"){
    console.log("You get a special discount!");
  } else {
    console.log("You don't get a special discount.");
  }