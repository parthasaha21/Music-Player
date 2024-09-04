let pogress = document.querySelector("#pogress");
let song = document.querySelector("#song");
let contIcon = document.querySelector("#control-icon");


song.onloadedmetadata = function() {
    pogress.max = song.duration; // Set the max value of the progress bar to the duration of the song
    updateProgress(); // Update progress immediately
}

// Function to play or pause the song
function playPause() {
    if (contIcon.classList.contains("fa-pause")) {
        song.pause();
        contIcon.classList.remove("fa-pause");
        contIcon.classList.add("fa-play");
    } else {
        song.play();
        contIcon.classList.add("fa-pause");
        contIcon.classList.remove("fa-play");
    }
}

// Update the progress bar as the song plays
song.ontimeupdate = function() {
    updateProgress();
}

// Function to update the progress bar value
function updateProgress() {
    pogress.value = song.currentTime;
}

// Update song time when progress bar is manually changed
pogress.oninput = function() {
    song.currentTime = pogress.value;
    if (song.paused) {
        song.play();
        contIcon.classList.add("fa-pause");
        contIcon.classList.remove("fa-play");
    }
}
