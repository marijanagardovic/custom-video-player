const video = document.querySelector('#my-video');
const progress = document.querySelector('.progress');
const playPauseBtn = document.querySelector('#play-pause');

//play pause button

function playPause() {
    if(video.paused) {
        playPauseBtn.className = 'pause';
        video.play();
    } else {
        playPauseBtn.className = 'play';
        video.pause();
    }
}

playPauseBtn.addEventListener('click', playPause);

//progress position

video.addEventListener('timeupdate', function() {
    var progPosition = video.currentTime / video.duration;
    progress.style.width = progPosition * 100 + "%";
})

