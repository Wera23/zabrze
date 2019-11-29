$(document).ready(function() {
  $('a[href^="#"]').on("click", function(event) {
    const target = $($(this).attr("href"));

    if (target.length) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
    }
  });
});

// $(function() {
//   $(window).on("scroll", function() {
//       if($(window).scrollTop() > 100) {
//           $(".menu").style('background-color', 'white');
//       } else {
//           $(".menu").style('background-color', 'red');
//       }
//   });
// });
