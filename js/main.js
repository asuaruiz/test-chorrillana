function anadirBtn(){
    var papaBtn = document.createElement("div");
    var btnJs = document.createElement("button");
    var texto = document.createTextNode("Hover Css");
    papaBtn.classList.add("dropdown");
    papaBtn.appendChild(btnJs);
    btnJs.appendChild(texto);
    btnJs.id = "btn-js";
    btnJs.setAttribute("id","myList");
    btnJs.classList.add("btn","btn-primary","dropbtn");
    document.getElementById("padreBtn").appendChild(papaBtn);
}
anadirBtn();


function anadirHijo() {
    var ulnode = document.createElement("ul");
    ulnode.classList.add("dropdown-content")
    var node = document.createElement("li");
    node.classList.add("dropdown-menu-li");
    var textnode = document.createTextNode("Hijo Js 1");
    node.appendChild(textnode);
    ulnode.appendChild(node);
    document.getElementById("myList").appendChild(ulnode);
}
anadirHijo();




