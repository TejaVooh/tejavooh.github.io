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
