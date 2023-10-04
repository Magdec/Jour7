let character=""
let blanc=document.querySelector("footer div")

document.addEventListener('keypress',(event)=>{
    character+=(event.key);
    if ((character.length)<=42){
        blanc.innerHTML=character;
    }
    else{
        character=character.substring(1);
        blanc.innerHTML=character;
    }
});

