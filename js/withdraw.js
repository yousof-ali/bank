document.getElementById("btn-w").addEventListener("click",function(){
    //get user input
    const userinput = document.getElementById("withdraw");
    const userinputText = userinput.value;
    const userinputint = parseFloat(userinputText)

    const totalAmount = document.getElementById("w-total-amount");
    const totalAmountText = totalAmount.innerText;
    const totalAmountInt = parseFloat(totalAmountText)

    const total = document.getElementById("bla-amount");
    const getTotalStr = total.innerText;
    const makeintTotal = parseFloat(getTotalStr);
    
    if(userinputint>0 && userinputint<=makeintTotal){
        totalAmount.innerText = userinputint+totalAmountInt;

        total.innerText = makeintTotal-userinputint;
        
    }
    else{
        alert("enter valid amount!")
    }
    userinput.value = '';

})