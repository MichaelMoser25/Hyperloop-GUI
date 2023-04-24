//function will run upon the completion of the websites loading, allowing all elements to be fully initialized before code acts on them 
window.onload = function() {

    //variables declared
    let podStatus = "off"; //represents the stat of the pod 
    let wheelRadius = 0.3; //meters (used in rpm calculation)
    let speedCounter = 0;  
    let travelledPercentage = 0; //represents the distance the pod has travelled along the bar 
    let brakingAcceleration = 0; //
    let tripLength = 0 
    let batteryLevel = 100; //maximum battery percentage 
    //end of variable declaration

    //start of page functionality, by hiding elements the single html file can appear to represent multiple pages 
    const homeButton = document.getElementById("homeLogo"); //home logo (acts as a button to return to the home page)
    homeButton.addEventListener('click', function() {
      document.getElementById("alertsMiddle").style.display = "none"
      document.getElementById("inputsMiddle").style.display = "none"
      document.getElementById("podsystemMiddle").style.display = "none"
      document.getElementById("podsystemSidebar").style.display = "none"
      document.getElementById("menuSidebar").style.display = "flex"
      document.getElementById("menu-middle").style.display = "flex"
      document.getElementById("dashboardMiddle").style.display = "none"
    });

    const returnHome = document.getElementById("returnHome"); //return home shortcut
    returnHome.addEventListener('click', function() {
      document.getElementById("alertsMiddle").style.display = "none"
      document.getElementById("inputsMiddle").style.display = "none"
      document.getElementById("podsystemMiddle").style.display = "none"
      document.getElementById("podsystemSidebar").style.display = "none"
      document.getElementById("menuSidebar").style.display = "flex"
      document.getElementById("menu-middle").style.display = "flex"
      document.getElementById("dashboardMiddle").style.display = "none"
    });

    const tripProgress = document.getElementById("tripProgress"); //trip progress shortcut
    tripProgress.addEventListener('click', function() {
      document.getElementById("alertsMiddle").style.display = "none"
      document.getElementById("inputsMiddle").style.display = "none"
      document.getElementById("podsystemMiddle").style.display = "none"
      document.getElementById("podsystemSidebar").style.display = "none"
      document.getElementById("menuSidebar").style.display = "none"
      document.getElementById("menu-middle").style.display = "none"
      document.getElementById("dashboardMiddle").style.display = "flex"
    });

    const dashboard = document.getElementById("dashboard"); //dashboard main page button
    dashboard.addEventListener('click', function() {
      document.getElementById("menuSidebar").style.display = "none"
      document.getElementById("menu-middle").style.display = "none"
      document.getElementById("dashboardMiddle").style.display = "flex"
    });

    const alerts = document.getElementById("podSystem"); //pod systems page button
    alerts.addEventListener('click', function() {
      document.getElementById("menuSidebar").style.display = "none"
      document.getElementById("menu-middle").style.display = "none"
      document.getElementById("podsystemMiddle").style.display = "flex"
      document.getElementById("podsystemSidebar").style.display = "flex"
    });

    const podStats = document.getElementById("podStatus"); //pod status shortcut button
    podStats.addEventListener('click', function() {
      document.getElementById("alertsMiddle").style.display = "none"
      document.getElementById("inputsMiddle").style.display = "none"
      document.getElementById("podsystemMiddle").style.display = "flex"
      document.getElementById("podsystemSidebar").style.display = "flex"
      document.getElementById("menuSidebar").style.display = "none"
      document.getElementById("menu-middle").style.display = "none"
      document.getElementById("dashboardMiddle").style.display = "none"
    });

    const inputs = document.getElementById("alerts"); //alerts page main button 
    inputs.addEventListener('click', function() {
      document.getElementById("menuSidebar").style.display = "none"
      document.getElementById("menu-middle").style.display = "none"
      document.getElementById("alertsMiddle").style.display = "flex"
    });

    const errors = document.getElementById("errors"); //notifications shortcut button 
    errors.addEventListener('click', function() {
      document.getElementById("alertsMiddle").style.display = "flex"
      document.getElementById("inputsMiddle").style.display = "none"
      document.getElementById("podsystemMiddle").style.display = "none"
      document.getElementById("podsystemSidebar").style.display = "none"
      document.getElementById("menuSidebar").style.display = "none"
      document.getElementById("menu-middle").style.display = "none"
      document.getElementById("dashboardMiddle").style.display = "none"
    });

    const podSystem = document.getElementById("inputs"); //inputs page main button 
    podSystem.addEventListener('click', function() {
      document.getElementById("menuSidebar").style.display = "none"
      document.getElementById("menu-middle").style.display = "none"
      document.getElementById("inputsMiddle").style.display = "flex"
    });

    const userInputs = document.getElementById("userInputs"); //shortcuts user inputs button 
    userInputs.addEventListener('click', function() {
      document.getElementById("alertsMiddle").style.display = "none"
      document.getElementById("inputsMiddle").style.display = "flex"
      document.getElementById("podsystemMiddle").style.display = "none"
      document.getElementById("podsystemSidebar").style.display = "none"
      document.getElementById("menuSidebar").style.display = "none"
      document.getElementById("menu-middle").style.display = "none"
      document.getElementById("dashboardMiddle").style.display = "none"
    });

    const closeButtons = document.querySelectorAll(".closebtn"); //uses a loop to select all alerts and allow them to be closed with the "x" close button
    closeButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const alertBox = this.parentElement;
        alertBox.style.display = "none";
      });
    });

    const saveChanges = document.getElementById("saveChanges"); //save changes button on the inputs page, triggers functions to initialize graphs 
    saveChanges.addEventListener('click', function() {
      startupTemp(); 
      startupVoltage(); 
      startupAcceleration(); 
      startupRPM(); 
    });
    //end of page functionality

