let playerArea = document.querySelector('.myplayer');
let media = playerArea.querySelector('video');
let controls = playerArea.querySelector('.myplayer__controls');

let play = controls.querySelector('.play');
let rwd = controls.querySelector('.rewind');
let fwd = controls.querySelector('.forward');
// let volume = controls.querySelector('.volume');
// let fullscreen = controls.querySelector('.fullscreen');

let timeArea = controls.querySelector('.timer');
let currentTime = timeArea.querySelector('.currentTime');
let videoTime = timeArea.querySelector('.videoTime');


media.addEventListener("timeupdate", function () {
    let minutes = Math.floor(media.currentTime / 60);
    let seconds = Math.floor(media.currentTime - (minutes * 60));

    let minuteValue;
    let secondValue;

    if (minutes < 10) {
        minuteValue = '0' + minutes
    } else {
        minuteValue = minutes
    }
    if (seconds < 10) {
        secondValue = '0' + seconds
    } else {
        secondValue = seconds
    }

    currentTime.textContent = minuteValue + ':' + secondValue
})

play.addEventListener('click', function(){
    if(media.paused) {
        togglePlayIcon();
        media.play();
    } else {
        togglePlayIcon();
        media.pause();
    }
})

rwd.addEventListener('click', function () {
    media.currentTime = media.currentTime - 5;
});
fwd.addEventListener('click', function () {
    media.currentTime = media.currentTime + 5;
});



function togglePlayIcon() {
    let icon = play.querySelector('i');
    icon.classList.toggle('ion-md-pause');
    icon.classList.toggle('ion-md-play');
}