// 1. Menyusun Barisan Bintang //
var rowInput1 = 5
var row = 1

while (row <= rowInput1) {
    row ++
    console.log('*')
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping //
var rowInput2 = 5

for (var baris = 1; baris <= rowInput2; baris++) {
    var star = ''
for (var kolom = 1; kolom <= rowInput2; kolom++){
    star += '*'
}
console.log(star)
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping //
var rowInput3 = 5

for (var baris = 1; baris <= rowInput3; baris++) {
    var star = ''
for (var kolom = 1; kolom <= baris; kolom++){
    star += '*'
}
console.log(star)
}
