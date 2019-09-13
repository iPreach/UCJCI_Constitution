//Increase Font Size
$(function() {
  $("#upSize").click(function() {
    $(".container").children().each(function() {
      var size = parseInt($(this).css("font-size"));
      size = size + 1 + "px";
      $(this).css({
        'font-size': size
      });
    });
  });
});

//Decrease Font Size
$(function() {
  $("#downSize").click(function() {
    $(".container").children().each(function() {
      var size = parseInt($(this).css("font-size"));
      size = size + -1 + "px";
      $(this).css({
        'font-size': size
      });
    });
  });
});