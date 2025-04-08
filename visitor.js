window.addEventListener("DOMContentLoaded", () => {
    const statsBox = document.getElementById("conkyPanel");
  
    let visitorData = {
      ip: "--",
      city: "--",
      country: "--",
      lat: "--",
      lon: "--"
    };
  
    function updateTimeAndRender() {
      const timestamp = new Date().toLocaleString();
      const { ip, city, country, lat, lon, ua } = visitorData;
  
      const html = `
        <div><strong>Time:</strong> ${timestamp}</div>
        <div><strong>IP:</strong> ${ip}</div>
        <div><strong>Location:</strong> ${city}, ${country}</div>
        <div><strong>Coords:</strong> ${lat}, ${lon}</div>
      `;
      statsBox.innerHTML = html;
    }
  
    // Fetch once and store visitor data
    fetch("https://get.geojs.io/v1/ip/geo.json")
      .then(res => res.json())
      .then(data => {
        visitorData.ip = data.ip;
        visitorData.city = data.city;
        visitorData.country = data.country;
        visitorData.lat = data.latitude;
        visitorData.lon = data.longitude;
      })
      .catch(err => {
        statsBox.innerHTML = `<div style="color: red;">Failed to fetch visitor data.</div>`;
        console.error("Error fetching visitor info:", err);
      });
  
    // Update time every second
    setInterval(updateTimeAndRender, 1000);
  });
  