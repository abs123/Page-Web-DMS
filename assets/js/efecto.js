
$(document).ready(function(){

    $('.menu  a').each(function(index,elemento){
        $(this).css({
         'top':'-200px'});
         
        $(this).animate({
          top:'0'
        },2000 +(index * 200));
 
     });
     



//Scroll Elementos Menu

var nostros=$('#row-nosotros').offset().top,
    servicio=$('#row-servicios').offset().top;
// galeria=$('#galeria').offset().top,
// ubicacion = $('#ubicacion').offset().top;




$('#btn-nostros').on('click',function(e){
  e.preventDefault();
  $('html,body').animate({
      scrollTop:nostros-100
  },600);

});


$('#btn-servicio').on('click',function(e){
  e.preventDefault();
  $('html,body').animate({
      scrollTop:servicio +400
  },600);

});



});
