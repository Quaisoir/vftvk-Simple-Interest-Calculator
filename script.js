//Function to compute the interest based on the inputs provided by the user.
function compute()
{

// Retrieve input values from calculator.
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

// Validate the input principal.  If valid, calculate result, if invalid exit.
    if (validateInput(principal))
    {

// Calculate output values based on the inputs
        var interest = principal * years * rate / 100;
        var year = new Date().getFullYear()+parseInt(years);

// Output through change of result text element.
        document.getElementById("result").innerText="If you deposit $" + principal + "\n at an interest rate of " + rate + "%, \n you will receive an amount of $" + interest + "\n in the year " + year + ".";

    }
    else
    {
        alert("Please enter a positive principal amount.");
        document.getElementById("principal").focus()
    }
}

//Function to update the interest rate displayed on the rate input slider.
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}

//Validate the value passed through the function input.
function validateInput(value1)
{
    if(isNaN(value1) || (value1 <= 0))
    {
        return false;
    }
    else
    {
        return true;
    }
}
