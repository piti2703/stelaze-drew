const form = document.querySelector("form"),
statusTxt = form.querySelector(".contact__form-span");

form.onsubmit = (e)=>{
    e.preventDefault();
    statusTxt.style.color = "#2e2e2e";
    statusTxt.style.display = "block";
    statusTxt.innerText = "Wysyłanie wiadomości...";
    form.classList.add("disabled");
  
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "js/message-pl.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState == 4 && xhr.status == 200){
        let response = xhr.response;
        if(response.indexOf("Pole e-mail i wiadomość jest wymagane!") != -1 || response.indexOf("Wpisz poprawny adres e-mail!") != -1 || response.indexOf("Nie udało się wysłać Twojej wiadomości!") != -1){
          statusTxt.style.color = "red";
        }else{
          form.reset();
          setTimeout(()=>{
            statusTxt.style.display = "none";
          }, 3000);
        }
        statusTxt.innerText = response;
        form.classList.remove("disabled");
      }
    }
    let formData = new FormData(form);
    xhr.send(formData);
  }
  