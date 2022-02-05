/* Function that validates the principle value, alerts if and computes and returns the result*/
function compute()
{
    var principal = document.getElementById("principal").value;

    /* Validation if principle is less than or equal to 0, alerts the user if so, and sets the cursor to the input field */
    if (principal <= 0) 
    {
        window.alert("Please enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML = 'If you deposit <span class="highlight">' + principal + '</span>, <br>at an interest rate of <span class="highlight">' + rate + '%.</span><br>You will receive an amount of <span class="highlight">' + interest + '</span>, <br>in the year <span class="highlight">' + year + '</span><br>';
}
        
/* Function that shows the values when the slider changes */
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;

}