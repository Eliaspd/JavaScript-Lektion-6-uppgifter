var heltal = 5;
var decimal = 5.5;
var string = "Elias"
var sant = true
var falskt = false

console.log(typeof heltal);
console.log(typeof decimal);
console.log(typeof string);
console.log(typeof sant);
console.log(typeof falskt);

var bilar = ["BMW", "Mercedes", "Volvo", "Audi"]

function variables() {
    
    alert(bilar[bilar.length - 1])
}

function userInput() {
    var result = prompt("Mata in ditt användarnamn")
    document.querySelector(".user").innerHTML = result
    if(result !== null) {
return false
}
console.log(result);
}

console.log(bilar);
console.log(bilar[3]);
console.log(bilar[bilar.length - 1]);