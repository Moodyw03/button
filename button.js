document.addEventListener('DOMContentLoaded', function() {
    var soundButton = document.getElementById('soundButton');
    var backgroundVideo = document.getElementById('backgroundVideo');
    var audio = new Audio('wheelsthatgo.mp3'); // Make sure this path is correct
    audio.volume = 1.0;
    var isPlaying = false;

    function togglePlayPause() {
        if (isPlaying) {
            audio.pause();
            audio.currentTime = 0;
            backgroundVideo.pause();
            backgroundVideo.style.display = 'none'; // Explicitly hide the video
            document.body.style.background = 'linear-gradient(to right, #74ebd5, #acb6e5)'; // Revert to gradient background
            isPlaying = false;
        } else {
            audio.play();
            backgroundVideo.play();
            backgroundVideo.style.display = 'block'; // *** Make sure to explicitly show the video
            document.body.style.background = 'none'; // Attempt to remove any background styling that might obscure the video
            isPlaying = true;
        }
    }

    soundButton.addEventListener('click', togglePlayPause);

    audio.addEventListener('ended', function() {
        isPlaying = false;
        audio.currentTime = 0;
        backgroundVideo.pause();
        backgroundVideo.style.display = 'none'; // Hide the video when audio ends
        document.body.style.background = 'linear-gradient(to right, #74ebd5, #acb6e5)'; // Revert to gradient
    });
});





