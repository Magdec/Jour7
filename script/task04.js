let bouttonPlus=document.getElementsByTagName("button")[0]
let bouttonMoins=document.getElementsByTagName("button")[1]

if (document.body.style.fontSize == "") {
    document.body.style.fontSize = "16px";
  }

bouttonPlus.addEventListener("click",()=>{
    let taille=parseInt(document.body.style.fontSize)
    taille ++
    document.body.style.fontSize=taille+"px"
})

bouttonMoins.addEventListener("click",()=>{
    let taille=parseInt(document.body.style.fontSize)
    taille --
    document.body.style.fontSize=taille+"px"
})

let select=document.querySelector("select")

select.addEventListener("change",()=>{
    let texte = select.options[select.selectedIndex].value;
    document.body.style.backgroundColor=texte
})

