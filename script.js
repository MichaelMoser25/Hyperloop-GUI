window.onload = function() {
    const dashboard = document.getElementById("dashboard");
    dashboard.addEventListener('click', function() {
      document.getElementById("menuSidebar").hidden = true
      document.getElementById("menuMiddle").hidden = true
    });

    const alerts = document.getElementById("alerts");
    alerts.addEventListener('click', function() {
      document.getElementById("menuSidebar").hidden = true
      document.getElementById("menuMiddle").hidden = true
    });

    const inputs = document.getElementById("inputs");
    inputs.addEventListener('click', function() {
      document.getElementById("menuSidebar").hidden = true
      document.getElementById("menuMiddle").hidden = true
    });

    const podSystem = document.getElementById("podSystem");
    podSystem.addEventListener('click', function() {
      document.getElementById("menuSidebar").hidden = true
      document.getElementById("menuMiddle").hidden = true
    });
  };
