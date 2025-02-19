let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0.1',
        width: '0.1',
        videoId: 'UE9fPWy1_o4',
        playerVars: {
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            modestbranding: 1
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
}

function onPlayerReady() {
    const volume = localStorage.getItem('volumeValue') || 50;
    player.setVolume(volume);
    $('#volume').val(volume);

    if (localStorage.getItem('volume') === 'off') {
        player.mute();
        $('.music-icon').removeClass('active');
    }
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        player.playVideo();
    }
}

$('.music-icon').on('click', function () {
    if ($(this).hasClass('active')) {
        player.mute();
        localStorage.setItem('volume', 'off');
        $(this).removeClass('active');
    } else {
        player.unMute();
        localStorage.setItem('volume', 'on');
        $(this).addClass('active');
    }
});

let musicHover;
$('.music-icon, .music-options').hover(function () {
    clearTimeout(musicHover);
    $('.music-options').fadeIn();
}, function () {
    musicHover = setTimeout(() => {
        $('.music-options').fadeOut();
    }, 500);
});
