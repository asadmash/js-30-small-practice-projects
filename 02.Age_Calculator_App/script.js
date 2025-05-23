let userInput = document.getElementById('date');
let button = document.querySelector('button');
let result = document.querySelector('#result');
// block the selection of future date
userInput.max = new Date().toISOString().split('T')[0];

// function to calculate age

function calculateAge() {
    let birthDate = new Date(userInput.value);
    
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth()+1;
    let y1 = birthDate.getFullYear();
    
    let today = new Date();
     
    let d2 = today.getDate();
    let m2 = today.getMonth()+1;
    let y2 = today.getFullYear();
    
    let d3, m3, y3;
    
    y3 = y2 - y1;
    
    if(m2 >= m1){
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }
    
    if(d2 >= d1){
        d3 = d2 - d1;
    } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if(m3 < 0){
        m3 = 11;
        y3--;
    }
    
    result.innerHTML = `Your age is <span>${y3}</span> years, <span>${m3}</span> months, <span>${d3}</span> days`;
    }

function getDaysInMonth(year, month){
        return new Date(year, month, 0).getDate();
    }
    
button.addEventListener('click', calculateAge);



// New Process ***********************************
let userInput = document.getElementById('date');
let button = document.querySelector('button');
let result = document.querySelector('#result');
// block the selection of future date
userInput.max = new Date().toISOString().split('T')[0];

// function to calculate age
function calculateAge(){
    //get the birthdate from user input
    let birthDate = new Date(userInput.value);

    //day, month and year of birthdate
    let d1, m1, y1;
    d1 = birthDate.getDate();
    m1 = birthDate.getMonth()+1;
    y1 = birthDate.getFullYear();

    // get the current date
    let today = new Date();

    //day, month and year of current date
    let d2, m2, y2;
    d2 = today.getDate();
    m2 = today.getMonth()+1;
    y2 = today.getFullYear();

    // check if the user has entered a valid date
    if(isNaN(d1) || isNaN(m1) || isNaN(y1)){
        result.innerHTML = "Please enter a valid date";
        return;
    }

    // check if the user has entered a future date
    if(birthDate > today){
        result.innerHTML = "Please enter a valid date";
        return;
    }


    // calculate the age
    let ageYears = y2 - y1;
    let ageMonths = m2 - m1;
    let ageDays = d2 - d1;

    // if birth month is greater than current month, reduce age by 1 year
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    // if birth day is greater than current day, reduce month by 1 and calculate days
    if (ageDays < 0) {
        ageMonths--;
        ageDays += getDaysInMonth(y2, m2 - 1);
    }

    result.innerHTML = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}

button.addEventListener('click', calculateAge);