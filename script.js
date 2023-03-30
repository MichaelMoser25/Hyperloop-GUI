window.onload = function() {
    const dashboard = document.getElementById("dashboard");
    dashboard.addEventListener('click', function() {
      document.getElementById("menuSidebar").hidden = true
      document.getElementById("menuMiddle").hidden = true
      document.getElementById("dashboardMiddle").style.display = "flex"
      document.getElementById("dashboardSidebar").style.display = "flex"
    });

    const alerts = document.getElementById("podSystem");
    alerts.addEventListener('click', function() {
      document.getElementById("menuSidebar").hidden = true
      document.getElementById("menuMiddle").hidden = true
      document.getElementById("podsystemMiddle").style.display = "flex"
      document.getElementById("podsystemSidebar").style.display = "flex"
    });

    const inputs = document.getElementById("alerts");
    inputs.addEventListener('click', function() {
      document.getElementById("menuSidebar").hidden = true
      document.getElementById("menuMiddle").hidden = true
      document.getElementById("alertsMiddle").style.display = "flex"
      document.getElementById("alertsSidebar").style.display = "flex"
    });

    const podSystem = document.getElementById("inputs");
    podSystem.addEventListener('click', function() {
      document.getElementById("menuSidebar").hidden = true
      document.getElementById("menuMiddle").hidden = true
      document.getElementById("inputsMiddle").style.display = "flex"
    });

    var speedometer = document.getElementById("speedometer");
    var speedometerValue = document.getElementById("speedometer-value");
    var speed = 0;
    var maxSpeed = 180;

function updateSpeedometer() {
	var angle = speed / maxSpeed * 180;
	document.querySelector(".speedometer-needle").style.transform = "translateX(-50%) rotate(" + angle + "deg)";
	speedometerValue.innerHTML = speed + " km/h";
}

setInterval(function() {
	speed += Math.floor(Math.random() * 10) + 1;
	if (speed > maxSpeed) {
		speed = 0;
	}
	updateSpeedometer();
}, 1000);

if(localStorage.getItem("Location Right")!= undefined) {
  document.getElementById("locationRight").innerHTML = localStorage.getItem("Location Right"); 
}
if(localStorage.getItem("Month Right")!= undefined) {
  document.getElementById("monthRight").innerHTML = localStorage.getItem("Month Right"); 
}
if(localStorage.getItem("Day Right")!= undefined) {
  document.getElementById("dayRight").innerHTML = localStorage.getItem("Day Right"); 
}
if(localStorage.getItem("Event Right")!= undefined) {
  document.getElementById("eventRight").innerHTML = localStorage.getItem("Event Right"); 
}
if(localStorage.getItem("Location Left")!= undefined) {
  document.getElementById("locationLeft").innerHTML = localStorage.getItem("Location Left"); 
}
if(localStorage.getItem("Month Left")!= undefined) {
  document.getElementById("monthLeft").innerHTML = localStorage.getItem("Month Left"); 
}
if(localStorage.getItem("Day Left")!= undefined) {
  document.getElementById("dayLeft").innerHTML = localStorage.getItem("Day Left"); 
}
if(localStorage.getItem("Event Left")!= undefined) {
  document.getElementById("eventLeft").innerHTML = localStorage.getItem("Event Left"); 
}

  } //Bottom of window onload function 

function locallyStore()  { 
  var retrieveMotorTemp = document.getElementById("motor-temperature").value; 
  if(retrieveMotorTemp != undefined && retrieveMotorTemp != '') var motorTemperature = localStorage.setItem("Motor Temperature", retrieveMotorTemp);

  var retrieveLocationRight = document.getElementById("location-right").value; 
  if(retrieveLocationRight != undefined && retrieveLocationRight != '')  {
  var locationRight = localStorage.setItem("Location Right", retrieveLocationRight);
  document.getElementById("locationRight").innerHTML = localStorage.getItem("Location Right"); }

  var retrieveMonthRight = document.getElementById("month-right").value; 
  if(retrieveMonthRight != undefined && retrieveMonthRight != '') {
  var monthRight = localStorage.setItem("Month Right", retrieveMonthRight);
  document.getElementById("monthRight").innerHTML = localStorage.getItem("Month Right"); }

  var retrieveDayRight = document.getElementById("day-right").value; 
  if(retrieveDayRight != undefined && retrieveDayRight != '') { 
  var dayRight = localStorage.setItem("Day Right", retrieveDayRight);
  document.getElementById("dayRight").innerHTML = localStorage.getItem("Day Right"); }
  
  var retrieveEventRight = document.getElementById("event-right").value; 
  if(retrieveEventRight != undefined && retrieveEventRight != '') { 
  var eventRight = localStorage.setItem("Event Right", retrieveEventRight);
  document.getElementById("eventRight").innerHTML = localStorage.getItem("Event Right"); }

  var retrieveLocationLeft = document.getElementById("location-left").value; 
  if(retrieveLocationLeft != undefined && retrieveLocationLeft != '') {
  var locationLeft = localStorage.setItem("Location Left", retrieveLocationLeft);
  document.getElementById("locationLeft").innerHTML = localStorage.getItem("Location Left"); }

  var retrieveMonthLeft = document.getElementById("month-left").value; 
  if(retrieveMonthLeft != undefined && retrieveMonthLeft != '') { 
  var monthLeft = localStorage.setItem("Month Left", retrieveMonthLeft);
  document.getElementById("monthLeft").innerHTML = localStorage.getItem("Month Left"); }

  var retrieveDayLeft = document.getElementById("day-left").value; 
  if(retrieveDayLeft != undefined && retrieveDayLeft != '') { 
  var dayLeft = localStorage.setItem("Day Left", retrieveDayLeft);
  document.getElementById("dayLeft").innerHTML = localStorage.getItem("Day Left"); } 
  
  var retrieveEventLeft = document.getElementById("event-left").value; 
  if(retrieveEventLeft != undefined && retrieveEventLeft != '') {  
  var eventLeft = localStorage.setItem("Event Left", retrieveEventLeft);
  document.getElementById("eventLeft").innerHTML = localStorage.getItem("Event Left"); }
  
  document.getElementById("menuSidebar").hidden = false; 
  document.getElementById("menuMiddle").hidden = false; 
  document.getElementById("inputsMiddle").style.display = "none"; 
}



