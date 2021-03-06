const videoContainer = document.querySelector('.container');
const video = document.querySelector('#my-video');
const progress = document.querySelector('.progress');
const playPauseBtn = document.querySelector('.buttons');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');

const volumeControl = document.querySelector('.volume-control');
const volumeRange = document.querySelector('input');
const volumeProgress = document.querySelector('.volume-progress');
const volumeBtn = document.querySelector('.volume-btn');
const fullVolume = document.querySelector('.volume-btn');
const muted = document.querySelector('.mute-btn');

const current = document.querySelector('.current-time');
const progressBar = document.querySelector('.progress-bar');
const fullMode = document.querySelector('.maximize');
const settingsBtn = document.querySelector('.settings');

const displaySpeed = document.querySelector('.display-speed');
const speedOne = document.querySelector('.first-speed');
const speedTwo = document.querySelector('.second-speed');
const speedNormal = document.querySelector('.normal-speed');
const speedThree = document.querySelector('.third-speed');
const speedFour = document.querySelector('.fourth-speed');


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

// mute video or unmute

function toggleMute () {
    video.muted = !video.muted;
    if(video.muted) {
        fullVolume.style.display = 'none';
        muted.style.display = 'block';
        volumeRange.value = 0;
    } else {
        volumeRange.value = video.volume * 100;
        fullVolume.style.display = 'block';
        muted.style.display = 'none';
    }
}

volumeControl.addEventListener('click', toggleMute);

// function for progress of volume

function volumeInput() {
    video.volume = volumeRange.value / 100;

    if(volumeRange.value == 0) {
        fullVolume.style.display = 'none';
        muted.style.display = 'block';
    } else {
        video.muted = false;
        fullVolume.style.display = 'block';
        muted.style.display = 'none';
    }
}

volumeRange.addEventListener('input', volumeInput);

//duration time

function currentTime() {
    let currentMin = Math.floor(video.currentTime / 60);
    let currentSec = Math.floor(video.currentTime - currentMin * 60);

    current.innerHTML =  `${currentMin < 10 ? '0'+currentMin : currentMin}:${currentSec < 10 ? '0'+currentSec : currentSec}`;
}

video.addEventListener('timeupdate', currentTime);

// progress width change

function changeProgress () {
    const percentage = (video.currentTime / video.duration) * 100;
    progress.style.width = `${percentage}%`;
}

video.addEventListener('timeupdate', changeProgress);

// change progress bar on click 

progressBar.addEventListener('click', (e) =>{
    const progressTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
    video.currentTime = progressTime;
})

// fullscreen mode

function changeMode () {
    if(!document.fullscreenElement) {
        videoContainer.requestFullscreen();
    } else {
        videoContainer.exitFullScreen();
    }
}

fullMode.addEventListener('click', changeMode);

//setings for video speed

settingsBtn.addEventListener('click', () => {
    displaySpeed.classList.toggle('active');
})

speedOne.addEventListener('click', () => {
    video.playbackRate = 0.5;
})

speedTwo.addEventListener('click', () => {
    video.playbackRate = 0.75;
})

speedThree.addEventListener('click', () => {
    video.playbackRate = 1.75;
})

speedFour.addEventListener('click', () => {
    video.playbackRate = 2.0;
})

speedNormal.addEventListener('click', () => {
    video.playbackRate = 1.0;
})