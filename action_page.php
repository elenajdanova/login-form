<?php

  $uname = htmlspecialchars($_POST['uname']);
  $psw  = htmlspecialchars($_POST['psw']);

  if($uname == "admin" && $psw == "admin") {
    echo  "You have successfully logged in. </br> Your name is ", $uname, " and your password is ", $psw;
  } else {
    die("Error");
  }

?>
