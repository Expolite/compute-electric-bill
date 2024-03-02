
function computeElectricBill() {

    var txtBx_watt = parseFloat(document.getElementById("txtbox_watt").value);
    var txtBx_hour = parseFloat(document.getElementById("txtbox_hour").value);
    var txtBx_powerRate = parseFloat(document.getElementById("txtbox_powerRate").value);

    var errorFound = "";

    var style_watt = document.getElementById("txtbox_watt");
    var style_hr = document.getElementById("txtbox_hour");
    var style_rate = document.getElementById("txtbox_powerRate");

    // Send border warning color for invalid input
    if (!txtBx_watt) {
        txtbox_watt.style.border = "2px solid red";
        txtbox_watt.style.outline = "2px solid red";
        errorFound = 1;
    } else {
        txtbox_watt.style.border = "";
        txtbox_watt.style.outline = "";
    }

    if (!txtBx_hour) {
        txtbox_hour.style.border = "2px solid red";
        txtbox_hour.style.outline = "2px solid red";
        errorFound = 1;
    } else {
        txtbox_hour.style.border = "";
        txtbox_hour.style.outline = "";
    }

    if (!txtBx_powerRate) {
        txtbox_powerRate.style.border = "2px solid red";
        txtbox_powerRate.style.outline = "2px solid red";
        errorFound = 1;
    } else {
        txtbox_powerRate.style.border = "";
        txtbox_powerRate.style.outline = "";
    }


    // Continue if there's no error
    if (errorFound == 1) {
        alert("Invalid input");
    } else {
        var billResult = computeTheBill(txtBx_watt, txtBx_hour, txtBx_powerRate);

        document.getElementById("txtbox_result").value = billResult;
    }
}


function computeTheBill(watt, hour, powerRate) {
    return (watt / 1000) * (30 * hour) * powerRate;
}




// Press Enter to Compute
document.addEventListener('DOMContentLoaded', function() {
    // Function to click the button
    function clickButton() {
        document.getElementById('myButton').click();
    }

    // Event listener for Enter key press
    document.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            clickButton();
        }
    });
});