//local storage conditionals, currently each individual item is pulled from local storage into the page design, it is done here to ensure it shows upon the page loading 
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
if(localStorage.getItem("Friction Brakes Temperature")!= undefined) {
  document.getElementById("frictionBrakes").innerHTML = localStorage.getItem("Friction Brakes Temperature"); 
}
if(localStorage.getItem("Electric Brakes Temperature")!= undefined) {
  document.getElementById("electricBrakes").innerHTML = localStorage.getItem("Electric Brakes Temperature"); 
}
if(localStorage.getItem("Main Battery Temperature")!= undefined) {
  document.getElementById("mainBattery").innerHTML = localStorage.getItem("Main Battery Temperature"); 
}
if(localStorage.getItem("Liquid Cooling Temperature")!= undefined) {
  document.getElementById("liquidCooling").innerHTML = localStorage.getItem("Liquid Cooling Temperature"); 
}
if(localStorage.getItem("24V Battery Temperature")!= undefined) {
  document.getElementById("24VBattery").innerHTML = localStorage.getItem("24V Battery Temperature"); 
}
if(localStorage.getItem("Main Battery Voltage")!= undefined) {
  document.getElementById("mainBatteryVoltage").innerHTML = localStorage.getItem("Main Battery Voltage"); 
}
if(localStorage.getItem("24V Battery Voltage")!= undefined) {
  document.getElementById("24VBatteryVoltage").innerHTML = localStorage.getItem("24V Battery Voltage"); 
}
if(localStorage.getItem("5V Converter Voltage")!= undefined) {
  document.getElementById("5VConverterVoltage").innerHTML = localStorage.getItem("5V Converter Voltage"); 
}
if(localStorage.getItem("12V Converter Voltage")!= undefined) {
  document.getElementById("12VConverterVoltage").innerHTML = localStorage.getItem("12V Converter Voltage"); 
}
if(localStorage.getItem("Air Tank Pressure")!= undefined) {
  document.getElementById("airTankPressure").innerHTML = localStorage.getItem("Air Tank Pressure"); 
}
if(localStorage.getItem("Vessel Pressure")!= undefined) {
  document.getElementById("vesselPressure").innerHTML = localStorage.getItem("Vessel Pressure"); 
}
if(localStorage.getItem("Motor Temperature")!= undefined) {
  document.getElementById("motor").innerHTML = localStorage.getItem("Motor Temperature"); 
}
if(localStorage.getItem("RPM")!= undefined) {
  document.getElementById("rpm").innerHTML = localStorage.getItem("RPM"); 
}
if(localStorage.getItem("Acceleration Time")!= undefined && +localStorage.getItem("Acceleration Time") != 0) {
  document.getElementById("accelerationTime").innerHTML = "(" + Math.ceil(localStorage.getItem("Acceleration Time")) + "s)"; 
}
if(localStorage.getItem("Acceleration")!= undefined) {
  document.getElementById("acceleration").innerHTML = localStorage.getItem("Acceleration"); 
}
if(localStorage.getItem("Trip Distance")!= undefined) {
  document.getElementById("tripDistance").innerHTML = localStorage.getItem("Trip Distance"); 
}
//end of local storage conditionals

//start of pod image distance calculation, this function calculates the distance remaining and finds that information as a percentage which is 
//stored to be used later in the CSS to ensure the pod is moving correctly on the bottom of the dashboard
function updatePodDistance () { 
let targetDistance = document.getElementById("tripDistance").innerHTML; 
let travelledDistance = document.getElementById('travelledDistance').innerHTML;
let podImageDistance = document.getElementById('pod-distance');
travelledPercentage = ((+travelledDistance)/(+targetDistance))*100
podImageDistance.style.setProperty('--pod-width',travelledPercentage + '%');
} 
//end of pod image distance calculation 

//start of graph acceleration
let accelerationCanvas = document.getElementById("accelerationGraph"); //graph is linked to html 
let dataPointsAcceleration = [];
let accelerationData = { //data is described
    labels: [],
    datasets: [{
        label: "Acceleration",
        data: dataPointsAcceleration,
        borderColor: "grey",
        pointRadius: 3
    }]
};

let chartOptionsAcceleration = { //chart options are selected
    maintainAspectRatio: false,
    responsive: false, 
    scales: {
      x: {
          ticks: {
              display: false
          }
      },
      y: {
        ticks: {
            display: false
        }
    }
  }
};

let accelerationChart = new Chart(accelerationCanvas, { //graph is defined
    type: 'line',
    data: accelerationData,
    options: chartOptionsAcceleration,
});

let currentAcceleration = +(localStorage.getItem("Acceleration")); 
if (currentAcceleration === "" || currentAcceleration === undefined) currentAcceleration = 3.7;  
let currentTime = new Date().toLocaleTimeString();

