const video = document.querySelector('#my-video');
const progress = document.querySelector('.progress');
const playPauseBtn = document.querySelector('#play-pause');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');

//play pause button

function playPause() {
    if(video.paused) {
        playBtn.style.display = 'block';
        pauseBtn.style.display = 'none';
        video.play();
    } else {
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'block';
        video.pause();
    }
}

playBtn.addEventListener('click', playPause);



