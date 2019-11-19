function balikKata(kata) {
    var kataBalik = ''
    for (var i = kata.length - 1; i >= 0; i--){
        kataBalik += kata[i]
    }
    return kataBalik
}
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); 
  console.log(balikKata('John Doe')); 
  console.log(balikKata('I am a bookworm')); 
  console.log(balikKata('Coding is my hobby')); 
  console.log(balikKata('Super')); 