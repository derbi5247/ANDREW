$(document).ready(function(){
    $('.menu__toggle').click(function(){
        $(this).toggleClass('active');
        $('.preview__text-top').toggleClass('active')
        $('.preview__text-bot').toggleClass('active')
        $('.header__items').slideToggle(300);
    })
})


