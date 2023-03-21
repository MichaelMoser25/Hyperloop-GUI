window.onload = function() {
    const dashboard = document.getElementById("dashboard");
    dashboard.addEventListener('click', function() {
      window.location = "dashboard.html";
    });

    const controls = document.getElementById("controls");
    controls.addEventListener('click', function() {
      window.location = "controls.html";
    });

    const inputs = document.getElementById("inputs");
    inputs.addEventListener('click', function() {
      window.location = "inputs.html";
    });

    const electrical = document.getElementById("electrical");
    electrical.addEventListener('click', function() {
      window.location = "electrical.html";
    });
  };
  