function startupAcceleration() { //function is created to enable a default current acceleration 
currentAcceleration = +(localStorage.getItem("Acceleration"));
if (currentAcceleration === "" || currentAcceleration === undefined) currentAcceleration = 3.7;  
let currentTime = new Date().toLocaleTimeString();
dataPointsAcceleration.push(currentAcceleration);
accelerationData.labels.push(currentTime);
accelerationChart.update();
}

function addDataAcceleration() { //function that goes through and draws the graph based on prevous definitions
    let updateFromLocalAcceleration = localStorage.getItem("Acceleration"); 
    if(updateFromLocalAcceleration != 0) { //math here is done to replicate a semi-realistc acceleration (not constant)
    currentAcceleration += Math.random() * (2*(+updateFromLocalAcceleration/100)) - (+updateFromLocalAcceleration/100);
    if(currentAcceleration > +updateFromLocalAcceleration/2) currentAcceleration - 2*(+updateFromLocalAcceleration/100); 
    if(currentAcceleration < +updateFromLocalAcceleration/-2) currentAcceleration + 2*(+updateFromLocalAcceleration/100); 
    } else {
      currentAcceleration = 0;  
    }
    currentTime = new Date().toLocaleTimeString();

    if (dataPointsAcceleration.length >= 10) { //causes the graph to shift and only include 10 points
        dataPointsAcceleration.shift();
        accelerationData.labels.shift();
    }

    localStorage.setItem("Acceleration", (currentAcceleration).toFixed(2));
    document.getElementById("acceleration").innerHTML = localStorage.getItem("Acceleration"); 
    dataPointsAcceleration.push(currentAcceleration);
    accelerationData.labels.push(currentTime);
    accelerationChart.update();
}
//end of graph acceleration

//start of graph rpm
let rpmCanvas = document.getElementById("rpmGraph"); //graph is linked to html 
let dataPointsRPM = [];
let rpmData = { //graphs data is described 
    labels: [],
    datasets: [{
        label: "RPM",
        data: dataPointsRPM,
        borderColor: "grey",
        pointRadius: 3
    }]
};

let chartOptionsRPM = { //chart selections are made 
    maintainAspectRatio: false,
    responsive: false, 
    scales: {
      x: {
          ticks: {
              display: false
          }
      },
      y: {
        ticks: {
            display: false
        }
    }
  }
};

let rpmChart = new Chart(rpmCanvas, { //graph type is declared
    type: 'line',
    data: rpmData,
    options: chartOptionsRPM,
});

let currentRPM = +(localStorage.getItem("RPM"));
if (currentRPM === "" || currentRPM === undefined) currentRPM = 0;  
currentTime = new Date().toLocaleTimeString();

function startupRPM() {  //general case 
currentRPM = +(localStorage.getItem("RPM"));
if (currentRPM === "" || currentRPM === undefined) currentRPM = 0;  
let currentTime = new Date().toLocaleTimeString();
dataPointsRPM.push(currentRPM);
rpmData.labels.push(currentTime);
rpmChart.update();
}

function addDataRPM() { //populating the graphs based one the defined characteristics 
    let updateFromSpeed = +document.getElementById("speed").innerHTML;   
    currentRPM = ((updateFromSpeed / 3.6) * 60)/(2 * Math.PI * wheelRadius);  
    currentTime = new Date().toLocaleTimeString();

    if (dataPointsRPM.length >= 10) {
        dataPointsRPM.shift();
        rpmData.labels.shift();
    }

    localStorage.setItem("RPM", (currentRPM).toFixed(1));
    document.getElementById("rpm").innerHTML = localStorage.getItem("RPM"); 
    dataPointsRPM.push(currentRPM);
    rpmData.labels.push(currentTime);
    rpmChart.update();
}
//end of graph rpm

//start of graph creation temperature
let tempCanvas = document.getElementById("tempGraph"); //graph is linked to html canvas tag with id "tempgraph"
let dataPointsTemp = [];
let tempData = { //data is described 
    labels: [], 
    datasets: [{
        label: "Temperature",
        data: dataPointsTemp,
        borderColor: "rgba(238,188,49,255)",
        pointRadius: 3
    }]
};

let chartOptionsTemp = { //chart options are selected 
    maintainAspectRatio: false,
};

let tempChart = new Chart(tempCanvas, { //chart charadcteristics are defined 
    type: 'line',
    data: tempData,
    options: chartOptionsTemp
});

let currentTemp = +(localStorage.getItem("Motor Temperature")); 
if (currentTemp === "" || currentTemp === undefined || currentTemp === 0.0) currentTemp = 45;  
currentTime = new Date().toLocaleTimeString();

function startupTemp() { //default case
currentTemp = +(localStorage.getItem("Motor Temperature")); 
if (currentTemp === "" || currentTemp === undefined || currentTemp === 0.0) currentTemp = 45;  
let currentTime = new Date().toLocaleTimeString();
dataPointsTemp.push(currentTemp);
tempData.labels.push(currentTime);
tempChart.update();
}

