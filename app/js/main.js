// Configs and Variables
var signinForm = document.getElementById("signin");

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
  alert(username);
}

// Handlers
// on page load cehck login status
window.onload = function(){
  // console.log("click");
  checkLogin();

  // add event listeners if the object is present
  if (signinForm) {
    if (signinForm.addEventListener){
      // console.log("this loaded");
      signinForm.addEventListener("submit", storeLogin, false); // modern browser support
    } else if (signinForm.attachEvent){
      // console.log("that loaded");
      signinForm.attachEvent('onsubmit', storeLogin); // Old broswer support
    }
  }

}
