
//je veux lorsque clique sur le button
//afficher masquer lemenu

//je reclique alors je vais afficher le menu

document.querySelector("button").addEventListener("click", function(){
    document.querySelector("ul").classList.toggle("hide");
})