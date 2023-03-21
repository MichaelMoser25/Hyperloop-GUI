window.onload = function() {
    const dashboard = document.getElementById("dashboard");
    dashboard.addEventListener('click', function() {
      window.location = "dashboard.html";
    });

    const alerts = document.getElementById("alerts");
    alerts.addEventListener('click', function() {
      window.location = "alerts.html";
    });

    const inputs = document.getElementById("inputs");
    inputs.addEventListener('click', function() {
      window.location = "inputs.html";
    });

    const podSystem = document.getElementById("podSystem");
    podSystem.addEventListener('click', function() {
      window.location = "podSystem.html";
    });
  };
