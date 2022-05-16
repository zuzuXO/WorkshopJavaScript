let randomNr = Math.floor(Math.random()*11);
let tentative = 0;
let nod = document.getElementById("btn");
let myNumber = document.getElementById("try");
let value;
let mystyle = getComputedStyle(nod);
//alert("You have 3 attempts");
console.log(randomNr);
function resultat(){
    if(value == randomNr && tentative <=3){
        alert("Congrats !");
    } else if(tentative < 3 && value != randomNr){
        alert("Try again, you have"+(3-tentative)+" more attempt(s)");
    } else{
        alert("You lost")
        let ok = confirm("Do you wanna play again ?")
        if(ok == false){
            myNumber.setAttribute('disabled','disabled');}
        else {
            tentative = 0;
        }

    }
}
nod.addEventListener('click', function(){
    tentative = tentative + 1;
    console.log(tentative);
    value = myNumber.value;
    resultat(value);
})
