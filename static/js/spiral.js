window.onload = function() {
  $.ajax({
      url: 'http://127.0.0.1:8000/game/hello/',
      type: 'get',
      success: function(data) {
          $('#ajaxVerify').html(data);
      },
      failure: function(data) {
          alert('Error.');
      }
  });
}
