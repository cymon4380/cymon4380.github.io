const fadeDuration = 300;

$(document).ready(() => {
    $("body").fadeIn(fadeDuration);

    $(document).on("click", "a:not([href^='#']):not([href^='tel']):not([href^='mailto']):not([target^='_blank'])", function(e) {
        e.preventDefault();
        $("body").fadeOut(fadeDuration);
        setTimeout(() => {
            window.location.href = $(this).attr("href");
        }, fadeDuration);
    });
});