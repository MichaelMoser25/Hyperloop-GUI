window.onload = function() {

    //start of page visibility

    const homeButton = document.getElementById("homeLogo");
    homeButton.addEventListener('click', function() {
      document.getElementById("alertsMiddle").style.display = "none"
      document.getElementById("alertsSidebar").style.display = "none"
      document.getElementById("inputsMiddle").style.display = "none"
      document.getElementById("podsystemMiddle").style.display = "none"
      document.getElementById("podsystemSidebar").style.display = "none"
      document.getElementById("menuSidebar").style.display = "flex"
      document.getElementById("menu-middle").style.display = "flex"
      document.getElementById("dashboardMiddle").style.display = "none"
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
      startupTemp(); 
      startupVoltage(); 
    });

    const inputs = document.getElementById("alerts");
    inputs.addEventListener('click', function() {
      document.getElementById("menuSidebar").style.display = "none"
      document.getElementById("menu-middle").style.display = "none"
      document.getElementById("alertsMiddle").style.display = "flex"
      document.getElementById("alertsSidebar").style.display = "flex"
    });

    const podSystem = document.getElementById("inputs");
    podSystem.addEventListener('click', function() {
      document.getElementById("menuSidebar").style.display = "none"
      document.getElementById("menu-middle").style.display = "none"
      document.getElementById("inputsMiddle").style.display = "flex"
    });
    //end of page visibility

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
if(localStorage.getItem("Speed")!= undefined) {
  document.getElementById("speed").innerHTML = localStorage.getItem("Speed"); 
}
if(localStorage.getItem("Acceleration")!= undefined) {
  document.getElementById("acceleration").innerHTML = localStorage.getItem("Acceleration"); 
}
if(localStorage.getItem("Trip Distance")!= undefined) {
  document.getElementById("tripDistance").innerHTML = localStorage.getItem("Trip Distance"); 
}
//end of local storage conditionals

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
let currentTime = new Date().toLocaleTimeString();

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
setInterval(addDataTemp, 5000);
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
setInterval(addDataVoltage, 1000);
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

setInterval(() => {
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
  }  else {
    clearInterval(intervalId);
  }
}, 5000);
//end of battery tracker 

//start of speedometer

const needle = document.querySelector('.needle');
const value = document.querySelector('.value');
const maxSpeed = 300;

function updateSpeedometer(speed) { 
  const angle = speed / maxSpeed * 270 - 135;
  needle.style.transform = `rotate(${angle}deg)`;
  value.innerHTML = speed.toFixed();
}
setInterval(function() {
  let speed = Math.floor(Math.random() * (300 - 0 + 1)) + 0;
  updateSpeedometer(speed);
}, 1000);

//end of speedometer
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

  var retrieveSpeed = document.getElementById("speed-value").value; 
  if(retrieveSpeed != undefined && retrieveSpeed != '') {  
  var vesselSpeed = localStorage.setItem("Speed", retrieveSpeed);
  document.getElementById("speed").innerHTML = localStorage.getItem("Speed"); }

  var retrieveRPM = document.getElementById("rpm-value").value; 
  if(retrieveRPM != undefined && retrieveRPM != '') {  
  var rpmValue = localStorage.setItem("RPM", retrieveRPM);
  document.getElementById("rpm").innerHTML = localStorage.getItem("RPM"); }

  var retrieveAcceleration = document.getElementById("acceleration-value").value; 
  if(retrieveAcceleration != undefined && retrieveAcceleration != '') {  
  var rpmAcceleration = localStorage.setItem("Acceleration", retrieveAcceleration);
  document.getElementById("acceleration").innerHTML = localStorage.getItem("Acceleration"); }

  var retrieveTripDistance = document.getElementById("trip-distance").value; 
  if(retrieveTripDistance != undefined && retrieveTripDistance != '') {  
  var rpmTripDistance = localStorage.setItem("Trip Distance", retrieveTripDistance);
  document.getElementById("tripDistance").innerHTML = localStorage.getItem("Trip Distance"); }
  
  document.getElementById("menuSidebar").style.display = "flex"
  document.getElementById("menu-middle").style.display = "flex"
  document.getElementById("inputsMiddle").style.display = "none"; 
} //end of local storage function
