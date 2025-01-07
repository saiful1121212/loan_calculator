document.getElementById("form_loan").addEventListener("submit",function(e){

    document.querySelector(".result").style.display = "none";
    document.querySelector("#loading").style.display = "block";

    setTimeout(calculatedFunction,2000);
    e.preventDefault();
});

function calculatedFunction(){
    const amount = document.getElementById("amount");
    const Interest = document.getElementById("Interest");
    const years = document.getElementById("years");
    const monthly_payment = document.getElementById("monthly_payment");
    const total_payment = document.getElementById("total_payment");
    const total_interest = document.getElementById("total_interest");

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(Interest.value)/100/12;
    const calculatedpayments = parseFloat(years.value)*12;


    const x = Math.pow(1 + calculatedInterest , calculatedpayments);
    const monthly = (principal*x*calculatedInterest)/ (x-1);

    if(isFinite(monthly)){
        monthly_payment.value = monthly.toFixed(5);
        total_payment.value = (monthly * calculatedpayments).toFixed (5);
       
        total_interest.value = ((monthly*calculatedpayments)-principal).toFixed(5);
        document.querySelector(".result").style.display = "block";
        document.querySelector("#loading").style.display = "none"; 
        
        
    }else{
    //    showError("You cannot leave the fields empty");
        const error = "You cannot leave the fields empty"
        const errorDiv = document.createElement('p');
        // Get elements
        const card = document. querySelector('.card-body');
        const heading = document. querySelector('.card-title');
        // Add class
        errorDiv.classList = 'alert alert-danger';
        // Create text node and append to div
        errorDiv.appendChild(document.createTextNode(error));
        // Insert error above heading
        card.insertBefore(errorDiv, heading);
        // setTimeout(clearErr, 3000);
        console.log(errorDiv);
        setTimeout(function clearErr(){
            document.querySelector(".alert").remove();
        },3000);
        document.querySelector(".result").style.display = "none";
        document.querySelector("#loading").style.display = "none"; 
    }
    console.log(calculatedpayments);

}

// function showError(error){
//     const errorDiv = document.createElement('p');
//     // Get elements
//     const card = document. querySelector('.card-body');
//     const heading = document. querySelector('.card-title');
//     // Add class
//     errorDiv.classList = 'alert alert-danger';
//     // Create text node and append to div
//     errorDiv.appendChild(document.createTextNode(error));
//     // Insert error above heading
//     card.insertBefore(errorDiv, heading);
//     // setTimeout(clearErr, 3000);
//     console.log(errorDiv);
//     setTimeout(function clearErr(){
//         document.querySelector(".alert").remove();
//     },3000);
// }

// function clearErr(){
//     document.querySelector(".alert").remove();
// }