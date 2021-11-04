let sentence=prompt("Please type in a sentence");
console.log(sentence);



let firstsentence=sentence.charAt(0).toUpperCase();

let sen=sentence.length;

let lastsentence=sentence.charAt(sen-1).toUpperCase();


//funtion1
function cipher1 (decrypt){

alert(decrypt)

}
cipher1("The first letter of the sentence is "+firstsentence);
cipher1("The last letter of the sentence is "+lastsentence);
cipher1(firstsentence.concat(lastsentence));
cipher1(lastsentence.concat(firstsentence));

let buck=(sentence.concat(lastsentence.concat(firstsentence)));

//function2 
function cipher2(decrypt2){
alert(decrypt2)

}

cipher2(buck)



let divide=Math.floor(sen/2)

let division2=sentence.charAt(divide);
let division3=division2.concat(buck)
alert(division3)