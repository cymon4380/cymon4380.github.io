window.addEventListener('scroll', e => {
    $('body').css('--scrollY', this.scrollY + 'px');
});