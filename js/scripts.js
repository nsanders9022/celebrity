$(document).ready(function(){
  $("#questionnaire").submit(function(event){
    $(".person").hide();
    var gender = $("input:radio[name=gender]:checked").val();
    var age = $("#age").val();
    var personality = $("input:radio[name=personality]:checked").val();


    if (age === "0-15 years old") {
      alert("You're too young to be dating!")
    } else {
      if (gender === "female") {
        if (age === "16-25 years old" && personality === "mysterious") {
          $(".cara").show();
        } else if (age === "16-25 years old" && personality === "fun") {
          $(".selena").show();
        } else if (age === "26-45 years old" && personality === "mysterious") {
          $(".eva").show();
        } else if (age === "26-45 years old" && personality === "fun") {
          $(".jennifer").show();
        } else if (age === "45+" && personality === "fun") {
          $(".meryl").show();
        } else if (age === "45+" && personality === "mysterious") {
          $(".queen").show();
        }
      } else if (gender === "male") {
        if (age === "16-25 years old" && personality === "mysterious") {
          $(".nick").show();
        } else if (age === "16-25 years old" && personality === "fun") {
          $(".thomas").show();
        } else if (age === "26-45 years old" && personality === "mysterious") {
          $(".chris").show();
        } else if (age === "26-45 years old" && personality === "fun") {
          $(".neil").show();
        } else if (age === "45+" && personality === "fun") {
          $(".tom").show();
        } else if (age === "45+" && personality === "mysterious") {
          $(".george").show();
        }
      }
    }
    event.preventDefault();
  });
});