function addDataTemp() { //function that prints the graph to the screen 
    let updateFromLocalTemp = localStorage.getItem("Motor Temperature"); 
    
    //math calculations generate random values within a set range that cannot be left 
    currentTemp += Math.random() * (2*(+updateFromLocalTemp/100)) - (+updateFromLocalTemp/100);
    if(currentTemp > +updateFromLocalTemp/2) currentTemp - 2*(+updateFromLocalTemp/100); 
    if(currentTemp < +updateFromLocalTemp/-2) currentTemp + 2*(+updateFromLocalTemp/100); 
    currentTime = new Date().toLocaleTimeString();

    if (dataPointsTemp.length >= 10) { //only 10 data points remain on the screen 
        dataPointsTemp.shift();
        tempData.labels.shift();
    }

    localStorage.setItem("Motor Temperature", (currentTemp).toFixed(1));
    document.getElementById("motor").innerHTML = localStorage.getItem("Motor Temperature"); 
    dataPointsTemp.push(currentTemp);
    tempData.labels.push(currentTime);
    tempChart.update();
}
//end of graph creation temperature

//start of graph creation voltage
let voltageCanvas = document.getElementById("voltageGraph"); //graph is linked to html 
let dataPointsVoltage = [];
let voltageData = { //data is described 
    labels: [],
    datasets: [{
        label: "Voltage",
        data: dataPointsVoltage,
        borderColor: "rgba(238,188,49,255)",
        pointRadius: 3
    }]
};

let chartOptionsVoltage = { //settings are selected 
    maintainAspectRatio: false,
};

let voltageChart = new Chart(voltageCanvas, { //graph type is declared 
    type: 'line',
    data: voltageData,
    options: chartOptionsVoltage
});

let currentVoltage = +(localStorage.getItem("Main Battery Voltage"));
if (currentVoltage === "" || currentVoltage === undefined || currentVoltage === 0.0) currentVoltage = 48.1;  
currentTime = new Date().toLocaleTimeString();

function startupVoltage() {  //default case is provided
currentVoltage = +(localStorage.getItem("Main Battery Voltage"));
if (currentVoltage === "" || currentVoltage === undefined || currentVoltage === 0.0) currentVoltage = 48.1;  
let currentTime = new Date().toLocaleTimeString();
dataPointsVoltage.push(currentVoltage);
voltageData.labels.push(currentTime);
voltageChart.update();
}

function addDataVoltage() { //function that prints the graph and runs a singular cycle
    let updateFromLocalVoltage = localStorage.getItem("Main Battery Voltage");   
    currentVoltage += Math.random() * (2*(+updateFromLocalVoltage/100)) - (+updateFromLocalVoltage/100);
    if(currentVoltage > +updateFromLocalVoltage/2) currentVoltage - 2*(+updateFromLocalVoltage/100); 
    if(currentVoltage < +updateFromLocalVoltage/-2) currentVoltage + 2*(+updateFromLocalVoltage/100); 
    currentTime = new Date().toLocaleTimeString();

    if (dataPointsVoltage.length >= 10) { //allows only 10 data points in the view 
        dataPointsVoltage.shift();
        voltageData.labels.shift();
    }

    localStorage.setItem("Main Battery Voltage", (currentVoltage).toFixed(1));
    document.getElementById("mainBatteryVoltage").innerHTML = localStorage.getItem("Main Battery Voltage"); 
    dataPointsVoltage.push(currentVoltage);
    voltageData.labels.push(currentTime);
    voltageChart.update();
}
// end of graph voltage

//start of battery tracker on the dashboard
const data = { //data is defined 
  datasets: [{
    data: [batteryLevel, 100-batteryLevel],
    backgroundColor: ['#32CD32', '#111016'],
    borderWidth: 0,
    hoverBackgroundColor: ['white', '#111016']
  }]
};

const options = { //options are selected for the battery 
  responsive: false,
  cutout: '80%',
  rotation: 0,
  circumference: 360,
};

const chart = new Chart('battery-chart', { //chart type is declared 
  type: 'doughnut',
  data: data,
  options: options
});
//end of battery tracker 

//start of speedometer
const needle = document.querySelector('.needle'); //needle element in html is assigned a variable 
const value = document.querySelector('.value'); //value element in html is assigned a variable 
const maxSpeed = 1000; //maximum speed the speedometer will show in km/h before looping around for a second time 

function updateSpeedometer(speed) { //calculates the position of the needle based on the input speed value
  const angle = speed / maxSpeed * 270 - 135;
  needle.style.transform = `rotate(${angle}deg)`;
  value.innerHTML = (+document.getElementById("speed").innerHTML).toFixed();
}
//end of speedometer

