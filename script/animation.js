$('document').ready(function() {

  $('#menu').click(function() {
    $('#li').toggle();
  })

  $('#li li').eq(0).click(function() {
    $('.corps1').hide();
    $('.corps2').hide();
    $('.corps').show();
    $('#li li:nth-child(1)').addClass('red');
    $('#li li:nth-child(2)').removeClass('red')
    $('#li li:nth-child(3)').removeClass('red');
  })

  $('#li li').eq(1).click(function() {
    $('.corps2').hide();
    $('.corps').hide();
    $('.corps1').show();
    $('#li li:nth-child(2)').addClass('red');
    $('#li li:nth-child(3)').removeClass('red');
    $('#li li:nth-child(1)').removeClass('red')
  })

  $('#li li').eq(2).click(function() {
    $('.corps').hide();
    $('.corps1').hide();
    $('.corps2').show();
    $('#li li:nth-child(3)').addClass('red');
    $('#li li:nth-child(1)').removeClass('red');
    $('#li li:nth-child(2)').removeClass('red');
  })
})
