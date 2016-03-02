window.onload = function() {
  document.getElementById('testid').innerHTML = "Inline JS Success!";

  $.ajax({
      url: 'http://127.0.0.1:8000/game/hello/',
      type: 'get', // This is the default though, you don't actually need to always mention it
      success: function(data) {
          alert(data);
      },
      failure: function(data) {
          alert('Got an error dude');
      }
  });
}
