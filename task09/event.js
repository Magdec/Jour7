button1=document.getElementsByTagName('button')[0]

var texte = document.getElementsByTagName('p');

button1.addEventListener('click',()=>{
    for(var i = 0 , l  = texte.length ; i < l ; i ++ ){
        texte[i].style.display = "none";}
    }
)