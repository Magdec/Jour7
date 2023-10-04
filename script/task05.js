let canvas = document.getElementsByTagName("canvas")[0]
const ctx = canvas.getContext("2d");
ctx.fillStyle='white';
ctx.beginPath();
ctx.moveTo(6, 6);
ctx.lineTo(14, 10);
ctx.lineTo(6, 14);
ctx.closePath();
ctx.fill();


let musique=new Audio("https://web.archive.org/web/20220217112309/https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3")
canvas.addEventListener("click",()=>{
    musique.play()
    console.log("play")
} )

let boutton1=document.getElementsByTagName("button")[0]
boutton1.addEventListener("click",()=>{
    musique.pause()
})

let boutton2=document.getElementsByTagName("button")[1]
boutton2.addEventListener("click",()=>{
    musique.pause();
    musique.currentTime = 0;
})

let boutton3=document.getElementsByTagName("button")[2]
boutton3.addEventListener("click",()=>{
    if (musique.volume!==0){
        musique.volume=0
    }
    else{
        musique.volume=1
    }

})
