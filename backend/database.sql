CREATE DATABASE emmaus;

USE emmaus;

DROP TABLE IF EXISTS `telephone`;
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

LOCK TABLES `telephone` WRITE;
INSERT INTO `telephone` VALUES (1,'iPhone 12','iPhone 12 Pro','256 Go','6 Go','iOS 14','Neuf','$1099'),(2,'Samsung Galaxy S21','Galaxy S21 Ultra','128 Go','12 Go','Android 11','Neuf','$1199'),(3,'Google Pixel 5','Pixel 5','128 Go','8 Go','Android 11','Neuf','$699'),(4,'OnePlus 9','OnePlus 9 Pro','256 Go','12 Go','OxygenOS 11','Neuf','$999'),(5,'Xiaomi Mi 11','Mi 11 Ultra','256 Go','12 Go','MIUI 12','Neuf','$1199'),(6,'Huawei P40','P40 Pro','256 Go','8 Go','EMUI 10.1','Neuf','$899'),(7,'LG Velvet','Velvet 5G','128 Go','6 Go','Android 10','Neuf','$599'),(8,'Sony Xperia 1 II','Xperia 1 II','256 Go','8 Go','Android 10','Neuf','$1099'),(9,'Motorola Edge+','Edge Plus','256 Go','12 Go','Android 10','Neuf','$999'),(10,'Nokia 8.3','8.3 5G','128 Go','8 Go','Android 10','Neuf','$699'),(11,'Lenovo Legion Phone Duel','Legion Phone Duel','512 Go','16 Go','Android 10','Neuf','$999'),(12,'Oppo Find X3 Pro','Find X3 Pro','256 Go','12 Go','Android 11','Neuf','$1199'),(13,'Realme GT','Realme GT 5G','128 Go','8 Go','Android 11','Neuf','$599'),(14,'Asus ROG Phone 5','ROG Phone 5','256 Go','16 Go','Android 11','Neuf','$1199'),(15,'BlackBerry Key2','Key2','64 Go','6 Go','Android 8.1','Neuf','$699'),(16,'Honor 20','Honor 20 Pro','256 Go','8 Go','Android 9','Neuf','$799'),(17,'ZTE Axon 30 Ultra','Axon 30 Ultra','256 Go','12 Go','Android 11','Neuf','$999'),(18,'Vivo X60 Pro+','X60 Pro Plus','256 Go','12 Go','Android 11','Neuf','$899');
UNLOCK TABLES;
