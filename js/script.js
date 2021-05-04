let playerArea = document.querySelector('.myplayer');
let media = playerArea.querySelector('video');
let controls = playerArea.querySelector('.myplayer__controls');

let play = controls.querySelector('.play');
let rwd = controls.querySelector('.rewind');
let fwd = controls.querySelector('.forward');
// let volume = controls.querySelector('.volume');
// let fullscreen = controls.querySelector('.fullscreen');


play.addEventListener('click', function(){
    console.log('play video');
})