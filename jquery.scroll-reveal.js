;(function($) {
    $.fn.scrollReveal = function() {
      const windowHeight = $(window).height()
  
      const windowWidth = $(window).width()
  
      const initialScroll = $(window).scrollTop()
  
      const items = $('.js-reveal')
  
      let scroll
  
      items.each(function() {
        if ($(this).offset().top >= windowHeight) {
          $(this).addClass('js-reveal--hidden')
        }
      })
  
      $(window).scroll(function(event) {
        scroll = $(window).scrollTop()
        items.each(function() {
          if ($(this).offset().top <= scroll + windowHeight) {
            $(this).removeClass('js-reveal--hidden')
          }
        })
      })
  
      return this
    }
  })(jQuery)