//navigation buttons on the dashboard 
const start = document.getElementById("start"); //start button 
    start.addEventListener('click', function() {
      //using a constantly listening function it, a check is preformed to ensure it can launch
      if(checkAcceleration() === true && +document.getElementById("accelerationTime").innerHTML != 0) {
        podStatus = "accelerating";
        document.getElementById("armed-line").style.display = "flex" //causes the status bar at the top to show the pod has begun its journey 
        underway.style.zIndex = 2; //all z index changes are to display different buttons that exist under the current navigation buttons depending on the situation 
        start.style.zIndex = 1; 
        document.getElementById("accelerationTime").style.display = "flex" //shows the time that the pod will accelerate for 
        let count = Math.ceil(+localStorage.getItem("Acceleration Time"));

        const countdownInterval = setInterval (() => { //function acts on 1s intervals and calculates the speed using kinematics while also decrementing the time in the status bar 
          if(count === 0) { //if the acceleration has been completed
            clearInterval(countdownInterval); //stops the countdown
            document.getElementById("accelerationTime").style.display = "none" //stops the acceleration time from showing 
            podStatus = "coasting"; 
            if(podStatus === "coasting") { 
            localStorage.setItem("Acceleration", 0);  
            }
            document.getElementById("acceleration").innerHTML = 0;  
            document.getElementById("accelerating-line").style.display = "flex"
            return; 
          }
          speedCounter++; 
          document.getElementById("accelerationTime").innerHTML = "(" + count + "s)"; 
          document.getElementById("speed").innerHTML = (speedCounter * +document.getElementById("acceleration").innerHTML * 3.6).toFixed(2); 
          count--;
        }, 1000); //operates on 1s intervals 

      } else { //if the check for launch failed 
        //alert is sent out to let the user know that an acceleration in m/s^2 and a duration must be input 
        document.getElementById("popup-error-message-launch").innerHTML = "Error! No acceleration details detected " + new Date().toLocaleTimeString();
            document.getElementById("alert-error-message-launch").innerHTML = "Error! No acceleration details detected " + new Date().toLocaleTimeString();
            document.getElementById("popup-error-launch").style.display = "flex";
            document.getElementById("alert-error-launch").style.display = "flex";
            setTimeout(function() {
              document.getElementById("popup-error-launch").style.display = "none";
            }, 5000); //notification will last for 5s and then must be found in the alerts section 
      }
    });

//stop button on the dashboard
const stop = document.getElementById("stop");
    stop.addEventListener('click', function() { //when the stop button is clicked, the pod is stopped so must indicate that with the status bar at the top of the dashboard 
      document.getElementById("off-line").style.display = "flex"
      document.getElementById("armed-line").style.display = "flex"
      document.getElementById("accelerating-line").style.display = "flex"
      document.getElementById("coasting-line").style.display = "flex"
      document.getElementById("braking-line").style.display = "flex"
      reset.style.zIndex = 2; //hides the stop button since the system must be reset before it can be stopped again 
      stop.style.zIndex = 1; 
      podStatus = "off"; 
      document.getElementById("speed").innerHTML = 0;  
      updateSpeedometer(0); //makes sure the speedometer has been turned off
      document.getElementById("rpm").innerHTML = 0; 
      localStorage.setItem("RPM", 0); 
      localStorage.setItem("Acceleration", 0); 
      document.getElementById("acceleration").innerHTML = 0;

      //alert indicating the pod has come to a stop 
      document.getElementById("popup-success-message-stop").innerHTML = "Success! The pod is stationary. " + new Date().toLocaleTimeString();
      document.getElementById("alert-success-message-stop").innerHTML = "Success! The pod is stationary. " + new Date().toLocaleTimeString();
      document.getElementById("popup-success-stop").style.display = "flex";
      document.getElementById("alert-success-stop").style.display = "flex";
      setTimeout(function() {
        document.getElementById("popup-success-stop").style.display = "none";
      }, 5000); //displays for 5 seconds 
    });   

const check = document.getElementById("check"); //check button on the navigation 
    check.addEventListener('click', function() {
      if (readyCheck() === true) { //utilizes a function which checks a series of preferences before proceeding 
      document.getElementById("off-line").style.display = "flex"
      document.getElementById("armed-line").style.display = "none"
      document.getElementById("accelerating-line").style.display = "none"
      document.getElementById("coasting-line").style.display = "none"
      document.getElementById("braking-line").style.display = "none"
      check.style.zIndex = 1; 
      start.style.zIndex = 2; 
      document.getElementById("travelledDistance").innerHTML = "0"
      } else { //if the check fails 
        //system sends out a warning explaining possible reasons for the failure 
        document.getElementById("popup-warning-message-check").innerHTML = "Warning! Arming failed, ensure pod is stationary. " + new Date().toLocaleTimeString();
        document.getElementById("alert-warning-message-check").innerHTML = "Warning! Arming failed, ensure pod is stationary. " + new Date().toLocaleTimeString();
        document.getElementById("popup-warning-check").style.display = "flex";
        document.getElementById("alert-warning-check").style.display = "flex";
        setTimeout(function() {
          document.getElementById("popup-warning-check").style.display = "none";
        }, 5000); 
      }
    });    
  
const reset = document.getElementById("reset"); //reset button on the navigation
    reset.addEventListener('click', function() {
      location.reload();  //resets by reloading the web page
    });
//end of navigation buttons 

//if all systems are stopped, arm the pod
function readyCheck () {
  if ( //checks if the pod is stationary and the battery is a suitable level 
    +document.getElementById("acceleration").innerHTML === 0 &&
    +document.getElementById("rpm").innerHTML === 0 &&
    batteryLevel >= 25 &&
    podStatus === "off"
    ) {
    podStatus = "armed";  //arms the pod if true 
    return true;
    } else {
      return false; 
    }
}

