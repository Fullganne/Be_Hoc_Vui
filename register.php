<?php
session_start();
  include("connect.php");
  include("functions.php");

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    //something was posted
    $name = $_POST['name'];
    $phonenumber = $_POST['phonenumber'];
    $password = $_POST['password'];
    $email = $_POST['email'];

    if(!empty($name) && !empty($phonenumber) && !empty($password) && !empty($email))
    {
      //save to database
      $query = "insert into tb_taikhoanhs (name, phonenumber, password, email) values('$name', '$phonenumber', '$password', '$email')";
      
      mysqli_query($con, $query);
      //redirect to login
      header("Location: login.html");
      die;
    }
    else {
      echo "Vui lòng điền đủ thông tin!";
    }
  }
?>