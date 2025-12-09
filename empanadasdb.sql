-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: empanadasdb
-- ------------------------------------------------------
-- Server version	8.0.42

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
-- Table structure for table `detalle_pedido`
--

DROP TABLE IF EXISTS `detalle_pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detalle_pedido` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pedido_id` int NOT NULL,
  `producto_id` int NOT NULL,
  `nombre_producto` varchar(100) DEFAULT NULL,
  `cantidad` int NOT NULL,
  `precio_unitario` decimal(10,2) NOT NULL,
  `subtotal` decimal(10,2) NOT NULL,
  `comentario` text,
  PRIMARY KEY (`id`),
  KEY `pedido_id` (`pedido_id`),
  CONSTRAINT `detalle_pedido_ibfk_1` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalle_pedido`
--

LOCK TABLES `detalle_pedido` WRITE;
/*!40000 ALTER TABLE `detalle_pedido` DISABLE KEYS */;
INSERT INTO `detalle_pedido` VALUES (1,1,2,'Empanada Queso y Cebolla',1,350.00,350.00,NULL),(2,2,2,'Empanada Queso y Cebolla',1,350.00,350.00,NULL),(3,2,4,'Empanada Caprese',1,350.00,350.00,NULL),(4,2,6,'Empanada de Humita',1,340.00,340.00,NULL),(5,3,4,'Empanada Caprese',1,350.00,350.00,NULL),(6,3,6,'Empanada de Humita',1,340.00,340.00,NULL),(7,3,3,'Empanada de Pollo',1,320.00,320.00,NULL),(8,3,2,'Empanada Queso y Cebolla',3,350.00,1050.00,NULL),(9,4,2,'Empanada Queso y Cebolla',1,250.00,250.00,NULL),(10,4,5,'Empanada de Jamón y Queso',1,330.00,330.00,NULL),(11,4,3,'Empanada de Pollo',1,320.00,320.00,NULL),(12,4,6,'Empanada de Humita',1,340.00,340.00,NULL),(13,4,1,'Empanada de Carne',4,300.00,1200.00,NULL),(14,5,2,'Empanada Queso y Cebolla',1,250.00,250.00,NULL),(15,5,1,'Empanada de Carne',1,300.00,300.00,NULL),(16,5,3,'Empanada de Pollo',1,320.00,320.00,NULL),(17,6,1,'Empanada de Carne',1,300.00,300.00,NULL),(18,6,2,'Empanada Queso y Cebolla',1,250.00,250.00,NULL),(19,7,5,'Empanada de Jamón y Queso',1,330.00,330.00,''),(20,7,3,'Empanada de Pollo',8,320.00,2560.00,''),(21,8,1,'Empanada de Carne',2,300.00,600.00,''),(22,8,2,'Empanada Queso y Cebolla',1,250.00,250.00,''),(23,8,5,'Empanada de Jamón y Queso',2,330.00,660.00,''),(24,9,2,'Empanada Queso y Cebolla',4,250.00,1000.00,'sin cebolla'),(25,9,5,'Empanada de Jamón y Queso',1,330.00,330.00,''),(26,9,3,'Empanada de Pollo',1,320.00,320.00,''),(27,9,1,'Empanada de Carne',1,300.00,300.00,''),(28,10,1,'Empanada de Carne',4,300.00,1200.00,'sin aceitunas'),(29,10,2,'Empanada Queso y Cebolla',1,250.00,250.00,''),(30,10,5,'Empanada de Jamón y Queso',1,330.00,330.00,''),(31,11,2,'Empanada Queso y Cebolla',1,250.00,250.00,'sin picante'),(32,11,5,'Empanada de Jamón y Queso',3,330.00,990.00,''),(33,12,3,'Empanada de Pollo',1,320.00,320.00,'sin picante'),(34,12,5,'Empanada de Jamón y Queso',1,330.00,330.00,'horno'),(35,12,6,'Empanada de Humita',6,340.00,2040.00,'fritas'),(36,13,2,'Empanada Queso y Cebolla',5,250.00,1250.00,''),(37,13,5,'Empanada de Jamón y Queso',1,330.00,330.00,''),(38,13,9,'Docena de empanadas a elección',1,24800.00,24800.00,'6 Carne Frita, 4 Jamón y Queso Frita, 2 Queso y Cebolla Horno'),(39,14,1,'Empanada de Carne',1,300.00,300.00,''),(40,14,3,'Empanada de Pollo',1,320.00,320.00,''),(41,14,9,'Docena de empanadas a elección',1,24800.00,24800.00,'6 Carne Frita, 6 Jamón y Queso Frita, 8 Queso y Cebolla Horno, 4 Queso y Cebolla Frita'),(42,15,1,'Empanada de Carne',1,300.00,300.00,''),(43,15,3,'Empanada de Pollo',4,320.00,1280.00,'sin picante'),(44,15,6,'Empanada de Humita',1,340.00,340.00,''),(45,15,9,'Docena de empanadas a elección',1,24800.00,24800.00,'6 Carne Frita, 6 Jamón y Queso Horno'),(46,16,2,'Empanada Queso y Cebolla',2,250.00,500.00,''),(47,16,9,'Docena de empanadas a elección',1,24800.00,24800.00,'2 Carne Frita, 2 Jamón y Queso Frita, 2 Queso y Cebolla Horno, 6 Queso y Cebolla Frita'),(48,17,3,'Empanada de Pollo',6,320.00,1920.00,'sin picante');
/*!40000 ALTER TABLE `detalle_pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre_cliente` varchar(100) NOT NULL,
  `email_cliente` varchar(100) DEFAULT NULL,
  `telefono_cliente` varchar(20) DEFAULT NULL,
  `subtotal` decimal(10,2) NOT NULL,
  `envio` decimal(10,2) DEFAULT '0.00',
  `total` decimal(10,2) NOT NULL,
  `fecha` datetime DEFAULT CURRENT_TIMESTAMP,
  `estado` varchar(20) DEFAULT 'pendiente',
  `direccion` varchar(150) DEFAULT NULL,
  `piso_depto` varchar(50) DEFAULT NULL,
  `comentarios` text,
  `forma_pago` varchar(50) DEFAULT NULL,
  `tipo_entrega` enum('domicilio','retiro') NOT NULL DEFAULT 'domicilio',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (1,'Maria Paula Vera ','mariapaulaveram@gmail.com','1164850001',350.00,0.00,350.00,'2025-09-25 13:03:13','pendiente',NULL,NULL,'todas al horno','efectivo','retiro'),(2,'Marge Simpson','marge@mail.com','8445132132',1040.00,0.00,1040.00,'2025-09-25 13:09:01','pendiente',NULL,NULL,'todas al horno','efectivo','retiro'),(3,'Lisa Simpson','lisa@mail.com','123456789',2060.00,0.00,2060.00,'2025-09-25 13:39:44','en camino','Calle Faalsa 123','1 A','todas al horno','efectivo','domicilio'),(4,'Juan Perez','ejemplo@mail.com','1158693021',2440.00,0.00,2440.00,'2025-09-26 18:45:04','en camino','Calle Faalsa 123','1 B','todas al horno','efectivo','domicilio'),(5,'Marge Simpson','marge@mail.com','8445132132',870.00,0.00,870.00,'2025-09-27 12:12:49','pendiente',NULL,NULL,'todas al horno','efectivo','retiro'),(6,'Marge Simpson','marge@mail.com','1158693021',550.00,0.00,550.00,'2025-09-27 15:02:40','pendiente',NULL,NULL,'al horno','efectivo','retiro'),(7,'Juan Perez','perez@mail.com','1164850001',2890.00,0.00,2890.00,'2025-09-27 19:58:49','pendiente','Calle Faalsa 123','1 A','no toques timbre','efectivo','domicilio'),(8,'Maria Paula ','maria@mail.com','1164850001',1510.00,0.00,1510.00,'2025-09-27 20:02:30','pendiente',NULL,NULL,'no funciona el timbre','efectivo','retiro'),(9,'Lisa Simpson','lisa@mail.com','8445132132',1950.00,0.00,1950.00,'2025-09-27 20:16:12','pendiente','Calle Faalsa 123','1 A','no funciona el timbre','efectivo','domicilio'),(10,'Juan Perez','perez@mail.com','123456789',1780.00,0.00,1780.00,'2025-09-27 23:29:15','pendiente',NULL,NULL,'espero abajo','transferencia','retiro'),(11,'Maria Paula ','mariapaulaveram@gmail.com','1164850001',1240.00,0.00,1240.00,'2025-09-27 23:37:49','pendiente',NULL,NULL,'lo mas rapido','efectivo','retiro'),(12,'Maria Paula ','mariapaulaveram@gmail.com','8445132132',2690.00,0.00,2690.00,'2025-09-27 23:50:46','pendiente','Calle Faalsa 123','1 A','no funciona el timbre','transferencia','domicilio'),(13,'Juan Perez','perez@mail.com','8445132132',26380.00,0.00,26380.00,'2025-09-28 13:21:50','pendiente','Calle Faalsa 123','1 B','espero','efectivo','domicilio'),(14,'Maria Paula ','mariapaulaveram@gmail.com','1158693021',25420.00,0.00,25420.00,'2025-09-28 13:23:48','pendiente','Calle Faalsa 123','1 B','','efectivo','domicilio'),(15,'Maria Paula ','mariapaulaveram@gmail.com','1158693021',26720.00,0.00,26720.00,'2025-09-28 13:27:06','pendiente','Calle Faalsa 123','1 A','rapido','transferencia','domicilio'),(16,'Maria Paula ','mariapaulaveram@gmail.com','1164850001',25300.00,0.00,25300.00,'2025-09-28 18:26:24','pendiente','Calle Faalsa 123','1 B','','efectivo','domicilio'),(17,'Juan Perez','mariapaulaveram@gmail.com','123456789',1920.00,0.00,1920.00,'2025-10-03 10:55:18','pendiente','Calle Falsa 123','1 A','Lo mas rapido','efectivo','domicilio');
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `descripcion` text,
  `precio` decimal(10,2) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `categoria` varchar(50) DEFAULT NULL,
  `tipo` varchar(20) DEFAULT 'normal',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Empanada de Carne','Empanada salteña de carne cortada a cuchillo. Tamaño auténtico de las empanadas salteñas, se calcula 6 unidades por persona.',300.00,'wwp2eplqc6cailmkmgn7','Clásicas','normal'),(2,'Empanada Queso y Cebolla','Empanada salteña rellena de queso y cebolla. Tamaño auténtico de las empanadas salteñas, se calcula 6 unidades por persona.',250.00,'axm9zfv3g3ohf2tfvdk6','Clasicas','normal'),(3,'Empanada de Pollo','Pollo desmenuzado y especias',320.00,'k1h4wlxq07hamgc8rqgf','Clásicas','normal'),(5,'Empanada de Jamón y Queso','Empanada salteña de jamón y queso. El tamaño corresponde al de las autenticas empanadas salteñas, se calcula 6 unidades por persona.',310.00,'axefe9wt87jrrcydgzxv','Clásicas','normal'),(6,'Empanada de Humita','Choclo, salsa blanca y queso',340.00,'y21avyxdl4fkapjjqoni','Vegetarianas','normal'),(9,'Docena de empanadas a eleccion','12 Empanadas Salteñas a Elección. Incluye una yasgua (salsa picante)',24800.00,'t8h2dbhimcuemlpjn9mr','Clásicas','combo');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `clave` varchar(255) NOT NULL,
  `rol` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usuario` (`usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (3,'local','$2b$10$R1QwyCwAqAEqECnqOa3p2OGXBDF4bejW2iHewX/KK2K9Ymu8UmMLi','pedidos'),(4,'gerente','$2b$10$xkHVDlGa6Jb/MYBQniWtA.wr9SsjxbFLekYaW8r/vcCx7qoAQI2HS','productos');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-12-09 15:52:15
