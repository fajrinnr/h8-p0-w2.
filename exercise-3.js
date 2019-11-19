// Variabel //
var nama = 'Jampang'
var peran = 'Tabib'

// Conditional Kosong //
if (nama === '' && peran === '')
console.log("Nama harus diisi!")

// Conditional peran kosong //
else if (nama === 'Fajrin' && peran === '')
console.log("Halo Fajrin, Pilih peranmu untuk memulai game!")
else if (nama === 'Ihsan' && peran === '')
console.log("Halo Ihsan, Pilih peranmu untuk memulai game!")
else if (nama === 'Jampang' && peran === '')
console.log("Halo Jampang, Pilih peranmu untuk memulai game!")

// Conditional Fajrin //
else if (nama === 'Fajrin' && peran === 'Ksatria')
console.log(`Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`)
else if (nama === 'Fajrin' && peran === 'Tabib')
console.log(`Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka.`)
else if (nama === 'Fajrin' && peran === 'Penyihir')
console.log(`Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)

// Conditional Ihsan //
else if (nama === 'Ihsan' && peran === 'Ksatria')
console.log(`Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`)
else if (nama === 'Ihsan' && peran === 'Tabib')
console.log(`Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka.`)
else if (nama === 'Ihsan' && peran === 'Penyihir')
console.log(`Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)

// Conditional Jampang //
else if (nama === 'Jampang' && peran === 'Ksatria')
console.log(`Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`)
else if (nama === 'Jampang' && peran === 'Tabib')
console.log(`Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka.`)
else if (nama === 'Jampang' && peran === 'Penyihir')
console.log(`Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
