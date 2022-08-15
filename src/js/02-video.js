import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.getElementById('vimeo-player');
console.log(iframe);

let player = new Vimeo(iframe);
player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

var throttle = require('lodash.throttle');

console.log(throttle)