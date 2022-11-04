function openUrl(url) {
    window.location.href = url;
}

function openSpecificLink(purpose) {
    switch(purpose) {
        case "tg": openUrl("https://t.me/cymon_moment_new"); break;
        case "yt": openUrl("https://youtube.com/c/CymonKSP"); break;
        case "gh": openUrl("https://github.com/cymon4380"); break;
        case "da": openUrl("https://www.donationalerts.com/r/cymontv2004"); break;
    };
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

$(document).ready(() => {
    var pictures = ['bg1.png', 'bg2.png', 'bg3.png', 'bg4.png'];

    $('.parallax-bg').hide();
    $('.parallax-bg').css('background-image', `url(assets/img/${pictures[Math.floor(Math.random() * pictures.length)]})`);
    $('.parallax-bg').fadeIn(500);
});
