document.addEventListener('DOMContentLoaded', function () {
    var fullscreenButton = document.getElementById('fullscreenButton');
    var gameCanvas = document.getElementById('game-canvas');

    fullscreenButton.addEventListener('click', function () {
        toggleFullscreen(gameCanvas);
    });

    function toggleFullscreen(element) {
        if (!document.fullscreenElement) {
            // If the document is not currently in fullscreen, request it
            element.requestFullscreen();
        } else {
            // If the document is currently in fullscreen, exit fullscreen
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }
});
