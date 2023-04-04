window.onload = function() {

    //variables declared
    let podStatus = "off";
    let wheelRadius = 0.3; //meters
    let speedCounter = 0; 
    let travelledPercentage = 0; 
    let brakingAcceleration = 0; 
    let tripLength = 0 
    //end of variable declaration

    //start of page functionality
    const homeButton = document.getElementById("homeLogo");
    homeButton.addEventListener('click', function() {
      document.getElementById("alertsMiddle").style.display = "none"
      document.getElementById("inputsMiddle").style.display = "none"
      document.getElementById("podsystemMiddle").style.display = "none"
      document.getElementById("podsystemSidebar").style.display = "none"
      document.getElementById("menuSidebar").style.display = "flex"
      document.getElementById("menu-middle").style.display = "flex"
      document.getElementById("dashboardMiddle").style.display = "none"
    });

    const returnHome = document.getElementById("returnHome");
    returnHome.addEventListener('click', function() {
      document.getElementById("alertsMiddle").style.display = "none"
      document.getElementById("inputsMiddle").style.display = "none"
      document.getElementById("podsystemMiddle").style.display = "none"
      document.getElementById("podsystemSidebar").style.display = "none"
      document.getElementById("menuSidebar").style.display = "flex"
      document.getElementById("menu-middle").style.display = "flex"
      document.getElementById("dashboardMiddle").style.display = "none"
    });

    const tripProgress = document.getElementById("tripProgress");
    tripProgress.addEventListener('click', function() {
      document.getElementById("alertsMiddle").style.display = "none"
      document.getElementById("inputsMiddle").style.display = "none"
      document.getElementById("podsystemMiddle").style.display = "none"
      document.getElementById("podsystemSidebar").style.display = "none"
      document.getElementById("menuSidebar").style.display = "none"
      document.getElementById("menu-middle").style.display = "none"
      document.getElementById("dashboardMiddle").style.display = "flex"
    });

    const dashboard = document.getElementById("dashboard");
    dashboard.addEventListener('click', function() {
      document.getElementById("menuSidebar").style.display = "none"
      document.getElementById("menu-middle").style.display = "none"
      document.getElementById("dashboardMiddle").style.display = "flex"
    });

    const alerts = document.getElementById("podSystem");
    alerts.addEventListener('click', function() {
      document.getElementById("menuSidebar").style.display = "none"
      document.getElementById("menu-middle").style.display = "none"
      document.getElementById("podsystemMiddle").style.display = "flex"
      document.getElementById("podsystemSidebar").style.display = "flex"
    });

    const podStats = document.getElementById("podStatus");
    podStats.addEventListener('click', function() {
      document.getElementById("alertsMiddle").style.display = "none"
      document.getElementById("inputsMiddle").style.display = "none"
      document.getElementById("podsystemMiddle").style.display = "flex"
      document.getElementById("podsystemSidebar").style.display = "flex"
      document.getElementById("menuSidebar").style.display = "none"
      document.getElementById("menu-middle").style.display = "none"
      document.getElementById("dashboardMiddle").style.display = "none"
    });

    const inputs = document.getElementById("alerts");
    inputs.addEventListener('click', function() {
      document.getElementById("menuSidebar").style.display = "none"
      document.getElementById("menu-middle").style.display = "none"
      document.getElementById("alertsMiddle").style.display = "flex"
    });

    const errors = document.getElementById("errors");
    errors.addEventListener('click', function() {
      document.getElementById("alertsMiddle").style.display = "flex"
      document.getElementById("inputsMiddle").style.display = "none"
      document.getElementById("podsystemMiddle").style.display = "none"
      document.getElementById("podsystemSidebar").style.display = "none"
      document.getElementById("menuSidebar").style.display = "none"
      document.getElementById("menu-middle").style.display = "none"
      document.getElementById("dashboardMiddle").style.display = "none"
    });

    const podSystem = document.getElementById("inputs");
    podSystem.addEventListener('click', function() {
      document.getElementById("alertsMiddle").style.display = "none"
      document.getElementById("inputsMiddle").style.display = "flex"
      document.getElementById("podsystemMiddle").style.display = "none"
      document.getElementById("podsystemSidebar").style.display = "none"
      document.getElementById("menuSidebar").style.display = "none"
      document.getElementById("menu-middle").style.display = "none"
      document.getElementById("dashboardMiddle").style.display = "none"
    });

    const userInputs = document.getElementById("userInputs");
    userInputs.addEventListener('click', function() {
      document.getElementById("menuSidebar").style.display = "none"
      document.getElementById("menu-middle").style.display = "none"
      document.getElementById("inputsMiddle").style.display = "flex"
    });

    const saveChanges = document.getElementById("saveChanges");
    saveChanges.addEventListener('click', function() {
      startupTemp(); 
      startupVoltage(); 
      startupAcceleration(); 
      startupRPM(); 
    });
    //end of page functionality

//Start at local storage conditionals
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

//start of pod image distance calculation
function updatePodDistance () {
let targetDistance = document.getElementById("tripDistance").innerHTML; 
let travelledDistance = document.getElementById('travelledDistance').innerHTML;
let podImageDistance = document.getElementById('pod-distance');
travelledPercentage = ((+travelledDistance)/(+targetDistance))*100
podImageDistance.style.setProperty('--pod-width',travelledPercentage + '%');
} 
//end of pod image distance calculation 

//start of graph acceleration
let accelerationCanvas = document.getElementById("accelerationGraph");
let dataPointsAcceleration = [];
let accelerationData = {
    labels: [],
    datasets: [{
        label: "Acceleration",
        data: dataPointsAcceleration,
        borderColor: "grey",
        pointRadius: 3
    }]
};

let chartOptionsAcceleration = {
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

let accelerationChart = new Chart(accelerationCanvas, {
    type: 'line',
    data: accelerationData,
    options: chartOptionsAcceleration,
});

let currentAcceleration = +(localStorage.getItem("Acceleration"));
if (currentAcceleration === "" || currentAcceleration === undefined) currentAcceleration = 3.7;  
let currentTime = new Date().toLocaleTimeString();

function startupAcceleration() { 
currentAcceleration = +(localStorage.getItem("Acceleration"));
if (currentAcceleration === "" || currentAcceleration === undefined) currentAcceleration = 3.7;  
let currentTime = new Date().toLocaleTimeString();
dataPointsAcceleration.push(currentAcceleration);
accelerationData.labels.push(currentTime);
accelerationChart.update();
}

function addDataAcceleration() {
    let updateFromLocalAcceleration = localStorage.getItem("Acceleration"); 
    if(updateFromLocalAcceleration != 0) {
    currentAcceleration += Math.random() * (2*(+updateFromLocalAcceleration/100)) - (+updateFromLocalAcceleration/100);
    if(currentAcceleration > +updateFromLocalAcceleration/2) currentAcceleration - 2*(+updateFromLocalAcceleration/100); 
    if(currentAcceleration < +updateFromLocalAcceleration/-2) currentAcceleration + 2*(+updateFromLocalAcceleration/100); 
    } else {
      currentAcceleration = 0; 
    }
    currentTime = new Date().toLocaleTimeString();

    if (dataPointsAcceleration.length >= 10) {
        dataPointsAcceleration.shift();
        accelerationData.labels.shift();
    }

    localStorage.setItem("Acceleration", (currentAcceleration).toFixed(1));
    document.getElementById("acceleration").innerHTML = localStorage.getItem("Acceleration"); 
    dataPointsAcceleration.push(currentAcceleration);
    accelerationData.labels.push(currentTime);
    accelerationChart.update();
}
//end of graph acceleration

//start of graph rpm
let rpmCanvas = document.getElementById("rpmGraph");
let dataPointsRPM = [];
let rpmData = {
    labels: [],
    datasets: [{
        label: "RPM",
        data: dataPointsRPM,
        borderColor: "grey",
        pointRadius: 3
    }]
};

let chartOptionsRPM = {
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

let rpmChart = new Chart(rpmCanvas, {
    type: 'line',
    data: rpmData,
    options: chartOptionsRPM,
});

let currentRPM = +(localStorage.getItem("RPM"));
if (currentRPM === "" || currentRPM === undefined) currentRPM = 0;  
currentTime = new Date().toLocaleTimeString();

function startupRPM() { 
currentRPM = +(localStorage.getItem("RPM"));
if (currentRPM === "" || currentRPM === undefined) currentRPM = 0;  
let currentTime = new Date().toLocaleTimeString();
dataPointsRPM.push(currentRPM);
rpmData.labels.push(currentTime);
rpmChart.update();
}

function addDataRPM() {
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
let tempCanvas = document.getElementById("tempGraph");
let dataPointsTemp = [];
let tempData = {
    labels: [],
    datasets: [{
        label: "Temperature",
        data: dataPointsTemp,
        borderColor: "rgba(238,188,49,255)",
        pointRadius: 3
    }]
};

let chartOptionsTemp = {
    maintainAspectRatio: false,
};

let tempChart = new Chart(tempCanvas, {
    type: 'line',
    data: tempData,
    options: chartOptionsTemp
});

let currentTemp = +(localStorage.getItem("Motor Temperature"));
if (currentTemp === "" || currentTemp === undefined || currentTemp === 0.0) currentTemp = 45;  
currentTime = new Date().toLocaleTimeString();

function startupTemp() { 
currentTemp = +(localStorage.getItem("Motor Temperature"));
if (currentTemp === "" || currentTemp === undefined || currentTemp === 0.0) currentTemp = 45;  
let currentTime = new Date().toLocaleTimeString();
dataPointsTemp.push(currentTemp);
tempData.labels.push(currentTime);
tempChart.update();
}

function addDataTemp() {
    let updateFromLocalTemp = localStorage.getItem("Motor Temperature");   
    currentTemp += Math.random() * (2*(+updateFromLocalTemp/100)) - (+updateFromLocalTemp/100);
    if(currentTemp > +updateFromLocalTemp/2) currentTemp - 2*(+updateFromLocalTemp/100); 
    if(currentTemp < +updateFromLocalTemp/-2) currentTemp + 2*(+updateFromLocalTemp/100); 
    currentTime = new Date().toLocaleTimeString();

    if (dataPointsTemp.length >= 10) {
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
let voltageCanvas = document.getElementById("voltageGraph");
let dataPointsVoltage = [];
let voltageData = {
    labels: [],
    datasets: [{
        label: "Voltage",
        data: dataPointsVoltage,
        borderColor: "rgba(238,188,49,255)",
        pointRadius: 3
    }]
};

let chartOptionsVoltage = {
    maintainAspectRatio: false,
};

let voltageChart = new Chart(voltageCanvas, {
    type: 'line',
    data: voltageData,
    options: chartOptionsVoltage
});

let currentVoltage = +(localStorage.getItem("Main Battery Voltage"));
if (currentVoltage === "" || currentVoltage === undefined || currentVoltage === 0.0) currentVoltage = 48.1;  
currentTime = new Date().toLocaleTimeString();

function startupVoltage() { 
currentVoltage = +(localStorage.getItem("Main Battery Voltage"));
if (currentVoltage === "" || currentVoltage === undefined || currentVoltage === 0.0) currentVoltage = 48.1;  
let currentTime = new Date().toLocaleTimeString();
dataPointsVoltage.push(currentVoltage);
voltageData.labels.push(currentTime);
voltageChart.update();
}

function addDataVoltage() {
    let updateFromLocalVoltage = localStorage.getItem("Main Battery Voltage");   
    currentVoltage += Math.random() * (2*(+updateFromLocalVoltage/100)) - (+updateFromLocalVoltage/100);
    if(currentVoltage > +updateFromLocalVoltage/2) currentVoltage - 2*(+updateFromLocalVoltage/100); 
    if(currentVoltage < +updateFromLocalVoltage/-2) currentVoltage + 2*(+updateFromLocalVoltage/100); 
    currentTime = new Date().toLocaleTimeString();

    if (dataPointsVoltage.length >= 10) {
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

// start of battery tracker
let batteryLevel = 100;
const data = {
  datasets: [{
    data: [batteryLevel, 100-batteryLevel],
    backgroundColor: ['#32CD32', '#111016'],
    borderWidth: 0,
    hoverBackgroundColor: ['white', '#111016']
  }]
};

const options = {
  responsive: false,
  cutout: '80%',
  rotation: 0,
  circumference: 360,
};

const chart = new Chart('battery-chart', {
  type: 'doughnut',
  data: data,
  options: options
});
//end of battery tracker 

//start of speedometer
const needle = document.querySelector('.needle');
const value = document.querySelector('.value');
const maxSpeed = 500;

function updateSpeedometer(speed) { 
  const angle = speed / maxSpeed * 270 - 135;
  needle.style.transform = `rotate(${angle}deg)`;
  value.innerHTML = (+document.getElementById("speed").innerHTML).toFixed();
}
//end of speedometer

//navigation buttons
const start = document.getElementById("start");
    start.addEventListener('click', function() {
      if(checkAcceleration() === true && +document.getElementById("accelerationTime").innerHTML != 0) {
        podStatus = "accelerating";
        console.log("accelerating"); 
        document.getElementById("armed-line").style.display = "flex"
        underway.style.zIndex = 2; 
        start.style.zIndex = 1; 
        document.getElementById("accelerationTime").style.display = "flex"
        let count = Math.ceil(+localStorage.getItem("Acceleration Time"));
        const countdownInterval = setInterval (() => {
          speedCounter++; 
          document.getElementById("accelerationTime").innerHTML = "(" + count + "s)"; 
          document.getElementById("speed").innerHTML = (speedCounter * +document.getElementById("acceleration").innerHTML * 3.6).toFixed(2); 
          count--;
          if(count === 0) {
            clearInterval(countdownInterval); 
            document.getElementById("accelerationTime").style.display = "none"
            podStatus = "coasting"; 
            console.log("coasting"); 
            localStorage.setItem("Acceleration", 0);
            document.getElementById("acceleration").innerHTML = 0;  
            document.getElementById("accelerating-line").style.display = "flex"
          }
        }, 1000); 
      } 
    });

const stop = document.getElementById("stop");
    stop.addEventListener('click', function() {
      document.getElementById("off-line").style.display = "flex"
      document.getElementById("armed-line").style.display = "flex"
      document.getElementById("accelerating-line").style.display = "flex"
      document.getElementById("coasting-line").style.display = "flex"
      document.getElementById("braking-line").style.display = "flex"
      reset.style.zIndex = 2; 
      stop.style.zIndex = 1; 
      podStatus = "off"; 
      document.getElementById("speed").innerHTML = 0;  
      updateSpeedometer(0); 
      document.getElementById("rpm").innerHTML = 0; 
      podStatus = "off"; 
      localStorage.setItem("RPM", 0); 
    });   

const check = document.getElementById("check");
    check.addEventListener('click', function() {
      if (readyCheck() === true) {
      document.getElementById("off-line").style.display = "flex"
      document.getElementById("armed-line").style.display = "none"
      document.getElementById("accelerating-line").style.display = "none"
      document.getElementById("coasting-line").style.display = "none"
      document.getElementById("braking-line").style.display = "none"
      check.style.zIndex = 1; 
      start.style.zIndex = 2; 
      document.getElementById("travelledDistance").innerHTML = "0"
        console.log("armed"); 
      } else {
        console.log("arming failed"); 
      }
    });    
  
const reset = document.getElementById("reset");
    reset.addEventListener('click', function() {
      location.reload(); 
    });

//end of navigation buttons 

//if all systems are stopped, arm the pod
function readyCheck () {
  if (
    +document.getElementById("acceleration").innerHTML === 0 &&
    +document.getElementById("rpm").innerHTML === 0 &&
    batteryLevel >= 25 &&
    podStatus === "off"
    ) {
    podStatus = "armed"; 
    return true;
    } else {
      return false; 
    }
}

//when the system is turned on, enable the battery and speed guages
function checkCondition() {
  if (podStatus != "off") {
    let speedInterval, batteryInterval;

    speedInterval = setInterval(function() {
      if (podStatus != "off") {
        let speed = document.getElementById("speed").innerHTML; 
        updateSpeedometer(speed);
      } else {
        clearInterval(speedInterval);
      }
    }, 1000);
    
    batteryInterval = setInterval(() => {
      if (podStatus != "off") {
        if (batteryLevel > 0) {
          batteryLevel -= 1;
          document.getElementById("batteryLevel").innerHTML = batteryLevel + "%"; 
          chart.data.datasets[0].data[0] = batteryLevel;
          chart.data.datasets[0].data[1] = 100 - batteryLevel;
          if(batteryLevel <= 50 && batteryLevel >= 25) {
            chart.data.datasets[0].backgroundColor = ['rgba(238,188,49,255)', '#111016']; 
            chart.data.datasets[0].hoverBackgroundColor = ['white', '#111016']; 
          } else if (batteryLevel <= 25) {
            chart.data.datasets[0].backgroundColor = ['red', '#111016']; 
            chart.data.datasets[0].hoverBackgroundColor = ['red', '#111016']; 
          }
          chart.update();
        } else {
          console.log("battery dead"); 
          clearInterval(batteryInterval);
        }
      } else {
        clearInterval(batteryInterval);
      }
    }, 5000);
  } else { 
    setTimeout(checkCondition, 100); 
  }
}
//end 

//when the pod is launched, enable voltage, temp, rpm acceleration and distance guages
function checkArmed() {
  if (podStatus != "armed" && podStatus != "off") {
    let voltageInterval, tempInterval, rpmInterval, accelerationInterval, distanceInterval;

    voltageInterval = setInterval(() => {
      if (podStatus != "armed" && podStatus != "off") {
        addDataVoltage();
      } else {
        clearInterval(voltageInterval);
      }
    }, 1000);
    
    tempInterval = setInterval(() => {
      if (podStatus != "armed" && podStatus != "off") {
        addDataTemp();
      } else {
        clearInterval(tempInterval);
      }
    }, 5000);
    
    rpmInterval = setInterval(() => {
      if (podStatus != "armed" && podStatus != "off") {
        addDataRPM();
      } else {
        clearInterval(rpmInterval);
      }
    }, 500);
    
    accelerationInterval = setInterval(() => {
      if (podStatus != "armed" && podStatus != "off") {
        addDataAcceleration();
      } else {
        clearInterval(accelerationInterval);
      }
    }, 500);
    
    distanceInterval = setInterval(() => {
      if (podStatus != "armed" && podStatus != "off" && +document.getElementById("travelledDistance").innerHTML <= +document.getElementById("tripDistance").innerHTML) {
        if(podStatus === "accelerating" || podStatus === "coasting" || podStatus === "braking") {
        tripLength += (+((+document.getElementById("speed").innerHTML)/3.6));
        document.getElementById("travelledDistance").innerHTML = tripLength.toFixed(2); 
        }
        updatePodDistance();
      } else {
        clearInterval(distanceInterval);
      }
    }, 1000); 

  } else { 
    setTimeout(checkArmed, 100); 
  }
}
//end

//waits for and confirms acceleration has been input by user
function checkAcceleration() {
  if (+document.getElementById("acceleration").innerHTML != "0" && podStatus === "armed") {
  return true;
  } else { 
    setTimeout(checkAcceleration, 100); 
  }
}
//end 

//checks to see if the pod successfully finished braking
function checkVelocity() {
  if (+document.getElementById("speed").innerHTML <= 1 && podStatus === "braking") {
  document.getElementById("speed").innerHTML = 0; 
  document.getElementById("travelledDistance").innerHTML = document.getElementById("tripDistance").innerHTML; 
  updateSpeedometer(0); 
  document.getElementById("rpm").innerHTML = 0; 
  podStatus = "off"; 
  document.getElementById("braking-line").style.display = "flex"
  ocalStorage.setItem("RPM", 0);
  } else { 
    setTimeout(checkVelocity, 100); 
  }
}
//end of finished braking check 

function checkBraking() {
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
    console.log(podStatus, brakingAcceleration); 
    setTimeout(checkBraking, 100); 
  }
}

//waits for and confirms braking criteria has been met
function checkIfBrake() {
  if (podStatus === "coasting" && travelledPercentage >= 80) {
    document.getElementById("coasting-line").style.display = "flex"
    podStatus = "braking";
    let distanceLeft = (+document.getElementById("tripDistance").innerHTML) - (+document.getElementById("travelledDistance").innerHTML);
    let currentSpeed = (+document.getElementById("speed").innerHTML)/3.6; 
    let finalSpeed = 0; 
    brakingAcceleration = ((currentSpeed ** 2)/(-2 * (distanceLeft))); //deceleration in m/s^2
  } else { 
    setTimeout(checkIfBrake, 100); 
  }
}
//end 

//function calls
checkCondition(); 
checkArmed(); 
checkIfBrake(); 
checkVelocity(); 
checkBraking(); 
//end of function calls

} //Bottom of window onload function 

function locallyStore()  {  //Beginning of local storage function
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
} //end of local storage function
