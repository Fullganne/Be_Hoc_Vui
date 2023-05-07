<?php
        $dbhost = "localhost";
        $dbuser = "root";
        $dbpass = "";
        $dbname = "qlbehocvui";
        $con = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
        if(!$con)
        {

            die("Kết nối thất bại!");
        }
?>