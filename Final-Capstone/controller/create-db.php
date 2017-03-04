<?php

   require_once(__DIR__ . "/../model/database.php");

   $connection = new mysqli($username, $password, $host, $name, $email, $comments);

   if($connection->connect_error) {
    die("Error: " . $connection->connect_error);
   }
    else {
      echo "Success: " . $connection->host_info;
    }

    $connection->close();
