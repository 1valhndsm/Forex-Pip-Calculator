function calculatePipValue() {
    const currencyPair = document.getElementById('currencyPair').value.toUpperCase();
    const positionSize = parseFloat(document.getElementById('positionSize').value);
    const exchangeRate = parseFloat(document.getElementById('exchangeRate').value);
    const leverage = parseFloat(document.getElementById('leverage').value);
    
    if (isNaN(positionSize) || isNaN(exchangeRate) || isNaN(leverage)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }
    
    let pipValue;
    let leveragedValue;

    // Determine pip value based on currency pair
    if (currencyPair.endsWith("USD")) {
        pipValue = (0.0001 / exchangeRate) * positionSize * 100000;
    } else if (currencyPair.startsWith("USD")) {
        pipValue = 0.0001 * positionSize * 100000;
    } else {
        alert("Currency pair not supported in this example. Please calculate manually.");
        return;
    }

    // Calculate the leveraged value
    leveragedValue = pipValue * leverage;

    document.getElementById('pipValueResult').innerHTML = `
        <p>Pip Value: $${pipValue.toFixed(2)}</p>
        <p>Leveraged Pip Value: $${leveragedValue.toFixed(2)} (with 1:${leverage} leverage)</p>
    `;
}
