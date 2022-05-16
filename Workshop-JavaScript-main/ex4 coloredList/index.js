let ligne = document.querySelectorAll("li")
function generateRandomCode() {
    var myRandomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return myRandomColor;
}
for(let i=0;i<ligne.length;i++){
    ligne[i].addEventListener('click',()=>{
        ligne[i].style.color = generateRandomCode()
    })
}