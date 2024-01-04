const form = document.querySelector("form"),
statusTxt = form.querySelector(".contact__form-span");

form.onsubmit = (e)=>{
    e.preventDefault();
    statusTxt.style.color = "#2e2e2e";
    statusTxt.style.display = "block";
    statusTxt.innerText = "Senden einer Nachricht...";
    form.classList.add("disabled");
  
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "js/message-de.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState == 4 && xhr.status == 200){
        let response = xhr.response;
        if(response.indexOf("Das E-Mail- und Nachrichtenfeld ist erforderlich!") != -1 || response.indexOf("Bitte geben Sie eine gültige E-Mail-Adresse ein!") != -1 || response.indexOf("Deine Nachricht konnte nicht gesendet werden!") != -1){
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
  