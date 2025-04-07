window.addEventListener("DOMContentLoaded", () => {
    const statsBox = document.getElementById("conkyPanel");  // Updated to match the HTML element ID

    // Using GeoJS API (no API key required)
    fetch("https://get.geojs.io/v1/ip/geo.json")
      .then(res => res.json())
      .then(data => {
        const ip = data.ip;
        const city = data.city;
        const country = data.country;
        const lat = data.latitude;
        const lon = data.longitude;
        const ua = navigator.userAgent;
        const timestamp = new Date().toLocaleString();

        const html = `
          <div><strong>Time:</strong> ${timestamp}</div>
          <div><strong>IP:</strong> ${ip}</div>
          <div><strong>Location:</strong> ${city}, ${country}</div>
          <div><strong>Coords:</strong> ${lat}, ${lon}</div>
          <div><strong>User Agent:</strong><br><code style="font-size: 0.8em;">${ua}</code></div>
        `;
        statsBox.innerHTML = html;  // Populate statsBox with visitor data
      })
      .catch(err => {
        statsBox.innerHTML = `<div style="color: red;">Failed to fetch visitor data.</div>`;
        console.error("Error fetching visitor info:", err);
      });
});
