-- MariaDB dump 10.17  Distrib 10.4.11-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: Coyopinion
-- ------------------------------------------------------
-- Server version	10.4.11-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administrador`
--

DROP TABLE IF EXISTS `administrador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `administrador` (
  `id_admin` int(1) NOT NULL DEFAULT 2,
  `administrador` varchar(2) NOT NULL,
  PRIMARY KEY (`id_admin`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrador`
--

LOCK TABLES `administrador` WRITE;
/*!40000 ALTER TABLE `administrador` DISABLE KEYS */;
INSERT INTO `administrador` VALUES (1,'Si'),(2,'No');
/*!40000 ALTER TABLE `administrador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bloqueo`
--

DROP TABLE IF EXISTS `bloqueo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bloqueo` (
  `id_bloqueo` int(1) NOT NULL,
  `bloqueo` varchar(2) NOT NULL,
  PRIMARY KEY (`id_bloqueo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bloqueo`
--

LOCK TABLES `bloqueo` WRITE;
/*!40000 ALTER TABLE `bloqueo` DISABLE KEYS */;
INSERT INTO `bloqueo` VALUES (1,'Si'),(2,'No');
/*!40000 ALTER TABLE `bloqueo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categoria` (
  `id_categoria` int(3) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(50) NOT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'Actividades Académicas'),(2,'Ciencia'),(3,'Cultura'),(4,'Deportes');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `determinado`
--

DROP TABLE IF EXISTS `determinado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `determinado` (
  `determinado` enum('1','2') NOT NULL DEFAULT '2',
  `est_determinado` varchar(2) NOT NULL,
  PRIMARY KEY (`determinado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `determinado`
--

LOCK TABLES `determinado` WRITE;
/*!40000 ALTER TABLE `determinado` DISABLE KEYS */;
INSERT INTO `determinado` VALUES ('1','si'),('2','no');
/*!40000 ALTER TABLE `determinado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eliminado`
--

DROP TABLE IF EXISTS `eliminado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `eliminado` (
  `id_eliminado` int(10) NOT NULL AUTO_INCREMENT,
  `id_usuario` varchar(80) NOT NULL,
  PRIMARY KEY (`id_eliminado`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `eliminado_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eliminado`
--

LOCK TABLES `eliminado` WRITE;
/*!40000 ALTER TABLE `eliminado` DISABLE KEYS */;
/*!40000 ALTER TABLE `eliminado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `encuesta`
--

DROP TABLE IF EXISTS `encuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `encuesta` (
  `id_encuesta` int(10) NOT NULL,
  `id_categoria` int(3) DEFAULT NULL,
  `nombre` text DEFAULT NULL,
  `id_estado` int(1) DEFAULT 1,
  `id_usuario` varchar(80) DEFAULT NULL,
  `campos` int(1) DEFAULT NULL,
  `fecha` date NOT NULL,
  `determinado` enum('1','2') NOT NULL DEFAULT '2',
  `id_registro` int(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id_encuesta`),
  KEY `id_categoria` (`id_categoria`),
  KEY `id_estado` (`id_estado`),
  KEY `id_usuario` (`id_usuario`),
  KEY `determinado` (`determinado`),
  KEY `id_registro` (`id_registro`),
  CONSTRAINT `encuesta_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`),
  CONSTRAINT `encuesta_ibfk_2` FOREIGN KEY (`id_estado`) REFERENCES `estado` (`id_estado`),
  CONSTRAINT `encuesta_ibfk_3` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`),
  CONSTRAINT `encuesta_ibfk_4` FOREIGN KEY (`determinado`) REFERENCES `determinado` (`determinado`),
  CONSTRAINT `encuesta_ibfk_5` FOREIGN KEY (`id_registro`) REFERENCES `registro` (`id_registro`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `encuesta`
--

LOCK TABLES `encuesta` WRITE;
/*!40000 ALTER TABLE `encuesta` DISABLE KEYS */;
/*!40000 ALTER TABLE `encuesta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `encuestaregistro`
--

DROP TABLE IF EXISTS `encuestaregistro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `encuestaregistro` (
  `id_encuesta` int(10) DEFAULT NULL,
  `id_usuario` varchar(80) DEFAULT NULL,
  KEY `id_usuario` (`id_usuario`),
  KEY `id_encuesta` (`id_encuesta`),
  CONSTRAINT `encuestaregistro_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`),
  CONSTRAINT `encuestaregistro_ibfk_2` FOREIGN KEY (`id_encuesta`) REFERENCES `encuesta` (`id_encuesta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `encuestaregistro`
--

LOCK TABLES `encuestaregistro` WRITE;
/*!40000 ALTER TABLE `encuestaregistro` DISABLE KEYS */;
/*!40000 ALTER TABLE `encuestaregistro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estado`
--

DROP TABLE IF EXISTS `estado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estado` (
  `id_estado` int(1) NOT NULL,
  `estado` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id_estado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estado`
--

LOCK TABLES `estado` WRITE;
/*!40000 ALTER TABLE `estado` DISABLE KEYS */;
INSERT INTO `estado` VALUES (1,'activa'),(2,'inactiva');
/*!40000 ALTER TABLE `estado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagen`
--

DROP TABLE IF EXISTS `imagen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imagen` (
  `id_imagen` int(10) NOT NULL AUTO_INCREMENT,
  `imagen` blob NOT NULL,
  PRIMARY KEY (`id_imagen`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagen`
--

LOCK TABLES `imagen` WRITE;
/*!40000 ALTER TABLE `imagen` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pregunta`
--

DROP TABLE IF EXISTS `pregunta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pregunta` (
  `id_pregunta` varchar(8) NOT NULL,
  `id_encuesta` int(10) NOT NULL,
  `preguntat` text NOT NULL,
  PRIMARY KEY (`id_pregunta`),
  KEY `id_encuesta` (`id_encuesta`),
  CONSTRAINT `pregunta_ibfk_1` FOREIGN KEY (`id_encuesta`) REFERENCES `encuesta` (`id_encuesta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pregunta`
--

LOCK TABLES `pregunta` WRITE;
/*!40000 ALTER TABLE `pregunta` DISABLE KEYS */;
/*!40000 ALTER TABLE `pregunta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registro`
--

DROP TABLE IF EXISTS `registro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `registro` (
  `id_registro` int(1) NOT NULL DEFAULT 1,
  `registro` varchar(2) NOT NULL,
  PRIMARY KEY (`id_registro`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registro`
--

LOCK TABLES `registro` WRITE;
/*!40000 ALTER TABLE `registro` DISABLE KEYS */;
INSERT INTO `registro` VALUES (1,'si'),(2,'no');
/*!40000 ALTER TABLE `registro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `respuesta`
--

DROP TABLE IF EXISTS `respuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `respuesta` (
  `id_pregunta` varchar(10) NOT NULL,
  `id_encuesta` int(10) NOT NULL,
  `valor` varchar(50) NOT NULL,
  `img` blob NOT NULL,
  `votos` int(4) NOT NULL,
  KEY `id_pregunta` (`id_pregunta`),
  KEY `id_encuesta` (`id_encuesta`),
  CONSTRAINT `respuesta_ibfk_1` FOREIGN KEY (`id_pregunta`) REFERENCES `pregunta` (`id_pregunta`),
  CONSTRAINT `respuesta_ibfk_2` FOREIGN KEY (`id_encuesta`) REFERENCES `encuesta` (`id_encuesta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `respuesta`
--

LOCK TABLES `respuesta` WRITE;
/*!40000 ALTER TABLE `respuesta` DISABLE KEYS */;
/*!40000 ALTER TABLE `respuesta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo`
--

DROP TABLE IF EXISTS `tipo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo` (
  `id_tipo` int(1) NOT NULL,
  `tipo` varchar(8) NOT NULL,
  PRIMARY KEY (`id_tipo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo`
--

LOCK TABLES `tipo` WRITE;
/*!40000 ALTER TABLE `tipo` DISABLE KEYS */;
INSERT INTO `tipo` VALUES (1,'Alumno'),(2,'Profesor');
/*!40000 ALTER TABLE `tipo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id_tipo` int(1) NOT NULL,
  `id_usuario` varchar(80) NOT NULL,
  `id_usuario2` varchar(100) NOT NULL,
  `contraseña` varchar(100) DEFAULT NULL,
  `id_bloqueo` int(1) DEFAULT 2,
  `correo` tinytext DEFAULT NULL,
  `id_admin` int(1) DEFAULT 2,
  `foto` blob DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `ap_Pat` varchar(40) DEFAULT NULL,
  `ap_Mat` varchar(40) DEFAULT NULL,
  `nacimiento` date DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  KEY `id_tipo` (`id_tipo`),
  KEY `id_bloqueo` (`id_bloqueo`),
  KEY `id_admin` (`id_admin`),
  CONSTRAINT `usuario_ibfk_2` FOREIGN KEY (`id_bloqueo`) REFERENCES `bloqueo` (`id_bloqueo`),
  CONSTRAINT `usuario_ibfk_3` FOREIGN KEY (`id_admin`) REFERENCES `administrador` (`id_admin`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (2,'1A','PEGM9007151H5','g8IkYpHlAgXSIWqLmoNiHDBZbUt1QmhzVHVyYndTbDBjRENzZGc9PQ==',2,'e@gmail.com',2,'','Valeria','Oviedo','Sánchez','0000-00-00'),(1,'234567891','GAMA020610HDFHZNA3','FpFmj588aLjXgrRS3CrpH0dtRVZHSTU2bG5LbnBqSG8xT3VXb1E9PQ==',2,'gama@gmail.com',2,'','Gamaliel','Rios','Lira','2002-06-10'),(1,'318102702','AAA','Kos23neHPfjlojhqjVWBfDVEZzF1bysySEpSTXFXRlBDZXF5L1E9PQ==',2,'valeriaos8623@gmail.com',2,'','Valeria','Oviedo','Sánchez','2020-06-03'),(1,'318465432','ZAVA020610HDFHZNA4','N5HBfRvyvNSTB2YVXnJn5ERTM0pFTnNkaElCbHVEWFQyMllOcVE9PQ==',2,'legocity517@gmail.com',2,'','Omar','Lira','Ordoñez','2002-04-20'),(2,'444444','PEGM9007151H0','kpU9HaZt7zJK2Ln44BiM9jI2dGVzWXppWkkzT09uK0FHSHc0RFE9PQ==',2,'coyo@gmail.com',1,'','Alex','Oviedo','Liras','0000-00-00');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-28 10:29:47
