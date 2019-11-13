-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mar. 12 nov. 2019 à 23:04
-- Version du serveur :  5.7.26
-- Version de PHP :  7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `pweb`
--

DELIMITER $$
--
-- Procédures
--
DROP PROCEDURE IF EXISTS `ajout_Activity`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ajout_Activity` ()  INSERT INTO activity(Name_Activitey,Date_Activity,Description_Activity,Price_Activity,Location_Activity,Status_Activity,Regularity,Public_Activity,Id_person) 
SELECT activitetp.Name_Activitey,activitetp.Date_Activity,activitetp.Description_Activity,activitetp.Price_Activity,activitetp.Location_Activity,activitetp.Status_Activity,activitetp.Regularity,activitetp.Price_Activity,person.ID_Person 
FROM person INNER JOIN activitetp 
WHERE person.Email_address = activitetp.Email_address$$

DROP PROCEDURE IF EXISTS `ajout_basket`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ajout_basket` ()  INSERT INTO basket(Date_Basket,Status_Basket,ID_Person)
SELECT paniertp.Date_Basket, paniertp.Status_Basket, personnetp.ID_Person
FROM personnetp INNER JOIN paniertp 
ON personnetp.ID_Person=paniertp.Id_Basket$$

DROP PROCEDURE IF EXISTS `ajout_comment`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ajout_comment` ()  INSERT INTO comment(Date_Comment,Author_Comment,Appreciation,Like_Comment,Public_Comment,Ref_Comment,Id_person)
SELECT commentairetp.Date_Comment,commentairetp.Author_Comment,commentairetp.Appreciation,commentairetp.Like_Comment,commentairetp.Public_Comment,commentairetp.Ref_Comment,person.ID_Person
FROM person INNER JOIN commentairetp
WHERE person.Email_address=commentairetp.Email_address$$

DROP PROCEDURE IF EXISTS `ajout_person`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ajout_person` ()  INSERT INTO person(Name_Personne,First_Name_Person,Location__Person,Email_address,Password,Status_Person,Profile,Id_Basket)
SELECT personnetp.Name_Personne,personnetp.First_Name_Person,personnetp.Location__Person,personnetp.Email_address,personnetp.Password,personnetp.Status_Person,personnetp.Profile,paniertp.Id_Basket
FROM personnetp INNER JOIN paniertp 
ON personnetp.ID_Person=paniertp.Id_Basket$$

DROP PROCEDURE IF EXISTS `ajout_photo`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ajout_photo` ()  INSERT INTO photo(Date_Photo,Author_Photo,Picture,Public_Photo,Like_Photo,Id_person)
SELECT phototp.Date_Photo,phototp.Author_Photo,phototp.Picture,phototp.Public_Photo,phototp.Like_Photo,person.ID_Person
FROM person INNER JOIN phototp
WHERE person.Email_address=phototp.Email_address$$

DROP PROCEDURE IF EXISTS `ajout_product`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ajout_product` ()  INSERT INTO product (Name_Product,Price_Product,Description_Product,Category_Product,Id_person)
SELECT produittp.Name_Product,produittp.Price_Product,produittp.Description_Product,produittp.Category_Product,person.ID_Person
FROM produittp INNER JOIN person 
WHERE produittp.Email_address = person.Email_address$$

DROP PROCEDURE IF EXISTS `contain1`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `contain1` ()  INSERT INTO tp3(Email_address,Id_Product)
SELECT contenirtp.Email_address,product.Id_Product
FROM contenirtp INNER JOIN product
WHERE contenirtp.Name_Product=product.Name_Product AND contenirtp.Price_Product=product.Price_Product$$

DROP PROCEDURE IF EXISTS `contain2`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `contain2` ()  INSERT INTO contain(Id_Basket,Id_Product)
SELECT person.Id_Basket,tp3.Id_product
FROM person INNER JOIN tp3
WHERE person.Email_address=tp3.Email_address$$

DROP PROCEDURE IF EXISTS `DropTempoActivite`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `DropTempoActivite` ()  DELETE FROM activitetp$$

