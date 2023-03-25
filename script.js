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
      document.getElementById("inputsSidebar").style.display = "flex"
    });
  };
  