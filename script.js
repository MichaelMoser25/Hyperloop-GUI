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
  };
  
var speedometer = document.getElementById("speedometer");
var speedometerValue = document.getElementById("speedometer-value");
var speed = 0;
var maxSpeed = 180;

function updateSpeedometer() {
	var angle = speed / maxSpeed * 180;
	document.querySelector(".speedometer-needle").style.transform = "translateX(-50%) rotate(" + angle + "deg)";
	// speedometerValue.innerHTML = speed + " km/h";
  // console.log(speedometerValue); 
}

setInterval(function() {
	speed += Math.floor(Math.random() * 10) + 1;
	if (speed > maxSpeed) {
		speed = 0;
	}
	updateSpeedometer();
}, 1000);

function locallyStore()  {
  console.log("hello");  
  var retrieveMotorTemp = document.getElementById("motor-temperature").value; 
  console.log("hello");  
  var motorTemperature = localStorage.setItem("Motor Temperature", retrieveMotorTemp);
  console.log("hello");   
}


