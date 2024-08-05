function toggleLED(state) {
    fetch('http://192.168.77.68/LED/' + state) // Update with your ESP8266's IP address
        .then(response => response.text())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
