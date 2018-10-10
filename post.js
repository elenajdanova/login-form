window.addEventListener( "DOMContentLoaded", function() {
  let form = document.querySelector("form");

  form.addEventListener("submit", function (e){
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    let formData = new FormData(e.target); //gathering user input data

    xhr.open("POST", "action_page.php"); //or e.target.action
    xhr.onload = function (response) {
      let output = response.target.responseText;
      let uname = document.getElementById("uname"),
          psw = document.getElementById("psw"),
          err = document.querySelector('.err'),
          success = document.querySelector('.success');

      if (output != "Error"){
        uname.classList.remove('wrong');
        psw.classList.remove('wrong');
        err.innerHTML = "";
        success.innerHTML = output;
      } else {
        success.innerHTML = "";
        uname.classList.add('wrong');
        psw.classList.add('wrong');
        err.innerHTML = "Wrong username or password!";
      }
    }
    xhr.send(formData); // sending POST request with user input data
  })
})
