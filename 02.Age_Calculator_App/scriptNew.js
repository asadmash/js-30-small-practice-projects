let userInput = document.getElementById('date');
let button = document.querySelector('button');
let result = document.querySelector('#result');
userInput.max = new Date().toISOString().split('T')[0];

function calculate(){
    // process user inputed date
    let birthDate = new Date(userInput.value);
    // separate day, month and year
    let bDay = birthDate.getDate();
    let bMonth = birthDate.getMonth()+1;
    let bYear = birthDate.getFullYear();

    // process current day, month and year
    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth()+1;
    let cYear = currentDate.getFullYear();
    


//  get the rought difference first
let ageYears = cYear - bYear;
let ageMonths = cMonth - bMonth;
let ageDays = (cDay - bDay)+1;

// now we have to handle edge cases
//what happen if the ageMonths is minus?
if(ageMonths < 0){
    // we will reduce the ageYears
    ageYears--;
    //we will recalculate the total month with corrent ageMonths
    ageMonths += 12
}

// what happen if the ageDays is minus
if(ageDays < 0){
    //we will reduce the month
    ageMonths--;
    //now because of everymonth dont has equal days
    //we have to recalculate remaining days of prevous month
    ageDays += new Date(cYear, cMonth - 1, 0).getDate();
}

// 1. bday, bmonth, byear can not be gratter than current day month and year

// 2.
    result.innerHTML = `You are ${ageYears} years, ${ageMonths} months, ${ageDays} days old.`
    
}

button.addEventListener('click', calculate);