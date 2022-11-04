-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        8.0.31 - MySQL Community Server - GPL
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- todaypills 데이터베이스 구조 내보내기
DROP DATABASE IF EXISTS `todaypills`;
CREATE DATABASE IF NOT EXISTS `todaypills` DEFAULT CHARACTER SET utf8mb4;
USE `todaypills`;

-- 테이블 todaypills.calendar 구조 내보내기
DROP TABLE IF EXISTS `calendar`;
CREATE TABLE IF NOT EXISTS `calendar` (
  `calendar_id` int NOT NULL AUTO_INCREMENT,
  `date` varchar(255) DEFAULT NULL,
  `day` int DEFAULT NULL,
  `supplement_id` int DEFAULT NULL,
  `tablets` int DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`calendar_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 todaypills.calendar:~0 rows (대략적) 내보내기

-- 테이블 todaypills.commonquestion 구조 내보내기
DROP TABLE IF EXISTS `commonquestion`;
CREATE TABLE IF NOT EXISTS `commonquestion` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `allergy` bit(1) DEFAULT NULL,
  `anemia` bit(1) DEFAULT NULL,
  `bee` bit(1) DEFAULT NULL,
  `eat` bit(1) DEFAULT NULL,
  `eyes` bit(1) DEFAULT NULL,
  `fatigue` bit(1) DEFAULT NULL,
  `honey` bit(1) DEFAULT NULL,
  `immune` bit(1) DEFAULT NULL,
  `intestine` bit(1) DEFAULT NULL,
  `liver` bit(1) DEFAULT NULL,
  `outdoor` bit(1) DEFAULT NULL,
  `pollen` bit(1) DEFAULT NULL,
  `pregnant` int DEFAULT NULL,
  `skin` bit(1) DEFAULT NULL,
  `smoke` bit(1) DEFAULT NULL,
  `vessel` bit(1) DEFAULT NULL,
  `balanced_meal` varchar(255) DEFAULT NULL,
  `constipation` bit(1) DEFAULT NULL,
  `diarrhea` bit(1) DEFAULT NULL,
  `heartburn` bit(1) DEFAULT NULL,
  `is_ok_big_pill` bit(1) DEFAULT NULL,
  `kidney_disease` bit(1) DEFAULT NULL,
  `outdoor_activity` varchar(255) DEFAULT NULL,
  `preferred_brand` varchar(255) DEFAULT NULL,
  `problem` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 todaypills.commonquestion:~0 rows (대략적) 내보내기

-- 테이블 todaypills.like 구조 내보내기
DROP TABLE IF EXISTS `like`;
CREATE TABLE IF NOT EXISTS `like` (
  `like_id` int NOT NULL AUTO_INCREMENT,
  `supplement_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`like_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 todaypills.like:~0 rows (대략적) 내보내기

-- 테이블 todaypills.nutrients_type 구조 내보내기
DROP TABLE IF EXISTS `nutrients_type`;
CREATE TABLE IF NOT EXISTS `nutrients_type` (
  `supplement_id` int NOT NULL AUTO_INCREMENT,
  `best_time` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`supplement_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 todaypills.nutrients_type:~0 rows (대략적) 내보내기


-- 테이블 데이터 todaypills.nutrient_common_code:~0 rows (대략적) 내보내기
-- 테이블 todaypills.routine 구조 내보내기
DROP TABLE IF EXISTS `routine`;
CREATE TABLE IF NOT EXISTS `routine` (
  `routine_id` int NOT NULL AUTO_INCREMENT,
  `day` int DEFAULT NULL,
  `supplement_id` int DEFAULT NULL,
  `tablets` int DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`routine_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 todaypills.routine:~0 rows (대략적) 내보내기

-- 테이블 todaypills.supplement 구조 내보내기
DROP TABLE IF EXISTS `supplement`;
CREATE TABLE IF NOT EXISTS `supplement` (
  `supplement_id` int NOT NULL AUTO_INCREMENT,
  `additional_efficacy` varchar(255) DEFAULT NULL,
  `amount` varchar(255) DEFAULT NULL,
  `bioavailability` float DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `consumer_lab_score` int DEFAULT NULL,
  `formula` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `ingredients` varchar(2000) DEFAULT NULL,
  `kidney_disease` float DEFAULT NULL,
  `laxative` float DEFAULT NULL,
  `like` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `pill_size` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `required_count` varchar(255) DEFAULT NULL,
  `sustained_release` bit(1) DEFAULT NULL,
  `supplement_type_id` bigint DEFAULT NULL,
  PRIMARY KEY (`supplement_id`),
  KEY `FKs2g0smnur1l6e5g3wqwd1w5l1` (`supplement_type_id`),
  CONSTRAINT `FKs2g0smnur1l6e5g3wqwd1w5l1` FOREIGN KEY (`supplement_type_id`) REFERENCES `supplement_type` (`supplement_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 todaypills.supplement:~0 rows (대략적) 내보내기

-- 테이블 todaypills.user 구조 내보내기
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `age` int DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `recommend_one` varchar(255) DEFAULT NULL,
  `recommend_three` varchar(255) DEFAULT NULL,
  `recommend_two` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 todaypills.user:~0 rows (대략적) 내보내기

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
