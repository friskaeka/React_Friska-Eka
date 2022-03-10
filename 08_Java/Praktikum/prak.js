var a = 5;
let b = "Kampus merdeka";
const nama = "Budi";
let terdaftar = false;
let lengkap_arr = [a, b, nama, terdaftar];

if (terdaftar != true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}
 a = b;
// nama = b;

console.log("array = " + nama);
console.log("a adalah = " + a);
console.log("b adalah = " + b); 

console.log(lengkap_arr[2])

function perkenalan() {
    let asal = "indonesia";
    return console.log(
        "perkenalkan nama saya " +
        nama +
        "nomor urut " +
        a +
        " sekarang sedang mengikuti " +
        b +
        "berasal dari " +
        asal
    );
}
perkenalan()

// 2. 
//  a. line 21,22,23 tidak tampil karna kondisi didalam if adalah (terdaftar === true) sedangkan, dideklarasi terdaftar = false.
//  b. error karna nama memiliki variabel const. const sendiri tidak dapat diganti-ganti
//  c. dapat dieksekusi, karna, tidak mempengaruhi. 

const foo = ['budi', 'sinta', 'ayu'];
[a,b,c] = foo;

console.log(b)

let bdays = ['10-17','05-19','20-19']
// .filter() , .map(), .find(), .forEach(), .findIndex()

 bdays = bdays.map((tanggal)=>{
    return tanggal.replace('-','/')
})

console.log(bdays)

let value  = [1,2,3,4,5,6]
value = value.map((angka)=>{
    return angka*2
})
console.log(value)

let arr = [1.5, 2.56, 5.1, 12.33]
arr = arr.map((desimal)=>{
    return Math.ceil(desimal)
})
console.log(arr)