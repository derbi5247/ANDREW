// $(document).ready(function(){
//     $('.menu__toggle').click(function(){
//         $(this).toggleClass('active')
//         $('.header__items').slideToggle(300);
//     })
// })


$(document).ready(function() {
    $('.burger').click(function(){
        $(this).toggleClass('active')
        $('.nav__links').toggleClass('active')
        $('.burger__line').toggleClass('active')
        $('body').toggleClass('active');
    })
})

// let burger = document.querySelector('burger')