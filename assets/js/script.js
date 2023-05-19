var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('subject-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');



function validateName()
{
   var name = document.getElementById("contact-name").value;

   if(name.length == 0)

   {
      nameError.innerHTML = 'Name is required';
      return false;
   }

   if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))
   {
    nameError.innerHTML = 'Write Full name';
      return false;
   }
   nameError.innerHTML = 'valid';
   return true;

}


function  validateEmail()
{
   var email = document.getElementById('contact-email').value;

   if(email.length == 0)
   {
      emailError.innerHTML = 'Email is required';
      return false;
   }
   
    regxmail = /^([A-Za-z 0-9])+@([a-z])+(.com)?(.in)?$/;

   if(regxmail.test(email)){

      emailError.innerHTML= 'valid';
      return true;

   }

   emailError.innerHTML = 'invalid';
   return false;


}