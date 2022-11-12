var string_list = ["С днём рождения меня", "Следующий день рождения через 365,25 дней", "Сегодня сайт вот такой :D", "Поздравьте меня в дискордике 👉👈"];

$(document).ready(() => {
    var d = new Date();

    if(d.getDate() == 13 && d.getMonth() + 1 == 11) {
        
        setTimeout(() => {
            $("p, h2, h3, h4, h5, h6, b, strong").each(function () {
                var index = Math.floor(Math.random() * string_list.length);
                var t = Math.floor(Math.random() * 2000);
                
                setTimeout(() => {
                    $(this).fadeOut(500, function() {
                        $(this).text(string_list[index]).fadeIn(800);
                    })
                }, t);

                $("i").each(function () {
                    $(this).fadeOut(500, function() {
                        $(this).attr("class", "fa fa-birthday-cake").fadeIn(800);
                    });
                });
        
                $("a").each(function () {
                    if(Math.random() > .6) {
                        $(this).fadeOut(500, function() {
                            $(this).attr("href", "https://donationalerts.com/r/cymontv2004").attr("onclick", "alert('да, я, негодяй такой, деняк захотел)))');").fadeIn(800);
                        });
                    }
                });
        
                $("img").each(function () {
                    $(this).fadeOut(500, function() {
                        $(this).attr("src", "https://media.discordapp.net/attachments/911031708906827796/1035412822273830943/2004.jpg?width=500&height=500").fadeIn(800);;
                    })
                });
            });
        }, 500);
    }
});
