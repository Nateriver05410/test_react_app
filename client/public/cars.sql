-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 05, 2024 at 12:15 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cars`
--

-- --------------------------------------------------------

--
-- Table structure for table `car`
--

CREATE TABLE `car` (
  `SerialNo` varchar(20) NOT NULL,
  `Brand` varchar(50) DEFAULT NULL,
  `Model` varchar(50) DEFAULT NULL,
  `Price` decimal(10,2) DEFAULT NULL,
  `OptionList` varchar(255) DEFAULT NULL,
  `SalesPerson` varchar(50) DEFAULT NULL,
  `SaleDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `car`
--

INSERT INTO `car` (`SerialNo`, `Brand`, `Model`, `Price`, `OptionList`, `SalesPerson`, `SaleDate`) VALUES
('00000000', 'ford', 'ranger', 3200000.00, 'console wheel , Xenon', 'admin1', NULL),
('202155451', 'BMW', 'minicupper', 8000000.00, '--', 'admin2', NULL),
('20220501', 'Toyota', 'Corolla', 900000.00, 'Air Bag, CD Player', NULL, NULL),
('20220502', 'honda', 'city', 2000000.00, 'max wheel , Roadx', 'admin', '0000-00-00');

-- --------------------------------------------------------

--
-- Stand-in structure for view `economiccar`
-- (See below for the actual view)
--
CREATE TABLE `economiccar` (
`SerialNo` varchar(20)
,`Brand` varchar(50)
,`Model` varchar(50)
,`Price` decimal(10,2)
,`OptionList` varchar(255)
,`SalesPerson` varchar(50)
,`SaleDate` date
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `expensivecar`
-- (See below for the actual view)
--
CREATE TABLE `expensivecar` (
`SerialNo` varchar(20)
,`Brand` varchar(50)
,`Model` varchar(50)
,`Price` decimal(10,2)
,`OptionList` varchar(255)
,`SalesPerson` varchar(50)
,`SaleDate` date
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `luxuriouscar`
-- (See below for the actual view)
--
CREATE TABLE `luxuriouscar` (
`SerialNo` varchar(20)
,`Brand` varchar(50)
,`Model` varchar(50)
,`Price` decimal(10,2)
,`OptionList` varchar(255)
,`SalesPerson` varchar(50)
,`SaleDate` date
);

-- --------------------------------------------------------

--
-- Structure for view `economiccar`
--
DROP TABLE IF EXISTS `economiccar`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `economiccar`  AS SELECT `car`.`SerialNo` AS `SerialNo`, `car`.`Brand` AS `Brand`, `car`.`Model` AS `Model`, `car`.`Price` AS `Price`, `car`.`OptionList` AS `OptionList`, `car`.`SalesPerson` AS `SalesPerson`, `car`.`SaleDate` AS `SaleDate` FROM `car` WHERE `car`.`Price` <= 1000000WITH CASCADEDCHECK OPTION  ;

-- --------------------------------------------------------

--
-- Structure for view `expensivecar`
--
DROP TABLE IF EXISTS `expensivecar`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `expensivecar`  AS SELECT `car`.`SerialNo` AS `SerialNo`, `car`.`Brand` AS `Brand`, `car`.`Model` AS `Model`, `car`.`Price` AS `Price`, `car`.`OptionList` AS `OptionList`, `car`.`SalesPerson` AS `SalesPerson`, `car`.`SaleDate` AS `SaleDate` FROM `car` WHERE `car`.`Price` > 1000000WITH CASCADEDCHECK OPTION  ;

-- --------------------------------------------------------

--
-- Structure for view `luxuriouscar`
--
DROP TABLE IF EXISTS `luxuriouscar`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `luxuriouscar`  AS SELECT `expensivecar`.`SerialNo` AS `SerialNo`, `expensivecar`.`Brand` AS `Brand`, `expensivecar`.`Model` AS `Model`, `expensivecar`.`Price` AS `Price`, `expensivecar`.`OptionList` AS `OptionList`, `expensivecar`.`SalesPerson` AS `SalesPerson`, `expensivecar`.`SaleDate` AS `SaleDate` FROM `expensivecar` WHERE `expensivecar`.`Price` > 3000000WITH CASCADEDCHECK OPTION  ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `car`
--
ALTER TABLE `car`
  ADD PRIMARY KEY (`SerialNo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
