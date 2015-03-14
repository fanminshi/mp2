var divs = document.getElementsByClassName('alert');
for(var i=0; i<divs.length; i++) {
  divs[i].addEventListener("click", highlightThis);
  /*
  divs[i].addEventListener("click", highlightThis, true);
  divs[i].addEventListener("click", highlightThis, false);*/
}

function highlightThis(event) {
    //event.stopPropagation();
  
    var backgroundColor = this.style.backgroundColor;
    this.style.backgroundColor='yellow';
    alert(this.className);
    this.style.backgroundColor=backgroundColor;
}


$(function(){


  var active_menu = 0;
  var target_offset1 = $('#about').offset();

  var target_offset2 = $('#experience').offset();

  var target_offset3 = $('#projects').offset();

  var target_offset4 = $('#activities').offset();


  $(window).scroll(function(e){
      var pos= $(window).scrollTop();
      console.log(pos);
      var index = 0;
      if(pos >= target_offset4.top -5){

        index = 3;
      }else if(pos >= target_offset3.top -5){

        index = 2;
      }else if (pos >= target_offset2.top -5) {

        index = 1;
      }else if (pos >= target_offset1.top -5) {

        index = 0;
      }   
      
      if(index!=active_menu) {

        $(".active").attr("class","menu_item");

        $($(".menu_item")[index]).attr("class","active");
        active_menu = index;
      }
  });

  $('#link-about').on('click', function(event) {

    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });

  $('#link-exp').on('click', function(event) {

    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });

  $('#link-proj').on('click', function(event) {

    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });

  $('#link-act').on('click', function(event) {

    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });



 $(document).foundation();

  $('.mycarr').slick({
    infinite: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false
  });




});