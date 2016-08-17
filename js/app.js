
$(document).ready(function(){
  var input = 100
  $("#number-entry").keyup(function () {
    input = document.getElementById("number-entry").value
    console.log(input)
  })
  $("#numberEntry").submit(function (){
    if (isNaN(input)) {
      alert("Must input numbers");
    return false;
    }
  })

  $("#numberEntry").submit(function fizzBuzz(event){
    $("ul").empty();
    event.preventDefault();
      for (var i = 1; i <= input; i++){
        if ( i % 3 === 0 && i % 5 === 0){
          $(".result").append("<li>" + "fizzBuzz" + "</li>");
        }
        else if ( i % 5 === 0){
          $(".result").append("<li>" + "buzz" + "</li>");
        }
        else if ( i % 3 === 0){
          $(".result").append("<li>" + "fizz" + "</li>");
        }
        else {
          $(".result").append("<li>" + i + "</li>");
        }

      };
      document.getElementById("number-entry").value = ""
   
  }); //to run fizzBuzz
  
  $("#numberClear").click(function clearAll(){
    $("ul").empty();
  });

}); //to clear fizzBuzz