DROP PROCEDURE IF EXISTS `DropTempoComment`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `DropTempoComment` ()  DELETE FROM commentairetp$$

DROP PROCEDURE IF EXISTS `DropTempoContain1`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `DropTempoContain1` ()  DELETE FROM contenirtp$$

DROP PROCEDURE IF EXISTS `DropTempoContain2`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `DropTempoContain2` ()  DELETE FROM tp3$$

DROP PROCEDURE IF EXISTS `DropTempoHave1`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `DropTempoHave1` ()  DELETE FROM possedetp$$

DROP PROCEDURE IF EXISTS `DropTempoHave2`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `DropTempoHave2` ()  DELETE FROM tp2$$

DROP PROCEDURE IF EXISTS `DropTempoPanier`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `DropTempoPanier` ()  DELETE FROM paniertp$$

DROP PROCEDURE IF EXISTS `DropTempoPerson`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `DropTempoPerson` ()  DELETE FROM personnetp$$

DROP PROCEDURE IF EXISTS `DropTempoPhoto`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `DropTempoPhoto` ()  DELETE FROM phototp$$

DROP PROCEDURE IF EXISTS `DropTempoProduct`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `DropTempoProduct` ()  DELETE FROM produittp$$

DROP PROCEDURE IF EXISTS `DropTempoRegister1`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `DropTempoRegister1` ()  DELETE FROM participetp$$

DROP PROCEDURE IF EXISTS `DropTempoRegister2`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `DropTempoRegister2` ()  DELETE FROM tp1$$

DROP PROCEDURE IF EXISTS `have1`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `have1` ()  INSERT INTO tp2( Id_Photo,Name_Product,Price_Product)
SELECT photo.Id_Photo,possedetp.Name_Product,possedetp.Price_Product
FROM photo INNER JOIN possedetp 
WHERE photo.Picture = possedetp.Picture AND photo.Date_Photo = possedetp.Date_Photo$$

DROP PROCEDURE IF EXISTS `have2`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `have2` ()  INSERT INTO have( Id_Photo,Id_Product)
SELECT tp2.Id_photo,product.Id_Product
FROM tp2 INNER JOIN product
WHERE tp2.Name_Product=product.Name_Product AND tp2.Price_Product= product.Price_Product$$

DROP PROCEDURE IF EXISTS `register1`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `register1` ()  INSERT INTO tp1 (Email_address,Id_Activity)
SELECT participetp.Email_address,activity.Id_Activity
FROM participetp INNER JOIN activity
WHERE participetp.Name_Activitey = activity.Name_Activitey AND participetp.Date_Activity= activity.Date_Activity$$

DROP PROCEDURE IF EXISTS `register2`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `register2` ()  INSERT INTO register (Id_Activity,Id_person)
SELECT tp1.Id_Activity , person.ID_Person
FROM tp1 INNER JOIN person
WHERE tp1.Email_address=person.Email_address$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `activitetp`
--

