jQuery(function ($) {
  if ($) {

  }})

  $(document).ready(function ($) {
    $('.popup-open').click(function () {
      $('.popup-fade').fadeIn();
      return false;
    });

    $('.popup-close').click(function () {
      $(this).parents('.popup-fade').fadeOut();
      return false;
    });

    $(document).keydown(function (e) {
      if (e.keyCode === 27) {
        e.stopPropagation();
        $('.popup-fade').fadeOut();
      }
    });

    $('.popup-fade').click(function (e) {
      if ($(e.target).closest('.popup').length == 0) {
        $(this).fadeOut();
      }
    });
  });

  if ($(".slider-container").length > 0) {
    $(".slider-container").slick({
      autoplay: 5000,
      dots: true,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  };





