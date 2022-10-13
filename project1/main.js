function calculateTip() {
    try{
        let number = parseInt(document.getElementById("amount").value);
        console.log(number);
        let total = number + 0.1*number;
        document.querySelector('.tip').style.display = 'block';
        if(isNaN(total)){
            alert("Insert a number!");
            return;
        }
        document.querySelector('#total').innerHTML = total;
    }catch (e) {
        console.log("Not a number." + e);
    }

}