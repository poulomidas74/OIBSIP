function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
    const inputUnit = document.getElementById('inputUnit').value;

    let celsius, fahrenheit, kelvin;

    if (isNaN(inputTemperature)) {
        alert('Please enter a valid number');
        return;
    }

    switch (inputUnit) {
        case 'Celsius':
            celsius = inputTemperature;
            fahrenheit = (inputTemperature * 9/5) + 32;
            kelvin = inputTemperature + 273.15;
            break;
        case 'Fahrenheit':
            celsius = (inputTemperature - 32) * 5/9;
            fahrenheit = inputTemperature;
            kelvin = (inputTemperature - 32) * 5/9 + 273.15;
            break;
        case 'Kelvin':
            celsius = inputTemperature - 273.15;
            fahrenheit = (inputTemperature - 273.15) * 9/5 + 32;
            kelvin = inputTemperature;
            break;
    }

    document.getElementById('outputCelsius').textContent = `Celsius: ${celsius.toFixed(2)}°C`;
    document.getElementById('outputFahrenheit').textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
    document.getElementById('outputKelvin').textContent = `Kelvin: ${kelvin.toFixed(2)}K`;
}
