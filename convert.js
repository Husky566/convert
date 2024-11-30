// Currency Converter
function convertCurrency() {
    const exchangeRateTHBtoUSD = 0.03; // 1 THB = 0.03 USD
    const exchangeRateUSDtoTHB = 33.0; // 1 USD = 33 THB

    let amount = document.getElementById('amount').value;
    let conversionType = document.getElementById('conversionType').value;

    if (!amount || amount <= 0) {
        document.getElementById('conversionResult').textContent = "Please enter a valid amount.";
        return;
    }

    let result = 0;
    if (conversionType === "THBtoUSD") {
        result = amount * exchangeRateTHBtoUSD;
        document.getElementById('conversionResult').textContent = `${amount} THB = ${result.toFixed(2)} USD`;
    } else if (conversionType === "USDtoTHB") {
        result = amount * exchangeRateUSDtoTHB;
        document.getElementById('conversionResult').textContent = `${amount} USD = ${result.toFixed(2)} THB`;
    }
}

// Time Converter
function convertTime() {
    const utcOffset = parseInt(document.getElementById('utcOffset').value);
    const baseUtcOffset = 7; // UTC+7 is the base time zone

    const now = new Date();
    const baseTime = now.getTime() + ((now.getTimezoneOffset() + baseUtcOffset * 60) * 60000);
    const targetTime = new Date(baseTime + ((utcOffset - baseUtcOffset) * 3600000));

    const region = document.getElementById('utcOffset').selectedOptions[0].text;
    const formattedTime = targetTime.toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    document.getElementById('timeResult').innerHTML = `
    <span style="color: black;"> ${region}</span><br>
    <span style="color: red;"> ${formattedTime}</span>`;
}

setInterval(convertTime, 1000);
window.onload = convertTime;

// Unit Converter
function convertUnit() {
    const unitRates = {
        KMtoMiles: 0.621371,
        MilestoKM: 1.60934,
        MtoKM: 0.001,
        KMtoM: 1000,
        MtoCM: 100,
        CMtoM: 0.01,
        MtoMM: 1000,
        MMtoM: 0.001,
        MMtoCM: 0.1,
        CMtoMM: 10,
        KMtoCM: 100000,
        CMtoKM: 0.00001,
        KMtoMM: 1000000,
        MMtoKM: 0.000001
    };

    const unitMap = {
        KMtoMiles: ["กิโลเมตร", "ไมล์"], 
        MilestoKM: ["ไมล์", "กิโลเมตร"],
        MtoKM: ["เมตร", "กิโลเมตร"], 
        KMtoM: ["กิโลเมตร", "เมตร"],
        MtoCM: ["เมตร", "เซนติเมตร"], 
        CMtoM: ["เซนติเมตร", "เมตร"],
        MtoMM: ["เมตร", "มิลลิเมตร"], 
        MMtoM: ["มิลลิเมตร", "เมตร"],
        MMtoCM: ["มิลลิเมตร", "เซนติเมตร"], 
        CMtoMM: ["เซนติเมตร", "มิลลิเมตร"],
        KMtoCM: ["กิโลเมตร", "เซนติเมตร"], 
        CMtoKM: ["เซนติเมตร", "กิโลเมตร"],
        KMtoMM: ["กิโลเมตร", "มิลลิเมตร"], 
        MMtoKM: ["มิลลิเมตร", "กิโลเมตร"]
    };

    let unitAmount = document.getElementById('unitAmount').value;
    let unitConversionType = document.getElementById('unitConversionType').value;

    let result = unitAmount * unitRates[unitConversionType];
    let fromUnit = unitMap[unitConversionType][0];
    let toUnit = unitMap[unitConversionType][1];

    document.getElementById('unitConversionResult').textContent =
        `${unitAmount} ${fromUnit} = ${parseFloat(result).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 10 })} ${toUnit}`;
}
