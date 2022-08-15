import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.getElementById('vimeo-player');


const player = new Vimeo(iframe);
const throttle = require('lodash.throttle');
let previousTime = localStorage.getItem("videoplayer-current-time");

if(previousTime !== null){
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
}



function getCurrentTimePercentage(currentTime){
    console.log(currentTime.seconds);
    localStorage.setItem("videoplayer-current-time", `${currentTime.seconds}`);
}

player.on('timeupdate', throttle(getCurrentTimePercentage, 1000));