//when the system is turned on, enable the battery and speed guages
function checkCondition() { //this function exists so that when the pod is turned off the checkCondition fails and the gauges are able to turn off 
  if (podStatus != "off") {
    let speedInterval, batteryInterval;

    speedInterval = setInterval(function() { //this interval updating every second updates the speedometer with a new time 
      if (podStatus != "off") {
        let speed = document.getElementById("speed").innerHTML; 
        updateSpeedometer(speed);
      } else {
        clearInterval(speedInterval);
      }
    }, 1000); //this may appear deceiving, the 1 second interval is not controlled through this 1000, as the speed is calculated using a counter from 1-10 in code written above
    
    batteryInterval = setInterval(() => { //interval for the battery status 
      if (podStatus != "off") {
        if (batteryLevel > 0) {
          batteryLevel -= 1; //decreases the battery life by 1 percent every 5 seconds 
          document.getElementById("batteryLevel").innerHTML = batteryLevel + "%";  //updates the visual battery level 
          chart.data.datasets[0].data[0] = batteryLevel;
          chart.data.datasets[0].data[1] = 100 - batteryLevel;
          if(batteryLevel <= 50 && batteryLevel >= 25) { //if the battery level falls below 50% a warning alert is sent out 
            chart.data.datasets[0].backgroundColor = ['rgba(238,188,49,255)', '#111016']; 
            chart.data.datasets[0].hoverBackgroundColor = ['white', '#111016']; 

            document.getElementById("popup-warning-message-battery50").innerHTML = "Warning! Battery life has reached 50% " + new Date().toLocaleTimeString();
            document.getElementById("alert-warning-message-battery50").innerHTML = "Warning! Battery life has reached 50% " + new Date().toLocaleTimeString();
            document.getElementById("popup-warning-battery50").style.display = "flex";
            document.getElementById("alert-warning-battery50").style.display = "flex";
            setTimeout(function() {
              document.getElementById("popup-warning-battery50").style.display = "none";
            }, 5000); 
        
          } else if (batteryLevel <= 25) { //if the battery level is below 25% another warning is sent out 
            chart.data.datasets[0].backgroundColor = ['red', '#111016']; 
            chart.data.datasets[0].hoverBackgroundColor = ['red', '#111016']; 

            document.getElementById("popup-warning-message-battery25").innerHTML = "Warning! Battery life has reached 25% " + new Date().toLocaleTimeString();
            document.getElementById("alert-warning-message-battery25").innerHTML = "Warning! Battery life has reached 25% " + new Date().toLocaleTimeString();
            document.getElementById("popup-warning-battery25").style.display = "flex";
            document.getElementById("alert-warning-battery25").style.display = "flex";
            setTimeout(function() {
              document.getElementById("popup-warning-battery25").style.display = "none";
            }, 5000); 

          }
          chart.update();
        } else { //this means the battery has died 

          //in this scenerio another error message is sent notifying the user of the dead battery 
          document.getElementById("popup-error-message-dead").innerHTML = "Error! Battery has died " + new Date().toLocaleTimeString();
            document.getElementById("alert-error-message-dead").innerHTML = "Error! Battery has died " + new Date().toLocaleTimeString();
            document.getElementById("popup-error-dead").style.display = "flex";
            document.getElementById("alert-error-dead").style.display = "flex";
            setTimeout(function() {
              document.getElementById("popup-error-dead").style.display = "none";
            }, 5000); 

          clearInterval(batteryInterval); //if the battery is dead it clears the intervals of the battery to stop the code from running  
        }
      } else {
        clearInterval(batteryInterval); //if the pod status does equal off there is no need for the battery to update 
      }
    }, 5000);
  } else { 
    setTimeout(checkCondition, 100); //this allows the code to consistently check if there is a change in the podStatus causing the condition to evaluate to true (100ms checks)
  }
}
//end of battery and speed intervals

//when the pod is launched, enable voltage, temp, rpm acceleration and distance guages
function checkArmed() { //checks if the pod is armed  
  if (podStatus != "armed" && podStatus != "off") {
    let voltageInterval, tempInterval, rpmInterval, accelerationInterval, distanceInterval;

    voltageInterval = setInterval(() => { //allows the voltage graph to begin populating 
      if (podStatus != "armed" && podStatus != "off") {
        addDataVoltage();
      } else {
        clearInterval(voltageInterval);
      }
    }, 1000);
    
    tempInterval = setInterval(() => { //alllows the temperature graph to begin populating 
      if (podStatus != "armed" && podStatus != "off") {
        addDataTemp();
      } else {
        clearInterval(tempInterval);
      }
    }, 5000);
    
    rpmInterval = setInterval(() => { //alllows the rpm graph to begin populating 
      if (podStatus != "armed" && podStatus != "off") {
        addDataRPM();
      } else {
        clearInterval(rpmInterval);
      }
    }, 500);
    
    accelerationInterval = setInterval(() => { //alllows the acceleration graph to begin populating 
      if (podStatus != "armed" && podStatus != "off") {
        addDataAcceleration();
      } else {
        clearInterval(accelerationInterval);
      }
    }, 500);
    
    distanceInterval = setInterval(() => { //begins to update the pod on the progress bar ensuring that all speeds and accelerations are showcased visually 
      if (podStatus != "armed" && podStatus != "off" && +document.getElementById("travelledDistance").innerHTML <= +document.getElementById("tripDistance").innerHTML) {
        if(podStatus === "accelerating" || podStatus === "coasting" || podStatus === "braking") {
        tripLength += (+((+document.getElementById("speed").innerHTML)/3.6));
        document.getElementById("travelledDistance").innerHTML = tripLength.toFixed(2); 
        }
        updatePodDistance();
      } else {
        clearInterval(distanceInterval);
      }
    }, 1000); //updates the pod every second 

  } else { 
    setTimeout(checkArmed, 100); //checks every 100ms until the if statement evaluates as true 
  }
}
//end of graph and distance interval declarations 

