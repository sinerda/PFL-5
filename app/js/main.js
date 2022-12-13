$(function () {
  $('.practice__info-btn').on('mouseover', function () {
    $(this).toggleClass('active');
  })
  $('.practice__info-btn').on('mouseout', function () {
    $(this).toggleClass('active');
  })

  $('.partners__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    rows: 0,
    centerMode: true,
  });

  $('.header-button').on('click', function () {
    $('.header-menu').toggleClass('active');
  })
  $('.header-menu__close').on('click', function () {
    $('.header-menu').toggleClass('active');
  })
  $('.header-menu a').on('click', function () {
    $('.header-menu').toggleClass('active');
  })

  // Редактируем текст внутри HTML (убираем лишние пробелы), чтобы красиво смотрелся на мобайле
  const _487px = window.matchMedia("(max-width: 487px)");
  window.onresize = function () {
    const title = $('.practice__info-block-title');
    const text = $('.practice__info-block-text');

    if (_487px.matches) {
      // Исправленный текст для мобильной версии
      title.html('Інвестор (донор)');
      text.html('Інвестор (донор) вкладає власні кошти у купівлю модульного будинку + підписання офіційного договору.');
    }
    else {
      // Оригинал
      title.html('Інвестор ( донор )');
      text.html('Інвестор ( донор ) вкладає власні кошти у купівлю модульного будинку + підписання офіційного договору.');
    }
  }


  // 
  // НЕ ДОДЕЛАЛ. НЕ РАБОТАЕТ!
  $(".donate-money__tabs").tabs();
  let
    tab_link = $('.donate-money__list-tabs-link'),
    tab = $('.donate-money__tab-item'),
    a = $('.donate-money__link');
  tab_link.on('click', function () {
    let number = $(this).find(a).length;
    console.log(number);
  })
})