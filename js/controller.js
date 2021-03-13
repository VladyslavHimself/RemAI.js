
// NOTE declare UI elements
const closeBtn = document.querySelector('.close'),
      loginBtn = document.querySelector('.submit--btn'),
      usernameData = document.querySelector('.username input'),
      paswdData = document.querySelector('.paswd input');

// hardCode user info
const User = {
   username: 'root',
   password: 'root',
};


// close programm
closeBtn.addEventListener('click',() => {
  window.close();
});


// NOTE {F} auth
function auth() {
   if (User.username == usernameData.value && User.password == paswdData.value) {
      return true;
   } else {
      return false;
   }
}

// NOTE {F} Change Section
function changeSection(from, to) {
   document.querySelector(from).remove();
   document.querySelector(to).style.display = 'flex';
}

loginBtn.addEventListener('click', () => {

   let isLoggedIn = auth();

   if(!isLoggedIn) {
      // if not logged in
   } else {
      // if logged
      changeSection('.phaseForm', '.dashForm');
   }
});


// switch 

const martengeilForm = document.querySelector('#martengeil'),
      automationForm = document.querySelector('#automation');

martengeilForm.addEventListener('click', () => {
   changeSection('.dashForm', '.martengeilForm');
});


automationForm.addEventListener('click', () => {
   document.querySelector('.dashForm').remove();
   document.querySelector('.wrapper').innerHTML = 'Not realized yet';
   document.querySelector('.wrapper').style.color = '#fff';
});

// calculate by Martengeil


// change result

function showResult(result) {
   document.querySelector('.resultField--number p').textContent = `${--result}`;
}

function doMartengeilCalculation(bux, bet) {
   
   while (bux > minBet) {
   
      bux = bux - (bet * 2);
      bet *= 2;
      counter++;

   }

   return counter;
}

const minBet = 10;

let bux = document.querySelector('#buxInput'),
    bet = document.querySelector('#betInput'),
    btn = document.querySelector('#calculate'),
    resField = document.querySelector('.resultField--number p').textContent,
    counter = 0;


function calculateTries() {
   
   // declare vars
   let buxValue = bux.value,
       betValue = bet.value,
       result;
       
   // while buxes bigger than minimal bet...
   result = doMartengeilCalculation(buxValue, betValue);

   showResult(counter);
}

btn.addEventListener('click', () => {
   calculateTries();
});