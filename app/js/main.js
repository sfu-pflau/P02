// Configs and Variables
var signinForm = document.getElementById("signin");
var logoutBtn = document.getElementById("logout");

// functions

function checkLogin(){
  // console.log("checking login");
  if (sessionStorage.getItem('username') == null){
    // leave as is
    // console.log("no login");
  } else {
    // console.log("a login");
    var username = sessionStorage.getItem('username');
    // Change all elements with the query
    // console.log("trying to place: hi, " + username);
    if (document.getElementById("login")){
      document.getElementById("login").innerHTML = "hi, " + username;
      document.getElementById("login").href = "my_account.html";
    }
  }
}

function storeLogin(){
  // console.log("store");
  var username = document.getElementById("accountname").value;
  sessionStorage.setItem('username', username);
  // alert(username);
}

function logout(){
  // remove the sessionStorage username;
  sessionStorage.clear();
  // redirect as if a link click
  window.location.href = "signin.html";
}


function windowLoad(){
  // console.log("click");

  // on DOM load check login status
  checkLogin();

  // add event listeners if the element is present on this page
  if (signinForm) {
    if (signinForm.addEventListener){
      // console.log("this loaded");
      signinForm.addEventListener("submit", storeLogin, false); // modern browser support
    } else if (signinForm.attachEvent){
      // console.log("that loaded");
      signinForm.attachEvent('onsubmit', storeLogin); // Old broswer support
    }
  }

  if (logoutBtn) {
    if (logoutBtn.addEventListener){
      // console.log("this loaded");
      logoutBtn.addEventListener("click", logout, false); // modern browser support
    } else if (logoutBtn.attachEvent){
      // console.log("that loaded");
      logoutBtn.attachEvent('click', logout); // Old broswer support
    }
  }
}

// Handlers
// This checks on DOM content load so that it happens after all the content is loaded into memeory but before the window loads all the content
document.addEventListener('DOMContentLoaded', windowLoad);
