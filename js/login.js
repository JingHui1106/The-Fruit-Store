$(function () {
    // tabSwicth
    let phoneTabcont = $(".tabContentPhone");
    let accountTabcont = $(".tabContentAccount");
    $("ul.tabBoxSwitchUl").on('click', 'li', function () {
        let i = $(this).index();
        $(this).addClass("tab-active").siblings('li').removeClass("tab-active");
        $("div.tabcont").eq(i).addClass("active").siblings().removeClass("active");
    });

});