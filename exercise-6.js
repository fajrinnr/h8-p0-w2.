// 1. Melakukan Looping Menggunakan While //
var word1 = 'I love coding'
var word2 = 'I will become fullstack developer'
var number = 0

console.log('LOOPING PERTAMA')

while (number < 20) {
    number += 2
    console.log(`${number} - ${word1}`) 
}

console.log('LOOPING KEDUA')

while (number != 0) {
    console.log(`${number} - ${word2}`)
    number -= 2  
}

// 2. Melakukan Looping Menggunakan For //
console.log('LOOPING PERTAMA')

for(var angka = 1; angka <= 20; angka++) {
    console.log(angka + ' - ' + word1)
}

console.log('LOOPING KEDUA')

for(var angka = 20; angka !=0; angka--) {
    console.log(angka + ' - ' + word2)
}

// 3. Angka Ganjil dan Genap //

    // Ganjil Genap //
for(var angka = 1; angka <= 5; angka++) {
    if (angka %2 == 0)
    console.log('GENAP')
    else
    console.log('GANJIL')
}

    // Pertambahan Counter 2 //
var angka1 = 1

while (angka1 <= 100) {
    angka1 += 2
    if (angka1 %3 == 0)
    console.log(`${angka1} KELIPATAN 3`)
}

    // Pertambahan Counter 5 //
var angka2 = 1

while (angka2 <= 100) {
    angka2 += 5
    if (angka2 %6 == 0)
    console.log(`${angka2} KELIPATAN 6`)
}

    // Pertambahan Counter 9 //
var angka3 = 1

while (angka3 <= 100) {
    angka3 += 9
    if (angka3 %10 == 0)
    console.log(`${angka3} KELIPATAN 10`)
}
