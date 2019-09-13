$(document).ready(function(){
  var resize = new Array('.container');
  resize = resize.join(',');
  
  //resets the font size when "A" is clicked
  var resetFont = $(resize).css('font-size');
    $(".reset").click(function(){
      $(resize).css('font-size', resetFont);
    });
  
  //increases font size when "A+" is clicked
  $(".increase").click(function(){
    var originalFontSize = $(resize).css('font-size');
    var originalFontNumber = parseFloat(originalFontSize, 10);
    var newFontSize = originalFontNumber*1.2;
    $(resize).css('font-size', newFontSize);
    return false;
  });
  
  //decrease font size when "A-" is clicked
  
  $(".decrease").click(function(){
    var originalFontSize = $(resize).css('font-size');
    var originalFontNumber = parseFloat(originalFontSize, 10);
    var newFontSize = originalFontNumber*0.8;
    $(resize).css('font-size', newFontSize);
    return false;
  });
  
});