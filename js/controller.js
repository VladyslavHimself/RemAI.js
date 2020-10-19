const closeBtn = document.querySelector('.close'),
      loginBtn = document.querySelector('.submit--btn'),
      usernameData = document.querySelector('.username input'),
      paswdData = document.querySelector('.paswd input');

const User = {
   username: 'root',
   password: 'root',

};


// close programm
closeBtn.addEventListener('click',() => {
  window.close();
});

function auth() {
   if (User.username == usernameData.value && User.password == paswdData.value) {
      return true;
   } else {
      return false;
   }
}


loginBtn.addEventListener('click', () => {

   let isLoggedIn = auth();

   if(!isLoggedIn) {
      // if not logged in
   } else {
      // if logged
         document.querySelector('.phaseForm').remove();
         document.querySelector('.dashForm').style.display = 'flex';
   }
});


// switch 

const martengeilForm = document.querySelector('#martengeil'),
      automationForm = document.querySelector('#automation');

martengeilForm.addEventListener('click', () => {
   document.querySelector('.dashForm').remove();
   document.querySelector('.martengeilForm').style.display = 'flex';
});

automationForm.addEventListener('click', () => {
   document.querySelector('.dashForm').remove();
   document.querySelector('.wrapper').innerHTML = 'Not realized yet';
   document.querySelector('.wrapper').style.color = '#fff';
});

// calculate by Martengeil

const minBet = 10;

let bux = document.querySelector('#buxInput'),
    bet = document.querySelector('#betInput'),
    btn = document.querySelector('#calculate'),
    resField = document.querySelector('.resultField--number p').textContent,
    counter = 0;


function calculateTries() {
   let buxValue = bux.value,
       betValue = bet.value;
       

   while (buxValue > minBet) {
   
      buxValue = buxValue - (betValue * 2);
      betValue *= 2;

      counter++;

   }
   console.log(counter);
   document.querySelector('.resultField--number p').textContent = `${counter}`;

}

btn.addEventListener('click', () => {
   calculateTries();
});