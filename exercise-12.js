// Logic Challenge - Konversi Menit //
function konversiMenit(menit) {
    var menitKe = Math.floor(menit / 60);
    var detikKe = (menit %60)
    if (detikKe < 10)
    return menitKe + ':0' +  detikKe
    else
    return menitKe + ':' + detikKe
  }
  
  // TEST CASES
  console.log(konversiMenit(70)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00
  