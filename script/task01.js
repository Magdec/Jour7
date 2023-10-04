let compteur=0

let blanc=document.querySelector("footer div")
blanc.addEventListener("click",()=>{
    compteur++
    console.log(compteur)
    blanc.innerHTML=compteur
});