//waits for and confirms acceleration has been input by user
function checkAcceleration() {
  if (+document.getElementById("acceleration").innerHTML != "0" && podStatus === "armed") {
  return true;
  } else { 
    setTimeout(checkAcceleration, 100); 
  }
}
//end of checkAcceleration function 

//checks to see if the pod successfully finished braking
function checkVelocity() {
  if (+document.getElementById("speed").innerHTML <= 1 && podStatus === "braking") {
  document.getElementById("speed").innerHTML = 0; 
  document.getElementById("travelledDistance").innerHTML = document.getElementById("tripDistance").innerHTML; 
  updateSpeedometer(0); 
  document.getElementById("rpm").innerHTML = 0; 
  podStatus = "off"; 
  document.getElementById("braking-line").style.display = "flex"
  localStorage.setItem("RPM", 0);
  stop.click();
  } else { 
    setTimeout(checkVelocity, 100); //if the check fails function will continue to look for the check to pass
  }
}
//end of speed check 

function checkBraking() { //this function ensures that the pod is currently breaking by assigning it a negative acceleration 
  if (podStatus === "braking" && brakingAcceleration != 0) {
    let speedInterval
    speedInterval = setInterval(function() {
      if (podStatus != "off") {
        let speed = +document.getElementById("speed").innerHTML; 
        document.getElementById("speed").innerHTML = (((speed/3.6)+ brakingAcceleration)*3.6).toFixed(2); 
      } else {
        clearInterval(speedInterval);
      }
    }, 1000);
  } else { 
    setTimeout(checkBraking, 100);  //the negative acceleration is only assigned when breaking meaning the function must wait for this to occur 
  }
}

//waits for and confirms braking criteria has been met, then provides the deceleration necessary to meet the target distance at a halt 
function checkIfBrake() { 
  if (podStatus === "coasting" && travelledPercentage >= 80) { //if the pod has travelled 80% of its trip and is moving at a constant velocity 
    document.getElementById("coasting-line").style.display = "flex"
    podStatus = "braking";
    let distanceLeft = (+document.getElementById("tripDistance").innerHTML) - (+document.getElementById("travelledDistance").innerHTML);
    let currentSpeed = (+document.getElementById("speed").innerHTML)/3.6; 
    let finalSpeed = 0; 
    brakingAcceleration = ((currentSpeed ** 2)/(-2 * (distanceLeft))); //deceleration in m/s^2 calculated using kinematics 
    localStorage.setItem("Acceleration", brakingAcceleration); 
    document.getElementById("acceleration").innerHTML = brakingAcceleration; //stores the deceleration for use in the checkBraking() function 
  } else { 
    setTimeout(checkIfBrake, 100); //must continiously preform checks until the if statement is true 
  }
}
//end of checkIfBrake() function 

//function calls for all of the checks 
checkCondition();
checkArmed(); 
checkIfBrake(); 
checkVelocity(); 
checkBraking(); 
//end of function calls

} //end of window onload function 

