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


