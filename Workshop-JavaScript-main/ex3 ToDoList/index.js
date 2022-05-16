let mylist = document.getElementById("mylist");
let button = document.getElementById("button");
let name = document.getElementById("name")
let content = document.getElementById("content")

button.addEventListener('click',function () {
    var textname = name.value;
    var textcontent = content.value;
    var task = textname + ': '+ textcontent;
    var element = document.createElement("li");
    element.textContent = task;
    element.classList.add('licontent');
    element.addEventListener('click',()=>{
        mylist.removeChild(element);
    })
    mylist.appendChild(element);
})


