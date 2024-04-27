document.getElementById("btn-d").addEventListener("click",function(){
    const deposit = document.getElementById("deposit");
    const newDepAmount = deposit.value;
    
    //make int
    const makeint = parseFloat(newDepAmount);

    const adddep = document.getElementById("dep-amount");
    const previousDepAmount = adddep.innerText;

    const makeint2 = parseFloat(previousDepAmount)
    
    if(makeint>0){
        adddep.innerText = makeint+makeint2;

        const total = document.getElementById("bla-amount");
        const getTotalStr = total.innerText;
        const makeintTotal = parseFloat(getTotalStr);

        total.innerText = makeint + makeintTotal;
    }
    else{
        alert("input valid amount")
    }
    
    deposit.value='';


})