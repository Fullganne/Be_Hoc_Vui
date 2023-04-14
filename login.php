<?php 
    session_start();
    ob_start();
    
    if(isset($_POST['submit-btn'] && ($_POST['submit-btn']) )){
        &user=$_POST['phonenumber'];
        &pass=&_POST['password']


    }



?>



<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Đăng nhập</title>
        <link rel="icon" type="img/png" href="../storage/favicon.png">
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <!-- jQuery library -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <!-- Popper JS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
        <!-- Latest compiled JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="./css/palette.scss">
        <link rel="stylesheet" href="../css/style.css">
    </head>
    <body class="body-login">
        <div style="width: 50%;">
            <a href="./index.html"><img src="./storage/logo-removebg.png" alt="Logo" class="img logo_image"></a>
        </div>
        <div class="container-register" style="width: 50%;">
            <div class="label-register">
                <form action="/action_page.php" autocomplete="on">
                    <li><label for="phonenumber" class="col-25">Số điện thoại:</label><input type="tel" id="pnumber" name="phonenumber" placeholder="1234567890" pattern="[0-9]{10}" class="input-form-register col-75"><br></li>
                    <li><label for="pass" class="col-25">Mật khẩu:</label><input type="text" id="pass" name="password" placeholder="********" class="input-form-register col-75"><br></li>
                    <input type="submit" value="ĐĂNG NHẬP" class="submit-btn">
                </form> 
            </div>
        </div>
    </body>
</html>
