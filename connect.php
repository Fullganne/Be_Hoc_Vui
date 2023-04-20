<?php
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $dbname = "qlbehocvui";
    if(!$con = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname))
    {

        die("Kết nối thất bại!");
    }
?>