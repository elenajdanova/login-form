window.addEventListener( "DOMContentLoaded", function() {
  let form = document.querySelector("form");

  function TalkingForms() {
    let arrayOfInputs = [];
    let err = document.querySelector('.err'),
        success = document.querySelector('.success');


     this.getTextInputs = function(){
       let inputs = document.getElementsByTagName('input');

       inputs = Array.from(inputs); //convert HTML Collection to array
       arrayOfInputs = inputs.filter(function(i){
         return i.type != "checkbox"
       });
     }

     this.showSuccessMessage = function(output){
       let goodMessage = arrayOfInputs.map(function(i) {
         i.classList.remove('wrong');
         err.innerHTML = "";
         success.innerHTML = output;
       })
     }

     this.showErrorMessage = function(){
       let badMessage = arrayOfInputs.map(function(i) {
         success.innerHTML = "";
         i.classList.add('wrong');
         err.innerHTML = "Wrong username or password!";
       })
     }

     this.blockForm = function(){
       let fieldset = document.querySelector('fieldset');
        fieldset.disabled = true;
     }

     this.unblockForm = function(){
       let fieldset = document.querySelector('fieldset');
        fieldset.disabled = false;
     }
  }

let tForms = new TalkingForms();

  form.addEventListener("submit", function (e){
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    let formData = new FormData(e.target); //gathering user input data

    xhr.open("POST", "action_page.php"); //or e.target.action
    xhr.onload = function (response) {
      let output = response.target.responseText;

      tForms.getTextInputs();
      tForms.blockForm();
        if (output != "Error"){
          tForms.showSuccessMessage(output);
        } else {
          tForms.showErrorMessage();
        }
      tForms.unblockForm();
    }
    xhr.send(formData); // sending POST request with user input data
  })
})
