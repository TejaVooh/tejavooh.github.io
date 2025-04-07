fetch('https://ipapi.co/json')
  .then(res => res.json())
  .then(data => {
    fetch('https://tejanshu.com/logger/visitor_log.php', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        ip: data.ip,
        city: data.city,
        country: data.country_name,
        latitude: data.latitude,
        longitude: data.longitude,
        userAgent: navigator.userAgent
      })
    });
  })
  .catch(err => console.error("Visitor log failed:", err));

  function updateConkyStats() {
    fetch('https://tejanshu.com/logger/read_logs.php')
      .then(res => res.json())
      .then(logs => {
        const panel = document.getElementById('conkyStats');
        panel.innerHTML = logs.slice(0, 10).map(log =>
          `${log.timestamp}\n${log.city}, ${log.country}\nIP: ${log.ip}\n`
        ).join('\n----------------------\n');
      })
      .catch(err => console.error("Conky panel fetch failed:", err));
  }
  
  // Update every 10 seconds
  setInterval(updateConkyStats, 10000);
  updateConkyStats(); // initial load
  
  