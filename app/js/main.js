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