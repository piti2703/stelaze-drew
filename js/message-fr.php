<?php
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $phone = htmlspecialchars($_POST['phone']);
  $message = htmlspecialchars($_POST['message']);

  if(!empty($email) && !empty($message)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
      $receiver = "contact@schantal.eu"; //enter that email address where you want to receive all messages
      $subject = "Od: $name <$email>";
      $body = "Imię i nazwisko: $name\nEmail: $email\nNr telefonu: $phone\n\nWiadomość:\n$message\n\nPozdrawiam,\n$name";
      $sender = "Od: $email";
      if(mail($receiver, $subject, $body, $sender)){
         echo "Votre message a été envoyé";
      }else{
         echo "votre message n'a pas pu être envoyé!";
      }
    }else{
      echo "S'il vous plaît, mettez une adresse email valide!";
    }
  }else{
    echo "Le champ e-mail et message est obligatoire!";
  }
?>
