                //1. Создать страницу, которая выводит нумерованный список песен

var playList = [
    {
    author: "LED ZEPPELIN",
    song:"STAIRWAY TO HEAVEN"
    },
    
    {
    author: "QUEEN",
    song:"BOHEMIAN RHAPSODY"
    },
    
    {
    author: "LYNYRD SKYNYRD",
    song:"FREE BIRD"
    },
    
    {
    author: "DEEP PURPLE",
    song:"SMOKE ON THE WATER"
    },
    
    {
    author: "JIMI HENDRIX",
    song:"ALL ALONG THE WATCHTOWER"
    },
    
    {
    author: "AC/DC",
    song:"BACK IN BLACK"
    },
    
    {
    author: "QUEEN",
    song:"WE WILL ROCK YOU"
    },
    
    {
    author: "METALLICA",
    song:"ENTER SANDMAN"
    }
    ]; 
    
function layoutPlaylist(songList){
    let ol = document.createElement("ol");
    songList.forEach(element => {
        let li = document.createElement("li");
        let text = document.createTextNode(` Author: "${element.author}",  song: "${element.song}".`);
        li.appendChild(text);
        ol.appendChild(li);
        console.log(li);
    });
    return ol;
}

document.getElementById("list").appendChild(layoutPlaylist(playList));

    
                //2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает

const modalWindowVisible = document.querySelector(".open_btn");
const modalWindowHidden = document.querySelector(".close_btn");
const modalWindowControl =  document.querySelector(".window");

modalWindowVisible.onclick = function (){
    modalWindowControl.classList.remove("window"); 
}

modalWindowHidden.onclick = function (){
    modalWindowControl.classList.add("window"); 
}

                // 3 Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет

const brightnessControl =  document.querySelectorAll(".light");
const switchButton = document.querySelector(".toggle_btn");
let clicks = 0;

function clear(){
    for(let i = 0; i < 3; i++){
        brightnessControl[i].classList.remove("light-active");
    }
}

switchButton.onclick = function(){
    clear();
    clicks += 1;
    if (clicks === 1){
        brightnessControl[1].classList.add("light-active");
    }else if (clicks === 2){
        brightnessControl[2].classList.add("light-active");
    }else{
        clicks = 0;
        brightnessControl[0].classList.add("light-active");
    }
}

                