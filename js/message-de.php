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
         echo "Ihre Nachricht wurde gesendet";
      }else{
         echo "Deine Nachricht konnte nicht gesendet werden!";
      }
    }else{
      echo "Bitte geben Sie eine gültige E-Mail-Adresse ein!";
    }
  }else{
    echo "Das E-Mail- und Nachrichtenfeld ist erforderlich!";
  }
?>
