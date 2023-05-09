<?php
  session_start();
  include("connect.php");
  include("functions.php");

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    //something was posted
    $phonenumber = $_POST['phonenumber'];
    $password = $_POST['password'];

    if(!empty($phonenumber) && !empty($password))
    {
      //read from database
      $query = "select * from tb_taikhoanhs where phonenumber = '$phonenumber' limit 1";

      $result = mysqli_query($con,$query);

      if ($result)
      {
        if ($result && mysqli_num_rows($result) > 0) {
            $user_data = mysqli_fetch_assoc($result);

            if ($user_data['password'] === $password) {
                $_SESSION['id'] = $user_data['idTK'];
                $_SESSION['name'] = $user_data['name'];
                $_SESSION['diem'] = $user_data['point'];
                $_SESSION['lop'] = $user_data['lop'];
                $_SESSION['sdt'] = $user_data['phonenumber'];
                header("Location: index.html");
                die;
            }
        }
      }
      echo "Nhập sai số điện thoại hoặc mật khẩu!";
    }
    else {
      echo "Vui lòng điền đủ thông tin!";
    }
  }
?>