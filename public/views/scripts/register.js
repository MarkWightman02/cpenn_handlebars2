$(document).ready(function() {
  $("#register-button").click(function() {
    var confirmClick = window.confirm("Did you mean to click the register button?");
    var accountsMade = [];
    if (confirmClick == true) {
      var user = new Object();
      var name = window.prompt("Please enter your name:");
      var age = window.prompt("Please enter your age:");
      user.name = name;
      user.age = age;
      
      $("#user-list").append("<li style='display:none'>" + user.name + " (" + user.age + ")</li>");
      $("#user-list li:last-child").slideDown();
    }
    
    for (var i = 0; i <= (accountsMade.length - 1); i++) {
      if (i == 0) {
        console.log("BEGIN USER PRINTOUT");
      }
      console.log(accountsMade[i]);
    }
  });
});
