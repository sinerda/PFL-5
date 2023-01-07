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
  window.onresize = function () {
    const _487px = window.matchMedia("(max-width: 487px)");
    const title = $('.practice__info-block-title');
    const text = $('.practice__info-block-text');

    if (_487px.matches) {
      // Исправленный текст
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
    type: 'slide',
    rewind: true,
    pagination: false,
    // isNavigation: true,
    arrows: false,
    grid: {
      cols: 2,
      gap: { col: '20px' },
    },
    breakpoints: {
      1039: {
        grid: {
          gap: { col: '10px' }
        }
      },
      720: {
        grid: {
          cols: 1
        }
      },
    }
  }).mount(window.splide.Extensions);

  let thumbnails = new Splide('#thumbnail-carousel', {
    fixedWidth: 180,
    fixedHeight: 220,
    gap: 0,
    rewind: true,
    pagination: false,
    drag: false,
    focus: 'center',
    perMove: 1,
    breakpoints: {
      1039: {
        fixedWidth: 160,
        fixedHeight: 200,
      },
      720: {
        fixedWidth: 150,
        fixedHeight: 190,
      },
      536: {
        fixedWidth: 130,
        fixedHeight: 170,
      },
      487: {
        fixedWidth: 100,
        fixedHeight: 140,
      },
      393: {
        fixedWidth: 80,
        fixedHeight: 120,
      },
    },
  }).mount();

  const _720px = window.matchMedia("(max-width: 720px)");
  if (_720px.matches) {
    main.sync(thumbnails);
  }

  let Not_Moved = false;
  let prevision = 0;
  // КНОПКИ ГАЛЕРЕИ
  // ВПЕРЁД
  $('.splide__arrow--next').on('click', function () {
    if (!_720px.matches) {
      Not_Moved = true;
      let ROD_of_index = thumbnails.index % 2;

      if (ROD_of_index !== 0) {
        main.go('>');
        thumbnails.go('>');
        prevision = main.index + 1;
      }
      else {
        main.go(0);
        thumbnails.go(0);
        prevision = 0;
      }
    }
  })
  // НАЗАД
  $('.splide__arrow--prev').on('click', function () {
    if (!_720px.matches) {
      Not_Moved = true;
      let ROD_of_index = thumbnails.index % 2;

      if (ROD_of_index !== 0) {
        main.go('<');
        thumbnails.go('-1');
        prevision = main.index + 1;
      }
      else {
        if (thumbnails.index == 6) {
          main.go(4);
          thumbnails.go(6);
          prevision = main.index + 1;
        }
        else {
          main.go('<');
          thumbnails.go('<');
          prevision = main.index + 1;
        }
      }
    }
  })

  main.on('moved', function () {
    if (!_720px.matches) {
      out: if (!Not_Moved) {
        let index = main.index + 1;
        let difference = prevision - index;
        if ((index == 1) && (difference == -1)) {
          break out;
        }
        if (difference == 0) {
          break out;
        }
        if (difference < 0) {
          thumbnails.go('+2');
        }
        else {
          thumbnails.go('-2');
        }
        prevision = index;
      }
      else {
        Not_Moved = false;
      }
    }
  });
})