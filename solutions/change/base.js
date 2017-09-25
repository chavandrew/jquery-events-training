console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  $(function(){
  $('h1').text('GO!');
  });
  $("input.add").on("change", function handleChange(event){
    var left = $("input#left").val();
    var right = $("input#right").val();
    var leftVal = parseInt(left) || 0;
    var rightVal = parseInt(right) || 0;
    var total = leftVal + rightVal;
    $("#total").val(total);
    $(function(){
      $('h1').text('GO!');
    });
  })

})
