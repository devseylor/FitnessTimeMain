$(function(){
/* menu button */
    $('.menu_btn').click(function(){
        $('.menu_ul').toggleClass('active');
    });
/* menu button end */
/* card animation */
    $('.card').on('click', function(){
        $(this).toggleClass('active');
    });
/* card animation end */
/* slider */
    $('#elastislide').elastislide();
    function slider(){
        var btn_left = document.querySelector('.left');
        var btn_right = document.querySelector('.right');
        var item_slide = document.querySelectorAll('.item_slide');
        var i = 0;

        btn_left.onclick = function(){
            item_slide[i].classList.remove('active');
            i--;
            if(i < 0){i = item_slide.length - 1}
            item_slide[i].classList.add('active');
        }
        btn_right.onclick = function(){
            item_slide[i].classList.remove('active');
            i++;
            if(i >= item_slide.length){i = 0}
            item_slide[i].classList.add('active');
        }
    }
    slider();
/* slider end */

/* menu anchor */
var link = $(".menu_ul ul a");
link.on('click', function(e){
    e.preventDefault();
    link.removeClass('active');
    var selector = $(this).addClass('active').attr('href');
    var target = $(selector);
    $('html, body').animate({
        scrollTop: target.offset().top - 100
    }, 500);   
  })
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    link.each(function(){
      var selector = $(this).attr('href');
      var target = $(selector);
      if(scroll >= target.offset().top - 200){
        link.removeClass('active');
        $(this).addClass('active');
      }
    })
  })
  $('.red').click(function(){
      $('html, body').animate({
          scrollTop:0
      },1000);
  })
  /* menu anchor end */
})