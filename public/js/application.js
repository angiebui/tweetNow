$(document).ready(function() {
  $('form.tweettext').on('submit', function(e){
    e.preventDefault();
    $(this).attr('disabled', 'disabled');
    var data = $(this).serialize();
    console.log(data);
    $.post('/', data)
    .done(function(){
      $('form.tweettext').removeAttr('disabled');
      alert("Tweet sent!");
    });  
  });
});

