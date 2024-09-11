// rgba(255, 123, 0, 0.4)
const heading = document.querySelector(".title");
let offset = 0;

function inc(){
    const status = document.getElementById('status');
    const statusText = document.getElementById('statusText');
    const box = document.getElementById('box');
    if(offset < 10){
        offset++
        status.innerHTML = "+1"
        status.style.color = "white"
    }else if(offset < 100){
        offset += 10
        status.innerHTML = "+10"
        status.style.color = "purple"
        statusText.style.width = "125px"

    }else if(offset < 1000){
        offset += 100
        status.innerHTML = "+100"
        status.style.color = "aqua"
        statusText.style.width = "135px"
    }else{
        return null
    }
    imgShow();
    changeBackground()
    heading.innerHTML = offset;
}

function changeBackground() {
    const box = document.getElementById('box');
    if(offset == 10){
        box.style.background = "rgba(255, 123, 0, 0.4)";
        audio.play();
        setTimeout(function() {
            box.style.background = "rgba(0, 0, 0, 0.4)";
        }, 500);
    }else if(offset == 100){
        box.style.background = "rgba(255, 123, 0, 0.4)";
        audio.play();
        setTimeout(function() {
            box.style.background = "rgba(0, 0, 0, 0.4)";
        }, 500);
    }else if(offset == 1000){
        box.style.background = "rgba(43, 255, 0, 0.4)";
        audio.play();
        setTimeout(function() {
            box.style.background = "rgba(0, 0, 0, 0.4)";
        }, 2000);
    }
}


const img = document.getElementById('victory');
const title = document.getElementById('title');
const audio = document.getElementById('victorySound');

function imgShow(){
    if(offset >= 1000){
        img.style.width = "300px"
        audio.play();
        setTimeout(function() {
            img.style.width = "0";
        }, 5000);
        return null
    }
}

function dec(){
    if(offset < 10){
        if(offset <= 0){
            return null
        }else{
            offset--
        }
    }else if(offset <= 100){
        offset -= 10
    }else if(offset <= 1000){
        offset -= 100
    }else{
        return null
    }
   
    heading.innerHTML = offset;
}
