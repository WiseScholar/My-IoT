document.addEventListener('DOMContentLoaded', (event) => {
    const ledSlider = document.getElementById('ledSlider');
    const ledStatus = document.getElementById('ledStatus');
  
    ledSlider.addEventListener('input', () => {
      if (ledSlider.value == 1) {
        fetch('/LED/on')
          .then(response => response.text())
          .then(data => {
            ledStatus.textContent = "LED is ON";
            ledSlider.classList.add('on');
          });
      } else {
        fetch('/LED/off')
          .then(response => response.text())
          .then(data => {
            ledStatus.textContent = "LED is OFF";
            ledSlider.classList.remove('on');
          });
      }
    });
  
    // Initialize slider state
    fetch('/LED/status')
      .then(response => response.text())
      .then(data => {
        if (data == 'ON') {
          ledSlider.value = 1;
          ledStatus.textContent = "LED is ON";
          ledSlider.classList.add('on');
        } else {
          ledSlider.value = 0;
          ledStatus.textContent = "LED is OFF";
          ledSlider.classList.remove('on');
        }
      });
  });
  