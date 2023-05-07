-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 23, 2023 at 05:19 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qlbehocvui`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_taikhoanhs`
--

CREATE TABLE `tb_taikhoanhs` (
  `idHS` int(10) NOT NULL,
  `name` varchar(30) NOT NULL,
  `phonenumber` varchar(10) NOT NULL,
  `password` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `point` bigint(10) NOT NULL,
  `lop` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tb_taikhoanhs`
--

INSERT INTO `tb_taikhoanhs` (`idHS`, `name`, `phonenumber`, `password`, `email`, `point`, `lop`) VALUES
(0, 'Admin', '0000000000', 'admin', 'adminbehocvui@gmail.com', 0, 0),
(1, 'Nguyễn Đức Ân', '0337333918', '12345678', 'firewolf148@gmail.com', 0, 1),
(2, 'Nguyen Duc An', '0908231222', '12345678', 'annd.cnthongtin@gmail.com', 0, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_taikhoanhs`
--
ALTER TABLE `tb_taikhoanhs`
  ADD PRIMARY KEY (`idHS`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_taikhoanhs`
--
ALTER TABLE `tb_taikhoanhs`
  MODIFY `idHS` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
