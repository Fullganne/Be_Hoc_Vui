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
<?php
function connect()
{
    $servername = "localhost";
    $username = "root";
    $password = "";

    try {
    $conn = new PDO("mysql:host=$servername;dbname=qlbehocvui", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Kết nối thành công!";
    } catch(PDOException $e) {
    echo "Kết nối thất bại: " . $e->getMessage();
    }
    return $conn;
}
?>