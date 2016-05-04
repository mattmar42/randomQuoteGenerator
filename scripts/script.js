$(document).ready(function(){

var quoteArray = ['"From one thing, know ten thousand things" - Miyamoto Musashi', '"Absorb what is useful, reject what is useless, and add what is specifically your own." - Bruce Lee', '"I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times." - Bruce Lee', '"Do nothing that is of no use" - Miyamoto Musashi', '"Get beyond love and grief: exist for the good of Man." - Miyamoto Musashi', '"If size mattered, the elephant would be king of the jungle." - Rickson Gracie', '"You know what the true definition of hell is? Its when you die, you get to meet the person you could have been." - Frank Mir'];
var classes = ['purple', 'blue', 'green', 'red'];  
  
pickQuote = function() {
  var randQuote = quoteArray[Math.round(Math.random() * quoteArray.length)];
if ($('#quoteHead').text() === randQuote){
  var randQuoteTwo = quoteArray[Math.round(Math.random() * quoteArray.length)];
  return randQuoteTwo;
  };
    return randQuote
};
pickClass = function() {
  var randomClass = classes[Math.round(Math.random()*classes.length)];
  if ($('body').hasClass() === randomClass){
    var randomClassTwo = classes[Math.round(Math.random()*classes.length)];
    return randomClassTwo;
  }
  return randomClass;
};
$('#button1').click(function(){
    $('body').removeClass('purple red green blue');
    $('body').addClass(pickClass);
    $('body').addClass(pickClass);
    $('#quoteHead').text(pickQuote);
  });

});