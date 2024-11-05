function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12 || 12; // Convert to 12-hour format and handle midnight
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    document.getElementById('time').innerText = formattedTime;
    document.getElementById('ampm').innerText = ampm;
  }
  
  setInterval(updateTime, 1000);
  updateTime(); // Initial call to display time immediately
  