
var n = 0;

$('.to-up').click(function () {
    n++;
    $('.container').css('animation-play-state', 'running');
    $('.cube-box').css('transform', `rotateX(${n * 90}deg)`);
    setTimeout(function () {
        $('.container').css('animation-play-state', 'paused');
    }, 2000);
});

$('.to-down').click(function () {
    n--;
    $('.container').css('animation-play-state', 'running');
    $('.cube-box').css('transform', `rotateX(${n * 90}deg)`);
    setTimeout(function () {
        $('.container').css('animation-play-state', 'paused');
    }, 2000);
});