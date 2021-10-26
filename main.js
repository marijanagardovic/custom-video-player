const video = document.querySelector('#my-video');
const progress = document.querySelector('.progress');
const playPauseBtn = document.querySelector('.buttons');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');

//play pause button

function playPause() {
    if(video.paused) {
        video.play();
        playBtn.style.display = 'block';
        pauseBtn.style.display = 'none';
    } else {
        video.pause();
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'block';
    }
}

playPauseBtn.addEventListener('click', playPause);



