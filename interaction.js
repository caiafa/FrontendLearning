//console.log($('#submit-form').length) // if is == 0, not found form
$(document).ready(function() {

  $('#submit-form').submit(function() {
    var data = $("#submit-form :input").serializeArray();
    //var textHeader = "text: "
    //console.log(textHeader.concat($('input[name="indoor-outdoor"]:checked').val()));
    //console.log(data);

		$("#personality").empty()

    $.each(data, function(index, value) {
      console.log(value);
      $('<p>' + value.value + '</p>').appendTo("#personality");
    });

    return false; // <- cancel event
  });

});
// action="https://khaiphas.npkn.net/basic-response"
