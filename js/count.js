var countDownDate = new Date("feb 28, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));   
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var months = Math.floor(days/30);

  //Display days
  var ddays= days-(months*30);
 
  // Display the result in the element 
$(document).ready(function()
{
    $("#clock-c").html( "<h2 id=\"days-span\">" + months + " months and " + ddays + " days </h2>");
}
)
 

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days-span").innerHTML = "EXPIRED";
  }
}, 1000);