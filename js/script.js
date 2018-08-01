$('body').scrollspy({ target:'#main-nav'});

$('#main-nav a').on('click',function(e){
    if(this.hash !== ''){
      e.preventDefault();
  
      const hash= this.hash;
  
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      },700, function() {
        window.location.hash= hash;
      });
    }
  });

$(document).ready(function() {

  $('#btn-all').click(function(){
    $('.graphic_design').show(500);
    $('.logo_design').show(500);
    $('.web_design').show(500);
  });

  $('#btn-graphic').click(function(){
    $('.graphic_design').show(500);
    $('.logo_design').hide();
    $('.web_design').hide();
  });

  $('#btn-logo').click(function(){
    $('.graphic_design').hide();
    $('.logo_design').show(500);
    $('.web_design').hide();
  });

  $('#btn-web').click(function(){
    $('.graphic_design').hide();
    $('.logo_design').hide();
    $('.web_design').show(500);
  });
 
  $("#owl-testimonial").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      items: 1
  });
 
});