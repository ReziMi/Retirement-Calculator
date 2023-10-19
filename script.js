function calculate() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    let currentAge = Number(document.getElementById("currentAge").value);
    let retirementAge = Number(document.getElementById("retirementAge").value);

    const outputElem = document.getElementById("output");

    if(currentAge <= 0 || retirementAge <= 0) {
        outputElem.innerHTML = "Please enter valid numbers";
        return;
    }

    if(currentAge >= retirementAge) {
        outputElem.innerHTML = "You can already retire";
    } else {
        outputElem.innerHTML = `You have ${retirementAge - currentAge} years left until you can retire. It is ${currentYear}, so you can retire in ${currentYear + retirementAge - currentAge}`;
    }
}



/*
function calculate{
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    
    const currentAge = Number(prompt("What is your current age? "));
    const retirementAge = Number(prompt("At what age would you like to retire? "));
    
    
    while(currentAge<=0 || retirementAge<=0){
        console.log("Please enter the valid numbers")
        currentAge = Number(prompt("What is your current age? "));
        retirementAge = Number(prompt("At what age would you like to retire? "));
    }
    
    if(currentAge>=retirementAge){
        console.log("You can already retire")
    }else{
        console.log(`You have ${retirementAge - currentAge} years left until you can retire`);
        console.log(`It is ${currentYear}, so you can retire in ${currentYear+retirementAge - currentAge}`)
    }
}
*/
