
var globalColor = 'blue';

$(window).load(function(){
  $('.segment').hover(
      function () {
          var id = $(this).attr('id');
          $('#'+id+'arrayLocation').show();
      },
      function () {
          var id = $(this).attr('id');
          $('#'+id+'arrayLocation').hide();
      }
  );
  $('.segment').click(
      function () {
          var bgcolor = $(this).css('background-color')
          if (bgcolor !== 'rgb(0, 0, 255)' && bgcolor !== 'rgb(0, 128, 0)') { // temporary
            $(this).css('background-color',globalColor);
            globalColor = globalColor === 'blue' ? 'green' : 'blue';
          }
      }
  );
});
