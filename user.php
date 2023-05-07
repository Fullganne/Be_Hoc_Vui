<?php
    function checkUser($phonenumber, $pass)
    {
        $conn=connect();
        $stmt = $conn->prepare("SELECT * FROM tb_taikhoanhs WHERE phonenumber = '".$phonenumber."' AND password = '".$pass."'");
        $stmt->execute();
        $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $kq = $stmt->fetchAll();
        if(count($kq)>0) return $kq[1]['id'];
        else return 0;
    } 
    function getUserInfo($phonenumber)
    {
        $conn = connect();
        $stmt = $conn->prepare("SELECT * FROM tb_taikhoanhs where phonenumber = '".$phonenumber."' limit 1");
        $stmt->execute();
        $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $kq = $stmt->fetchAll();
        return $kq;
    }
?>