-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: emaus
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `telephone`
--

DROP TABLE IF EXISTS `telephone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `telephone` (
  `id` int NOT NULL AUTO_INCREMENT,
  `smartphone` varchar(50) NOT NULL,
  `modele` varchar(50) NOT NULL,
  `stockage` varchar(20) NOT NULL,
  `ram` varchar(10) NOT NULL,
  `systemeExploitation` varchar(50) NOT NULL,
  `etat` varchar(20) NOT NULL,
  `prix` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `telephone`
--

LOCK TABLES `telephone` WRITE;
/*!40000 ALTER TABLE `telephone` DISABLE KEYS */;
INSERT INTO `telephone` VALUES (1,'iPhone 12','iPhone 12 Pro','256 Go','6 Go','iOS 14','Neuf','$1099'),(2,'Samsung Galaxy S21','Galaxy S21 Ultra','128 Go','12 Go','Android 11','Neuf','$1199'),(3,'Google Pixel 5','Pixel 5','128 Go','8 Go','Android 11','Neuf','$699'),(4,'OnePlus 9','OnePlus 9 Pro','256 Go','12 Go','OxygenOS 11','Neuf','$999'),(5,'Xiaomi Mi 11','Mi 11 Ultra','256 Go','12 Go','MIUI 12','Neuf','$1199'),(6,'Huawei P40','P40 Pro','256 Go','8 Go','EMUI 10.1','Neuf','$899'),(7,'LG Velvet','Velvet 5G','128 Go','6 Go','Android 10','Neuf','$599'),(8,'Sony Xperia 1 II','Xperia 1 II','256 Go','8 Go','Android 10','Neuf','$1099'),(9,'Motorola Edge+','Edge Plus','256 Go','12 Go','Android 10','Neuf','$999'),(10,'Nokia 8.3','8.3 5G','128 Go','8 Go','Android 10','Neuf','$699'),(11,'Lenovo Legion Phone Duel','Legion Phone Duel','512 Go','16 Go','Android 10','Neuf','$999'),(12,'Oppo Find X3 Pro','Find X3 Pro','256 Go','12 Go','Android 11','Neuf','$1199'),(13,'Realme GT','Realme GT 5G','128 Go','8 Go','Android 11','Neuf','$599'),(14,'Asus ROG Phone 5','ROG Phone 5','256 Go','16 Go','Android 11','Neuf','$1199'),(15,'BlackBerry Key2','Key2','64 Go','6 Go','Android 8.1','Neuf','$699'),(16,'Honor 20','Honor 20 Pro','256 Go','8 Go','Android 9','Neuf','$799'),(17,'ZTE Axon 30 Ultra','Axon 30 Ultra','256 Go','12 Go','Android 11','Neuf','$999'),(18,'Vivo X60 Pro+','X60 Pro Plus','256 Go','12 Go','Android 11','Neuf','$899');
/*!40000 ALTER TABLE `telephone` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-29 14:37:38
