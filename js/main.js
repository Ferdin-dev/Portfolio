$(document).ready(function () {

  // Typed
  const type = new Typed("#typed", {
    strings: [
      "Junior Front-End Developer",
      "Junior Web Designer"
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  });

  // ISotope start

  // $('.portfolio-grid').isotope({
  //   itemSelector: '.single-item',
  //   layoutMode: 'fitRows'
  // });

  // $('.filter-group ul li').click(function () {
  //   $('.filter-group ul li').removeClass('active');
  //   $(this).addClass('active');


  //   var selector = $(this).attr('data-filter');
  //   $('.portfolio-grid').isotope({
  //     filter: selector
  //   });

  //   return false;
  // });

  // Isotope End

  // Hamburger Menu
  $(".close-btn").on('click', function () {
    $(".nav ul").toggleClass('toggleNav')
  })

  
})
    $('.filter-group li').on('click', function () {
    $('.filter-group li').removeClass('active');
    $(this).addClass('active');
  });
  if ($('.portfolio-grid').length > 0) {
    var containerEl = document.querySelector('.portfolio-grid');
    var mixer = mixitup(containerEl);
  }