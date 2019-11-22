var hari = 21
var bulan = 1
var tahun = 1945
var bulanString = ''

switch (bulan) {
    case 1 :
    bulanString = 'Januari'
    break
    case 2 :
    bulanString = 'Februari'
    break
    case 3 :
    bulanString = 'Maret'
    break
    case 4 :
    bulanString = 'April'
    break
    case 5 :
    bulanString = 'Mei'
    break
    case 6 :
    bulanString = 'Juni'
    break
    case 7 :
    bulanString = 'Juli'
    break
    case 8 :
    bulanString = 'Agustus'
    break
    case 9 :
    bulanString = 'September'
    break
    case 10 :
    bulanString = 'Oktober'
    break
    case 11 :
    bulanString = 'November'
    break
    case 12 :
    bulanString = 'Desember'
    break
}

if (hari > 0 && hari <= 31){
    if (tahun >= 1900 && tahun <= 2200){
        if (bulan > 0 && bulan <= 12){
            console.log(hari + ' ' + bulanString + ' ' + tahun)
        }
    }
} 
