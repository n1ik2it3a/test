//validation code for inputs

var username = document.forms['form']['username'];
var password = document.forms['form']['password'];

var username_error = document.getElementById('username_error');
var pass_error = document.getElementById('pass_error');
username.addEventListener('textInput',username-verify);
password.addEventListener('textInput',pass-verify);


function validation(){
	 if(username.value.length<9){
		  username.style.border="1px solid red";
		  username_error.style.display="block";
		  username.focus();
		  return false;
	 }
	  if(password.value.length<6){
		  password.style.border="1px solid red";
		  pass_error.style.display="block";
		  password.focus();
		  return false;
	 }
}
function username-verify(){
	 if(username.value.length<8){
		  username.style.border="1px solid red";
		  username_error.style.display="none";
		 
		  return true;
	 }
}
function pass-verify(){
	  if(password.value.length<6){
		  password.style.border="1px solid red";
		  pass_error.style.display="none";
		  
		  return true;
	 }
}
