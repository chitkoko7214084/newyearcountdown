function startCountdown(targetDate, elementId) {
    const countdownElement = document.getElementById(elementId);
  
    const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      countdownElement.innerHTML = `${days} DAYS | ${hours} HOURS | ${minutes} MINUTES | ${seconds} SECONDS`;
  
      if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = 'EXPIRED';
      }
    }, 1000);
  }
  
  // Set the target date for New Year's Eve (December 31st of the current year at 23:59:59)
  const targetDate = new Date(new Date().getFullYear(), 11, 31, 23, 59, 59).getTime();
  startCountdown(targetDate, 'countdown'); // 'countdown' is the elementId where the countdown will be displayed
  
  window.onload = function() {
    var shadowRoot = document.querySelector('spline-viewer').shadowRoot;
    shadowRoot.querySelector('#logo').remove();
}
  