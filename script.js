function calculatePipValue() {
    const currencyPair = document.getElementById('currencyPair').value.toUpperCase();
    const positionSize = parseFloat(document.getElementById('positionSize').value);
    const exchangeRate = parseFloat(document.getElementById('exchangeRate').value);

    if (isNaN(positionSize) || isNaN(exchangeRate)) {
        alert("Please enter valid numbers for position size and exchange rate.");
        return;
    }

    let pipValue;

    // Determine pip value based on currency pair
    if (currencyPair.endsWith("USD")) {
        pipValue = (0.0001 / exchangeRate) * positionSize * 100000;
    } else if (currencyPair.startsWith("USD")) {
        pipValue = 0.0001 * positionSize * 100000;
    } else {
        alert("Currency pair not supported in this example. Please calculate manually.");
        return;
    }

    document.getElementById('pipValueResult').textContent = `Pip Value: $${pipValue.toFixed(2)}`;
}
