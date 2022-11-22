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
    // infinite: true,
    speed: 500,
    // autoplay: true,
    autoplaySpeed: 4500,
    variableWidth: true,
    rows: 0,
    centerMode: true,
  });
})