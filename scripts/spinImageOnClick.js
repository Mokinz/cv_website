$(function() {
    $('body')
      .on("click", 'img', function(){
      $(this).addClass('animate');
    })
      .on("animationend", 'img', function(){
      $(this).removeClass('animate');
    });
	});