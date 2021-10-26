const video = document.querySelector('#my-video');
const progress = document.querySelector('.progress');
const playPauseBtn = document.querySelector('.buttons');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');

const volumeControl = document.querySelector('.volume-control');
const volumePanel = document.querySelector('.volume-panel');
const volumeRange = document.querySelector('input');
const volumeProgress = document.querySelector('.volume-progress');
const volumeBtn = document.querySelector('.volume-btn');
const fullVolume = document.querySelector('.volume-btn');
const muted = document.querySelector('.mute-btn');

//play pause button

function playPause() {
    if(video.paused) {
        video.play();
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'block';
    } else {
        video.pause();
        playBtn.style.display = 'block';
        pauseBtn.style.display = 'none';
    }
}

playPauseBtn.addEventListener('click', playPause);


//volume 
