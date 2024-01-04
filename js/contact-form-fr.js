const form = document.querySelector("form"),
statusTxt = form.querySelector(".contact__form-span");

form.onsubmit = (e)=>{
    e.preventDefault();
    statusTxt.style.color = "#2e2e2e";
    statusTxt.style.display = "block";
    statusTxt.innerText = "envoyer un message...";
    form.classList.add("disabled");
  
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "js/message-fr.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState == 4 && xhr.status == 200){
        let response = xhr.response;
        if(response.indexOf("Le champ e-mail et message est obligatoire!") != -1 || response.indexOf("S'il vous plaît, mettez une adresse email valide!") != -1 || response.indexOf("votre message n'a pas pu être envoyé!") != -1){
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
  