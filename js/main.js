$(function () {
  // toggle between form of captcha page 
  $('#importManually').click(function () {
    $('.automated').addClass('d-none')
    $('.manually').removeClass('d-none')
  })
  $('#import').click(function () {
    $('.automated').removeClass('d-none')
    $('.manually').addClass('d-none')
  })


  // show password 
  $(document).on('click', '.eye', function () {
    if ($(this).hasClass('fa-eye-slash')) {
      $(this).removeClass('fa-eye-slash').addClass('fa-eye');
      $('.pass-input').attr('type', 'text')
    } else {
      $(this).removeClass('fa-eye').addClass('fa-eye-slash');
      $('.pass-input').attr('type', 'password')
    }
  })



  $(document).on('click', '.swap-cap label', function () {
    console.log('fff');
    $(this).find('.gr-border').css('width', '100%');
    $(this).parent().siblings().find('.gr-border').css('width', '0');
  })
  $(document).on('click', '.new-acc', function () {
    $('#import').click()
  });


  $(document).on('click', '.courses-controls button', function () {
    var myClass = $(this).attr('id');
    $("." + myClass).removeClass('d-none').siblings().addClass('d-none')
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      800: {
        items: 3
      },
      1000: {
        items: 4
      },
      
    }
  })
});