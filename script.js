const form = document.getElementById('userDetails');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');

const greeting = document.getElementById('greeting');
const ageMessage = document.getElementById('ageMessage');
const ageInMonths = document.getElementById('ageInMonths');
const ageInDays = document.getElementById('ageInDays');
const quote = document.getElementById('quote');


// Function to calculate age in months and days
function calculateAgeInMonthsAndDays(age) {
    const months = age * 12;
    const days = age * 365;

    return {
        months: months,
        days: days
    };
}


// When the form is submitted
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const age = parseInt(ageInput.value);


    // Save user's information in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('age', age);


    // Display personalized greeting
    greeting.textContent = `Hello, ${name}! Welcome to your personalized webpage.`;


    // Check user's age
    if (age >= 18) {
        ageMessage.textContent = "You can access adult content.";
    } else {
        ageMessage.textContent = "You are too young for adult content.";
    }


    // Calculate age in months and days
    const result = calculateAgeInMonthsAndDays(age);

    ageInMonths.textContent = `Your age in months is: ${result.months}`;

    ageInDays.textContent = `Your age in days is: ${result.days}`;


    // Display motivational quote five times using a loop
    quote.innerHTML = "";

    for (let i = 1; i <= 5; i++) {
        quote.innerHTML += "<p>Believe in yourself and keep going!</p>";
    }
})
//arrow functions
let multiplication = () =>{

}

greetings(registration())

function greetings(name="Guest"){
    console.log(`welcome to the Stag ${name}`)
    console.log("We are happy to meet you", name, "Stay for as long as you want")
}
greetings("Mary")
greetings()