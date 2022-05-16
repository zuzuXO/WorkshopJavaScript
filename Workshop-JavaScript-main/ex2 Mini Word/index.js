var test = document.getElementById("test");
var color = document.getElementById("color");
var size = document.getElementById("size");
var police = document.getElementById("police");
/*button.addEventListener('click',function(){
    var newcolor = color.value;
    var newsize = size.value+'px';
    var newpolice = police.value;
    test.style.color = newcolor;
    test.style.fontSize = newsize;
    test.style.fontFamily = newpolice;
})*/
color.addEventListener('change',()=>{
    let couleur = color.value;
    test.style.color = couleur;
})
size.addEventListener('change',()=>{
    let taille = size.value; 
    test.style.fontSize = taille + 'px';
})
police.addEventListener('change',()=>{
    let forme = police.value;
    test.style.fontFamily = forme;
})