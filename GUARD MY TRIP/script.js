function showAlerts() {
    const alerts = [
        { location: "Downtown", level: "High Risk" },
        { location: "Market Street", level: "Medium Risk" }
    ];

    document.getElementById("alerts").innerHTML =
        alerts.map(a => `<p>${a.location} - ${a.level}</p>`).join("");
}

function showZones() {
    const zones = [
        { area: "Zone A", risk: "Red" },
        { area: "Zone B", risk: "Yellow" },
        { area: "Zone C", risk: "Green" }
    ];

    document.getElementById("zones").innerHTML =
        zones.map(z => `<p class="${z.risk.toLowerCase()}">${z.area}: ${z.risk}</p>`).join("");
}

function sendSOS() {
    document.getElementById("sos").innerHTML =
        "<p style='color:red;'>🚨 Emergency alert sent! Help is on the way.</p>";
}