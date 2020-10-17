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
      // if not logged
   } else {
      // if logged
   }
});


