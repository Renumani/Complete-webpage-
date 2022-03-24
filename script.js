function fnValidate () {
  fnUserName ();
  fnEmail ();
  fnPassword ();
  fnCpassword ();
}
function fnLogin () {
  let useEmail = document.getElementById ('useemail').value;
  let lPassword = document.getElementById ('password').value;
  let logValue1 = localStorage.getItem ('UserName');
  let logValue2 = localStorage.getItem ('Email-Id');
  let sPassword = localStorage.getItem ('Password');
  if(useEmail && lPassword) {
    if ((useEmail.value === logValue1 || useEmail.value === logValue2) && (lPassword.value === sPassword)){
      alert(`hello ${useEmail}`);
    } else {
      alert ('Username or password is not valid!');
    }
  } else {
    alert("Kindly enter username/password!");
  }
}
function fnShowPassword(){
  var toggle = document.getElementById("password");
  if(toggle.type=="password"){
    toggle.type="text";
  }else{
    toggle.type="password";
  }
}
function fnRpassword(){
let click = document.getElementById("pwd");
  if(click.type=="password"){
    click.type="text";
  }else{
    click.type="password";
  }
}
function fnRcpassword(){
  let click = document.getElementById("cpwd");
  if(click.type=="password"){
    click.type="text";
  }else{
    click.type="password";
  }
}
function fnUserName () {
  let userName = document.getElementById ('uname');
  if (userName.value === '') {
    document.getElementsByTagName ('span')[0].style.display = 'block';
    document.getElementsByTagName ('span')[0].style.color = 'red';
    document.getElementById ('uname').style.borderColor = 'red';
    document.getElementsByTagName ('span')[0].innerText =
      '# Please Enter UserName';
  } else if (userName.length <= 4) {
    document.getElementsByTagName ('span')[0].style.display = 'block';
    document.getElementsByTagName ('span')[0].style.color = 'red';
    document.getElementById ('uname').style.borderColor = 'red';
    document.getElementsByTagName ('span')[0].innerText =
      'UserName should not less than 4 characters ';
  } else {
    document.getElementById ('uname').style.borderColor = 'green';
    document.getElementsByTagName ('span')[0].style.display = 'none';
    localStorage.setItem ('UserName', userName.value);
  }
}
function fnEmail () {
  let email = document.getElementById ('email');
  let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value === '') {
    document.getElementsByTagName ('span')[1].style.display = 'block';
    document.getElementsByTagName ('span')[1].style.color = 'red';
    document.getElementById ('email').style.borderColor = 'red';
    document.getElementsByTagName ('span')[1].innerText =
      '#Please Enter Email-Id';
  } else if (!regExp.test (email.value)) {
    document.getElementsByTagName ('span')[1].style.display = 'block';
    document.getElementsByTagName ('span')[1].style.color = 'red';
    document.getElementById ('email').style.borderColor = 'red';
    document.getElementsByTagName ('span')[1].innerText = '# Invalid Email-Id ';
  } else {
    document.getElementById ('email').style.borderColor = 'green';
    document.getElementsByTagName ('span')[1].style.display = 'none';
    localStorage.setItem ('Email-Id', email.value);
  }
}
function fnPassword () {
  let password = document.getElementById ('pwd');
  let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (password.value === '') {
    document.getElementsByTagName ('span')[2].style.display = 'block';
    document.getElementsByTagName ('span')[2].style.color = 'red';
    document.getElementById ('pwd').style.borderColor = 'red';
    document.getElementsByTagName ('span')[2].innerText =
      '#Please Enter password ';
  } else if (!passw.test (password.value)) {
    document.getElementsByTagName ('span')[2].style.display = 'block';
    document.getElementsByTagName ('span')[2].style.color = 'red';
    document.getElementById ('pwd').style.borderColor = 'red';
    document.getElementsByTagName ('span')[2].innerText =
      '#Password should have atleast one uppercase,one lowercase and one number';
  } else {
    document.getElementById ('pwd').style.borderColor = 'green';
    document.getElementsByTagName ('span')[2].style.display = 'none';
    localStorage.setItem ('Password', password.value);
  }
}
function fnCpassword () {
  let cPassword = document.getElementById ('cpwd');
  if (cPassword.value === '') {
    document.getElementsByTagName ('span')[3].style.display = 'block';
    document.getElementsByTagName ('span')[3].style.color = 'red';
    document.getElementById ('cpwd').style.borderColor = 'red';
    document.getElementsByTagName ('span')[3].innerText =
      '#Please Enter Confirm password ';
  } else if (password.value !== cPassword.value) {
    document.getElementsByTagName ('span')[3].style.display = 'block';
    document.getElementsByTagName ('span')[3].style.color = 'red';
    document.getElementById ('cpwd').style.borderColor = 'red';
    document.getElementsByTagName ('span')[3].innerText =
      '#Confirm password should match Password';
  } else {
    document.getElementById ('cpwd').style.borderColor = 'green';
    document.getElementsByTagName ('span')[3].style.display = 'none';           
  }

}
