window.onload = function () {
    let button = document.getElementById('calculateButton');
    let celsius = document.getElementById('convertedValue');

    button.addEventListener("click", function () {
        let value = document.getElementById('value').value;
        console.log(value);
        if (isNaN(value)) {
            alert("Please insert a numeric value!");
            return false;
        } else {
            let c = ((parseFloat(value) - 32) * 5) / 9;
            c = parseFloat(c.toFixed(2));
            celsius.innerHTML = c.toString() + " Celsius";
        }
    });
}



