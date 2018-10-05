<?php

  $uname = htmlspecialchars($_POST['uname']);
  $psw  = htmlspecialchars($_POST['psw']);

  if($uname == "admin" && $psw == "admin") {
    echo  "Your name is", $uname, ' and your password is', $psw, "so come in!";
  } else {
    die("Error");
  }


?>
