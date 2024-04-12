document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      var popup = document.getElementById("popup1");
      popup.style.display = "block";
    },3000); // Delay in milliseconds (3 seconds in this example)
  });
  
  function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = "none";
  
    if (popupId === "popup1") {
      var popup2 = document.getElementById("popup2");
      popup2.style.display = "block";
    }
  }
  
  function moveAway(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = "none";
  }
  
  function moveBack(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = "block";
  }
  