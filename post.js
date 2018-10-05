window.addEventListener( "DOMContentLoaded", function() {
  let form = document.querySelector("form");

  form.addEventListener("submit", function (e){
    e.preventDefault();
    let uname = e.target[0].value,
        psw = e.target[1].value
    let content = {}

    .fetch("http://???"),{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(content);
        }
    ) .then(function(response) {
      if(response ok){
        return response.json();
      } else {
        return Promise.reject({
          status: response.status,
          statusText: response.statusText
        })
      }
    })
    .then(function(response){
      let bigObj = response;
      })
    })
