<?php
  session_start();
  include("connect.php");
  include("user.php");

  if((isset($_POST['dangnhap']))&&($_POST['dangnhap'])) 
  {
    $phonenumber = $_POST['phonenumber'];
    $pass = $_POST['password'];
    $id = checkUser($phonenumber, $pass);
    $_SESSION['id'] = $id;
    if($id==0) header('location: admin.php');
    else {
      $txt_error = "Nhập sai số điện thoại hoặc mật khẩu!";
    } header('location: login.php'); 
  }
  // if($_SERVER['REQUEST_METHOD'] == "POST"){
  //   //something was posted
  //   $phonenumber = $_POST['phonenumber'];
  //   $password = $_POST['password'];

  //   if(!empty($phonenumber) && !empty($password))
  //   {
  //     //read from database
  //     $query = "select * from tb_taikhoanhs where phonenumber = '$phonenumber' limit 1";

  //     $result = mysqli_query($con,$query);

  //     if ($result)
  //     {
  //       if ($result && mysqli_num_rows($result) > 0) {
  //           $user_data = mysqli_fetch_assoc($result);

  //           if ($user_data['password'] === $password) {
  //               $_SESSION['id'] = $user_data['id'];
  //               $_SESSION['phonenumber'] = $user_data['phonenumber'];
  //               $_SESSION['password'] = $user_data['phonenumber'];
  //               header("Location: index.php");
  //               die;
  //           }
  //       }
  //     }
  //     echo "Nhập sai số điện thoại hoặc mật khẩu!";
  //   }
  //   else {
  //     echo "Vui lòng điền đủ thông tin!";
  //   }
  // }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bé học vui</title>


    <!-- SELF RESOURCE -->
    <link rel="icon" type="img/png" href="./assets/favicon.png">
    <link rel="stylesheet" href="./css/style.css">


    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <!-- Popper JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body class="body-login">
    <div style="width: 50%;">
        <a href="index.php"><img src="./assets/logo-removebg.png" alt="Logo" class="img logo_image"></a>
    </div>
    <div class="container-register" style="width: 50%;">
        <div class="label-register">
            <form action="<?php echo $_SERVER['PHP_SELF'];?>" autocomplete="on" method="POST">
                <li><label for="phonenumber" class="col-25">Số điện thoại:</label><input type="tel" id="pnumber" name="phonenumber" placeholder="1234567890" pattern="[0-9]{10}" class="input-form-register col-75"><br></li>
                <li><label for="pass" class="col-25">Mật khẩu:</label><input type="password" id="login_pw" name="password" class="input-form-register col-75"><i class="fa-solid toggle-password fa-eye-slash" id="togglePassword"></i><br></li>
                <li class="alert"><ul class="col-25"></ul><ul class="col-75"><i class="fas fa-exclamation-circle error"></i><p class="text"><?php
                  if(isset($txt_error)&&$txt_error!="")
                  {
                    echo $txt_error;
                  }
                ?></p></ul></li>
                <li><a href="index.php?act=register" class="col-75" style="float: right; text-align: right; color: black !important;">Chưa có tài khoản?</a></li>
                <input type="submit" name="dangnhap" value="ĐĂNG NHẬP" class="submit-btn">
            </form> 
        </div>
        <script src="./js/login_register.js"></script>
    </div>
</body>
</html>