//style guide
//lebih baik menggunakan bahasa inggris


//Penamaan variable harus memiliki arti yang jelas
let n; //salah dan tidak jelas 
//lebih baik secara eksplisit
let namaDepan = "Zacky";
let namaBelakang = "Dinata";
console.log(namaDepan + " " + namaBelakang);


//Variable susah diingat
//const yyyymmdd = moment().format('YYYYMMDD'); //salah
//lebih baik menggunakan nama yang mudah diingat
// Pengganti moment (bawaan JS)
const tanggalSekarang = new Date().toISOString().slice(0,10).replace(/-/g, "");
console.log(tanggalSekarang);

//variable susah dicari
setTimeout(blastOff, 8640000); //salah karena nilai 8640000 ini?
//lebih baik menggunakan nama yang mudah dicari
const delayUntukBlastOff = 8640000;
setTimeout(blastOff, delayUntukBlastOff);
function blastOff() {
    console.log("Blast Off!");
}

//Hindari penambahan kata yang tidak perlu
const car = {
    carMake: "Toyota", //salah
    carModel: "Avanza", //salah 
    carColor: "Silver" //salah
};
const PaintCar = (car) => {
    car.carColor = "Red";
    return car;
}
console.log(PaintCar(car));

//lebih baik tanpa penambahan kata yang tidak perlu
const car2 = {
    make: "Toyota",
    model: "Avanza",
    color: "Silver"
};
const paintCar = (car) => {
    car.color = "Red";
    return car;
}
console.log(paintCar(car2));