DROP TABLE IF EXISTS `activitetp`;
CREATE TABLE IF NOT EXISTS `activitetp` (
  `Id_Activity` int(11) NOT NULL AUTO_INCREMENT,
  `Name_Activitey` varchar(50) COLLATE utf8_bin NOT NULL,
  `Date_Activity` date NOT NULL,
  `Description_Activity` varchar(256) COLLATE utf8_bin NOT NULL,
  `Price_Activity` tinyint(1) NOT NULL,
  `Location_Activity` varchar(40) COLLATE utf8_bin NOT NULL,
  `Status_Activity` varchar(20) COLLATE utf8_bin NOT NULL DEFAULT 'ON',
  `Regularity` varchar(20) COLLATE utf8_bin NOT NULL,
  `Public_Activity` tinyint(1) NOT NULL DEFAULT '1',
  `Email_address` varchar(60) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`Id_Activity`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `activity`
--

DROP TABLE IF EXISTS `activity`;
CREATE TABLE IF NOT EXISTS `activity` (
  `Id_Activity` int(11) NOT NULL AUTO_INCREMENT,
  `Name_Activitey` varchar(50) COLLATE utf8_bin NOT NULL,
  `Date_Activity` date NOT NULL,
  `Description_Activity` varchar(256) COLLATE utf8_bin NOT NULL,
  `Price_Activity` tinyint(1) NOT NULL,
  `Location_Activity` varchar(40) COLLATE utf8_bin NOT NULL,
  `Status_Activity` varchar(20) COLLATE utf8_bin NOT NULL,
  `Regularity` varchar(20) COLLATE utf8_bin NOT NULL,
  `Public_Activity` tinyint(1) NOT NULL,
  `ID_Person` int(11) NOT NULL,
  PRIMARY KEY (`Id_Activity`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `activity`
--

INSERT INTO `activity` (`Id_Activity`, `Name_Activitey`, `Date_Activity`, `Description_Activity`, `Price_Activity`, `Location_Activity`, `Status_Activity`, `Regularity`, `Public_Activity`, `ID_Person`) VALUES
(1, 'Piscine', '2019-11-18', 'Piscine d\'Arras', 1, 'Arras', 'ON', 'OUI', 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `basket`
--

DROP TABLE IF EXISTS `basket`;
CREATE TABLE IF NOT EXISTS `basket` (
  `Id_Basket` int(11) NOT NULL AUTO_INCREMENT,
  `Date_Basket` date NOT NULL,
  `Status_Basket` tinyint(1) NOT NULL,
  `ID_Person` int(11) NOT NULL,
  PRIMARY KEY (`Id_Basket`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `basket`
--

INSERT INTO `basket` (`Id_Basket`, `Date_Basket`, `Status_Basket`, `ID_Person`) VALUES
(1, '2019-11-12', 0, 1),
(2, '2019-11-12', 0, 2),
(3, '2019-11-12', 0, 3);

-- --------------------------------------------------------

--
-- Structure de la table `comment`
--

DROP TABLE IF EXISTS `comment`;
CREATE TABLE IF NOT EXISTS `comment` (
  `Id_Comment` int(11) NOT NULL AUTO_INCREMENT,
  `Date_Comment` date NOT NULL,
  `Author_Comment` varchar(40) COLLATE utf8_bin NOT NULL,
  `Appreciation` varchar(256) COLLATE utf8_bin DEFAULT NULL,
  `Like_Comment` tinyint(1) DEFAULT NULL,
  `Public_Comment` tinyint(1) DEFAULT NULL,
  `Ref_Comment` int(11) NOT NULL,
  `ID_Person` int(11) NOT NULL,
  PRIMARY KEY (`Id_Comment`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `comment`
--

INSERT INTO `comment` (`Id_Comment`, `Date_Comment`, `Author_Comment`, `Appreciation`, `Like_Comment`, `Public_Comment`, `Ref_Comment`, `ID_Person`) VALUES
(1, '2019-11-12', 'Bastien Seillier', 'Léo the best', 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `commentairetp`
--

DROP TABLE IF EXISTS `commentairetp`;
CREATE TABLE IF NOT EXISTS `commentairetp` (
  `Id_Comment` int(11) NOT NULL AUTO_INCREMENT,
  `Date_Comment` date NOT NULL,
  `Author_Comment` varchar(40) COLLATE utf8_bin NOT NULL,
  `Appreciation` varchar(256) COLLATE utf8_bin DEFAULT NULL,
  `Like_Comment` tinyint(1) DEFAULT NULL,
  `Public_Comment` tinyint(1) DEFAULT NULL,
  `Ref_Comment` int(11) NOT NULL,
  `Email_address` varchar(60) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`Id_Comment`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `consult`
--

DROP TABLE IF EXISTS `consult`;
CREATE TABLE IF NOT EXISTS `consult` (
  `Id_Activity` int(11) NOT NULL,
  `ID_Person` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `contain`
--

DROP TABLE IF EXISTS `contain`;
CREATE TABLE IF NOT EXISTS `contain` (
  `Id_Basket` int(11) NOT NULL,
  `Id_Product` int(11) NOT NULL,
  `Quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `contenirtp`
--

DROP TABLE IF EXISTS `contenirtp`;
CREATE TABLE IF NOT EXISTS `contenirtp` (
  `Email_address` varchar(60) COLLATE utf8_bin NOT NULL,
  `Name_Product` varchar(40) COLLATE utf8_bin NOT NULL,
  `Price_Product` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `have`
--

DROP TABLE IF EXISTS `have`;
CREATE TABLE IF NOT EXISTS `have` (
  `Id_Photo` int(11) NOT NULL,
  `Id_Product` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `paniertp`
--

DROP TABLE IF EXISTS `paniertp`;
CREATE TABLE IF NOT EXISTS `paniertp` (
  `Id_Basket` int(11) NOT NULL AUTO_INCREMENT,
  `Date_Basket` date NOT NULL,
  `Status_Basket` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Id_Basket`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `participetp`
--

DROP TABLE IF EXISTS `participetp`;
CREATE TABLE IF NOT EXISTS `participetp` (
  `Email_address` varchar(60) COLLATE utf8_bin NOT NULL,
  `Name_Activitey` varchar(50) COLLATE utf8_bin NOT NULL,
  `Date_Activity` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `person`
--

DROP TABLE IF EXISTS `person`;
CREATE TABLE IF NOT EXISTS `person` (
  `ID_Person` int(11) NOT NULL AUTO_INCREMENT,
  `Name_Personne` varchar(50) COLLATE utf8_bin NOT NULL,
  `First_Name_Person` varchar(50) COLLATE utf8_bin NOT NULL,
  `Location__Person` varchar(50) COLLATE utf8_bin NOT NULL,
  `Email_address` varchar(60) COLLATE utf8_bin NOT NULL,
  `Password` varchar(20) COLLATE utf8_bin NOT NULL,
  `Status_Person` varchar(20) COLLATE utf8_bin NOT NULL,
  `Profile` varchar(40) COLLATE utf8_bin NOT NULL,
  `Id_Basket` int(11) NOT NULL,
  PRIMARY KEY (`ID_Person`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `person`
--

INSERT INTO `person` (`ID_Person`, `Name_Personne`, `First_Name_Person`, `Location__Person`, `Email_address`, `Password`, `Status_Person`, `Profile`, `Id_Basket`) VALUES
(1, 'Seillier', 'Bastien', 'Arras', 'bastien.seillier@viacesi.fr', '1234', 'off', 'BDE', 1),
(2, 'Blondel', 'Alexandre', 'Arras', 'alexandre.blondel@viacesi.fr', 'azerty', 'off', 'BDE', 2),
(3, 'Delayen', 'Simon', 'Arras', 'simon.delayen@viacesi.fr', '7894', 'off', 'BDE', 3);

-- --------------------------------------------------------

--
-- Structure de la table `personnetp`
--

DROP TABLE IF EXISTS `personnetp`;
CREATE TABLE IF NOT EXISTS `personnetp` (
  `ID_Person` int(11) NOT NULL AUTO_INCREMENT,
  `Name_Personne` varchar(50) COLLATE utf8_bin NOT NULL,
  `First_Name_Person` varchar(50) COLLATE utf8_bin NOT NULL,
  `Location__Person` varchar(50) COLLATE utf8_bin NOT NULL,
  `Email_address` varchar(60) COLLATE utf8_bin NOT NULL,
  `Password` varchar(20) COLLATE utf8_bin NOT NULL,
  `Status_Person` varchar(20) COLLATE utf8_bin NOT NULL DEFAULT 'off',
  `Profile` varchar(40) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`ID_Person`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `photo`
--

DROP TABLE IF EXISTS `photo`;
CREATE TABLE IF NOT EXISTS `photo` (
  `Id_Photo` int(11) NOT NULL AUTO_INCREMENT,
  `Date_Photo` date NOT NULL,
  `Author_Photo` varchar(40) COLLATE utf8_bin DEFAULT NULL,
  `Picture` varchar(50) COLLATE utf8_bin NOT NULL,
  `Public_Photo` tinyint(1) DEFAULT NULL,
  `Like_Photo` tinyint(1) NOT NULL,
  `ID_Person` int(11) NOT NULL,
  PRIMARY KEY (`Id_Photo`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `photo`
--

INSERT INTO `photo` (`Id_Photo`, `Date_Photo`, `Author_Photo`, `Picture`, `Public_Photo`, `Like_Photo`, `ID_Person`) VALUES
(1, '2019-11-12', 'Simon Delayen', 'Ceci est une photo', 1, 0, 3);

-- --------------------------------------------------------

--
-- Structure de la table `phototp`
--

DROP TABLE IF EXISTS `phototp`;
CREATE TABLE IF NOT EXISTS `phototp` (
  `Id_Photo` int(11) NOT NULL AUTO_INCREMENT,
  `Date_Photo` date NOT NULL,
  `Author_Photo` varchar(40) COLLATE utf8_bin DEFAULT NULL,
  `Picture` varchar(50) COLLATE utf8_bin NOT NULL,
  `Public_Photo` tinyint(1) DEFAULT NULL,
  `Like_Photo` tinyint(1) NOT NULL,
  `Email_address` varchar(60) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`Id_Photo`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `possedetp`
--

DROP TABLE IF EXISTS `possedetp`;
CREATE TABLE IF NOT EXISTS `possedetp` (
  `Name_Product` varchar(40) COLLATE utf8_bin NOT NULL,
  `Price_Product` int(11) NOT NULL,
  `Date_Photo` date NOT NULL,
  `Picture` varchar(50) COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `Id_Product` int(11) NOT NULL AUTO_INCREMENT,
  `Name_Product` varchar(40) COLLATE utf8_bin NOT NULL,
  `Price_Product` int(11) NOT NULL,
  `Description_Product` varchar(256) COLLATE utf8_bin NOT NULL,
  `Category_Product` varchar(256) COLLATE utf8_bin NOT NULL,
  `ID_Person` int(11) NOT NULL,
  PRIMARY KEY (`Id_Product`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Déchargement des données de la table `product`
--

INSERT INTO `product` (`Id_Product`, `Name_Product`, `Price_Product`, `Description_Product`, `Category_Product`, `ID_Person`) VALUES
(1, 'Pull', 45, 'Pull CESI', 'Vêtement', 2);

-- --------------------------------------------------------

--
-- Structure de la table `produittp`
--

DROP TABLE IF EXISTS `produittp`;
CREATE TABLE IF NOT EXISTS `produittp` (
  `Id_Product` int(11) NOT NULL AUTO_INCREMENT,
  `Name_Product` varchar(40) COLLATE utf8_bin NOT NULL,
  `Price_Product` int(11) NOT NULL,
  `Description_Product` varchar(256) COLLATE utf8_bin NOT NULL,
  `Category_Product` varchar(256) COLLATE utf8_bin NOT NULL,
  `Email_address` varchar(60) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`Id_Product`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `register`
--

DROP TABLE IF EXISTS `register`;
CREATE TABLE IF NOT EXISTS `register` (
  `Id_Activity` int(11) NOT NULL,
  `ID_Person` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `tp1`
--

DROP TABLE IF EXISTS `tp1`;
CREATE TABLE IF NOT EXISTS `tp1` (
  `Email_address` varchar(60) COLLATE utf8_bin NOT NULL,
  `Id_Activity` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `tp2`
--

DROP TABLE IF EXISTS `tp2`;
CREATE TABLE IF NOT EXISTS `tp2` (
  `Id_photo` int(11) NOT NULL,
  `Name_Product` varchar(40) COLLATE utf8_bin NOT NULL,
  `Price_Product` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Structure de la table `tp3`
--

DROP TABLE IF EXISTS `tp3`;
CREATE TABLE IF NOT EXISTS `tp3` (
  `Email_address` varchar(60) COLLATE utf8_bin NOT NULL,
  `Id_product` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
