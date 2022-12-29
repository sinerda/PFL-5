$(function () {
  $('.practice__info-btn').on('mouseover', function () {
    $(this).toggleClass('active');
  })
  $('.practice__info-btn').on('mouseout', function () {
    $(this).toggleClass('active');
  })

  $('.partners__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    rows: 0,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          variableWidth: false,
        }
      },
      {
        breakpoint: 487,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
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

  $(".donate-money__tabs").tabs();

  // 
  // Splide JS - галерея
  let main = new Splide('#main-carousel', {
    type: 'fade',
    rewind: true,
    pagination: false,
    arrows: false,
    perPage: 1,
    grid: {
      cols: 2,
      gap: { col: '20px' },
    },
  }).mount(window.splide.Extensions);

  let thumbnails = new Splide('#thumbnail-carousel', {
    fixedWidth: 180,
    fixedHeight: 220,
    gap: 0,
    rewind: true,
    pagination: false,
    isNavigation: true,
    perPage: 2,
    focus: 'center',
    breakpoints: {
      600: {
        fixedWidth: 60,
        fixedHeight: 44,
      },
    },
  }).mount();

  main.sync(thumbnails);
})