//Beginning of local storage function, each item is pulled from the input location within html and uses javascript to upload it to chromes web local storage 
//this function is called when a click is detected on the save changes button on the inputs page 
function locallyStore()  { 
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

  var retrieveFrictionBrakes = document.getElementById("friction-brakes").value; 
  if(retrieveFrictionBrakes != undefined && retrieveFrictionBrakes != '') {  
  var frictionBrakes = localStorage.setItem("Friction Brakes Temperature", retrieveFrictionBrakes);
  document.getElementById("frictionBrakes").innerHTML = localStorage.getItem("Friction Brakes Temperature"); }

  var retrieveElectricBrakes = document.getElementById("electric-brakes").value; 
  if(retrieveElectricBrakes != undefined && retrieveElectricBrakes != '') {  
  var ElectricBrakes = localStorage.setItem("Electric Brakes Temperature", retrieveElectricBrakes);
  document.getElementById("electricBrakes").innerHTML = localStorage.getItem("Electric Brakes Temperature"); }

  var retrieveMainBattery = document.getElementById("main-battery").value; 
  if(retrieveMainBattery != undefined && retrieveMainBattery != '') {  
  var MainBattery = localStorage.setItem("Main Battery Temperature", retrieveMainBattery);
  document.getElementById("mainBattery").innerHTML = localStorage.getItem("Main Battery Temperature"); }

  var retrieveMotorTemperature = document.getElementById("motor-temperature").value; 
  if(retrieveMotorTemperature != undefined && retrieveMotorTemperature != '') {  
  var MotorTemperature = localStorage.setItem("Motor Temperature", retrieveMotorTemperature);
  document.getElementById("motor").innerHTML = localStorage.getItem("Motor Temperature"); }

  var retrieveLiquidCooling = document.getElementById("liquid-cooling").value; 
  if(retrieveLiquidCooling != undefined && retrieveLiquidCooling != '') {  
  var LiquidCooling = localStorage.setItem("Liquid Cooling Temperature", retrieveLiquidCooling);
  document.getElementById("liquidCooling").innerHTML = localStorage.getItem("Liquid Cooling Temperature"); }

  var retrieve24VBattery = document.getElementById("24v-battery").value; 
  if(retrieve24VBattery != undefined && retrieve24VBattery != '') {  
  var TwentyFourVBattery = localStorage.setItem("24V Battery Temperature", retrieve24VBattery);
  document.getElementById("24VBattery").innerHTML = localStorage.getItem("24V Battery Temperature"); }

  var retrieveMainBatteryVoltage = document.getElementById("main-battery-voltage").value; 
  if(retrieveMainBatteryVoltage != undefined && retrieveMainBatteryVoltage != '') {  
  var MainBatteryVoltage = localStorage.setItem("Main Battery Voltage", retrieveMainBatteryVoltage);
  document.getElementById("mainBatteryVoltage").innerHTML = localStorage.getItem("Main Battery Voltage"); }

  var retrieve24VBatteryVoltage = document.getElementById("24v-battery-voltage").value; 
  if(retrieve24VBatteryVoltage != undefined && retrieve24VBatteryVoltage != '') {  
  var TwentyVBatteryVoltage = localStorage.setItem("24V Battery Voltage", retrieve24VBatteryVoltage);
  document.getElementById("24VBatteryVoltage").innerHTML = localStorage.getItem("24V Battery Voltage"); }

  var retrieve5VConverterVoltage = document.getElementById("5v-converter-voltage").value; 
  if(retrieve5VConverterVoltage != undefined && retrieve5VConverterVoltage != '') {  
  var FiveVoltConverterVoltage = localStorage.setItem("5V Converter Voltage", retrieve5VConverterVoltage);
  document.getElementById("5VConverterVoltage").innerHTML = localStorage.getItem("5V Converter Voltage"); }

  var retrieve12VConverterVoltage = document.getElementById("12v-converter-voltage").value; 
  if(retrieve12VConverterVoltage != undefined && retrieve12VConverterVoltage != '') {  
  var TwelveVoltConverterVoltage = localStorage.setItem("12V Converter Voltage", retrieve12VConverterVoltage);
  document.getElementById("12VConverterVoltage").innerHTML = localStorage.getItem("12V Converter Voltage"); }
  
  var retrieveAirTankPressure = document.getElementById("air-tank-pressure").value; 
  if(retrieveAirTankPressure != undefined && retrieveAirTankPressure != '') {  
  var airTankPressure = localStorage.setItem("Air Tank Pressure", retrieveAirTankPressure);
  document.getElementById("airTankPressure").innerHTML = localStorage.getItem("Air Tank Pressure"); }

  var retrieveVesselPressure = document.getElementById("vessel-pressure").value; 
  if(retrieveVesselPressure != undefined && retrieveVesselPressure != '') {  
  var vesselPressure = localStorage.setItem("Vessel Pressure", retrieveVesselPressure);
  document.getElementById("vesselPressure").innerHTML = localStorage.getItem("Vessel Pressure"); }

  var retrieveAccelerationTime = document.getElementById("acceleration-time").value; 
  if(retrieveAccelerationTime != undefined && retrieveAccelerationTime != '' && retrieveAccelerationTime != 0) {  
  var accelerationTime = localStorage.setItem("Acceleration Time", retrieveAccelerationTime);
  document.getElementById("accelerationTime").innerHTML = "(" + Math.ceil(localStorage.getItem("Acceleration Time")) + "s)";}

  var retrieveRPM = document.getElementById("rpm-value").value; 
  if(retrieveRPM != undefined && retrieveRPM != '') {  
  var rpmValue = localStorage.setItem("RPM", retrieveRPM);
  document.getElementById("rpm").innerHTML = localStorage.getItem("RPM"); }

  var retrieveAcceleration = document.getElementById("acceleration-value").value; 
  if(retrieveAcceleration != undefined && retrieveAcceleration != '') {  
  var Acceleration = localStorage.setItem("Acceleration", retrieveAcceleration);
  document.getElementById("acceleration").innerHTML = localStorage.getItem("Acceleration"); }

  var retrieveTripDistance = document.getElementById("trip-distance").value; 
  if(retrieveTripDistance != undefined && retrieveTripDistance != '') {  
  var TripDistance = localStorage.setItem("Trip Distance", retrieveTripDistance);
  document.getElementById("tripDistance").innerHTML = localStorage.getItem("Trip Distance"); }
  
  document.getElementById("menuSidebar").style.display = "flex"
  document.getElementById("menu-middle").style.display = "flex"
  document.getElementById("inputsMiddle").style.display = "none"; 

    //if the changes are saved a notification will inform the user 
    document.getElementById("popup-success-message-save").innerHTML = "Success! Your inputs have been saved. " + new Date().toLocaleTimeString();
    document.getElementById("alert-success-message-save").innerHTML = "Success! Your inputs have been saved. " + new Date().toLocaleTimeString();
    document.getElementById("popup-success-save").style.display = "flex";
    document.getElementById("alert-success-save").style.display = "flex";
    setTimeout(function() {
      document.getElementById("popup-success-save").style.display = "none";
    }, 5000); 
}