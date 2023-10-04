let blanc=document.querySelector("footer div")
blanc.addEventListener("click",()=>{
function rempli(nom){
        while (nom==="") {
            nom = prompt("What's your name ?")
        }
        if (nom!==""){
            if (confirm("Are you sure that "+ nom +" is your name ?")==true){
                alert("Hello "+ nom +" !")
                blanc.innerHTML=("Hello "+ nom+ " !")
            }
            else {
                var nom = prompt("What's your name ?")
                rempli(nom)
            }
        }
    }
    var nom = prompt("What's your name ?")
    rempli(nom)
})


