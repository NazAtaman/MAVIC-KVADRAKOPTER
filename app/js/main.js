$(function(){

$('.product__slider').slick ({

    prevArrow:'<button class="slider__btn slider__btn__left "><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',

    nextArrow:'<button class="slider__btn slider__btn__right "><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1" /></svg></button>',

    infinite:false,
    
});



$('.question__item__title').on ('click', function(){

    $('.question__item').removeClass ('question__item--active');
    $(this).parent().addClass ('question__item--active')
});




$('#fullpage').fullpage ({
    autoScrolling: true,
    scrollHorizontally: true,
    sectionSelector: '.page-section',
});
  
});


let money = prompt("Ваш бюджет на месяц", "ГРН ДОЛ"),
    time = prompt("Введите дату в формате", "ДД ММ ГГ");

let appData = {
    budjet: money,
    timeData: time,
    expenses:{},
    savings:false,
    timeData:time
}

let a1 = prompt("Ваш бюджет на месяц", "ГРН ДОЛ"),
    a2 = prompt("Введите дату в формате", "ДД ММ ГГ"),
    a3 = prompt("Ваш бюджет на месяц", "ГРН ДОЛ"),
    a4 = prompt("Введите дату в формате", "ДД ММ ГГ");

    appData.expenses[a1] = a2;
    appData.expenses[a3] = a4;

    alert(appData.timeData / 30);