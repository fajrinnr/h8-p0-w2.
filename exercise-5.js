// 1.Let's Form a Sentence //
var word = 'Hacktiv8';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh)

// 2. Index Accessing - 1 by 1 //
var wordLong = 'Hacktiv8 is so awesome dude'
var firstWord = wordLong[0] + wordLong[1] + wordLong[2] + wordLong[3] + wordLong[4] + wordLong[5] + wordLong[6] + wordLong[7]
var secondWord = wordLong[9] + wordLong[10]
var thirdWord = wordLong[12] + wordLong[13]
var fourthWord = wordLong [15] + wordLong[16] + wordLong[17] + wordLong[18] + wordLong[19] + wordLong[20] + wordLong[21]
var fifthWord = wordLong[23] + wordLong[24] + wordLong[25] + wordLong[26]

console.log('Fisrt Word  : ' + firstWord)
console.log('Second Word : ' + secondWord)
console.log('Third Word  : ' + thirdWord)
console.log('Fourth Word : ' + fourthWord)
console.log('Fifth Word  : ' + fifthWord)

// 3. Breaking Sentence (Again) using Substring //
var wordLong1 = 'Hacktiv8 is so awesome dude'
var firstWord1 = wordLong1.substring(0,8)
var secondWord1 = wordLong1.substring(9,11)
var thirdWord1 = wordLong1.substring(12,14)
var fourthWord1 = wordLong1.substring(15,22)
var fifthWord1 = wordLong1.substring(23,27)

console.log('Fisrt Word  : ' + firstWord1)
console.log('Second Word : ' + secondWord1)
console.log('Third Word  : ' + thirdWord1)
console.log('Fourth Word : ' + fourthWord1)
console.log('Fifth Word  : ' + fifthWord1)

// 4. Breaking Sentence (yet Again) and Count Each Length //
var wordLong2 = 'Hacktiv8 is so awesome dude'
var firstWord2 = wordLong2.substring(0,8)
var secondWord2 = wordLong2.substring(9,11)
var thirdWord2 = wordLong2.substring(12,14)
var fourthWord2 = wordLong2.substring(15,22)
var fifthWord2 = wordLong2.substring(23,27)

var firstWordLength = firstWord2.length
var secondWordLength = secondWord2.length
var thirdWordLength = thirdWord2.length
var fourthWordLength = fourthWord2.length
var fifthWordLength = fifthWord2.length

console.log('Fisrt Word  : ' + firstWord2 + ' , Width Length : ' + firstWordLength)
console.log('Second Word : ' + secondWord2 + '       , Width Length : ' + secondWordLength)
console.log('Third Word  : ' + thirdWord2 + '       , Width Length : ' + thirdWordLength)
console.log('Fourth Word : ' + fourthWord2 + '  , Width Length : ' + fourthWordLength)
console.log('Fifth Word  : ' + fifthWord2 + '     , Width Length : ' + fifthWordLength)