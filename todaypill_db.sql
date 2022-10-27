DROP DATABASE IF EXISTS `todaypill`;

CREATE DATABASE IF NOT EXISTS `todaypill` collate utf8mb4_general_ci;
USE `todaypill`;

CREATE TABLE `user` (
 `user_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `email` varchar(40) NULL,
 `name` varchar(20) NULL,
 `age` tinyint NULL,
 `gender` varchar(2) NULL,
 `recommend_one` varchar(20) NULL,
 `recommend_two` varchar(20) NULL,
 `recommend_thr` varchar(20) NULL
);

CREATE TABLE `commonQuestion` (
 `user_id` int NOT NULL,
 `smoke` boolean NULL COMMENT 'lutein 영향',
 `pregnant` int NULL COMMENT '철분 섭취량',
 `allergy` boolean NULL COMMENT '세부사항',
 `pollen` boolean NULL COMMENT '꽃가루알러지여부',
 `honey` boolean NULL COMMENT '꿀 알러지 여부',
 `bee` boolean NULL COMMENT '벌 알러지 여부',
 `eyes` boolean NULL COMMENT '루테인',
 `vessel` boolean NULL COMMENT '오메가3',
 `liver` boolean NULL COMMENT '밀크시슬',
 `intestine` boolean NULL COMMENT '유산균',
 `skin` boolean NULL COMMENT '콜라겐',
 `anemia` boolean NULL COMMENT '철분',
 `immune` boolean NULL COMMENT '프로폴리스,비타민C',
 `fatigue` boolean NULL COMMENT '마그네슘,비타민B',
 `outdoor` boolean NULL COMMENT '비타민D',
 `eat` boolean NULL COMMENT '종합비타민'
);

CREATE TABLE `supplement` (
 `supplement_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `name` varchar(100) NULL,
 `price` double NULL,
 `image` text NULL,
 `ingredients` text NULL,
 `note` text NULL,
 `views` int NULL
);

CREATE TABLE `like` (
 `like_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `user_id` int NOT NULL,
 `supplement_id` int NOT NULL
);

CREATE TABLE `nutrient_common_code` (
 `supplement_id` int NOT NULL,
 `brand` varchar(30) NULL,
 `formula` varchar(20) NULL
);

CREATE TABLE `nutrients_type` (
 `supplement_id` int NOT NULL,
 `name` varchar(100) NULL,
 `best_time` varchar(20) NULL
);

CREATE TABLE `calendar` (
 `calendar_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `user_id` int NOT NULL,
 `supplement_id` int NOT NULL,
 `date` varchar(30) NULL COMMENT '년월일',
 `time` varchar(20) NULL COMMENT '시간-분',
 `tablets` int NULL COMMENT '약 개수',
 `day` varchar(10) NULL COMMENT '요일'
);


ALTER TABLE `commonQuestion` ADD CONSTRAINT `PK_COMMONQUESTION` PRIMARY KEY (
 `user_id`
);




ALTER TABLE `nutrient_common_code` ADD CONSTRAINT `PK_NUTRIENT_COMMON_CODE` PRIMARY KEY (
 `supplement_id`
);

ALTER TABLE `nutrients_type` ADD CONSTRAINT `PK_NUTRIENTS_TYPE` PRIMARY KEY (
 `supplement_id`
);



ALTER TABLE `commonQuestion` ADD CONSTRAINT `FK_user_TO_commonQuestion_1` FOREIGN KEY (
 `user_id`
)
REFERENCES `user` (
 `user_id`
);

ALTER TABLE `like` ADD CONSTRAINT `FK_user_TO_like_1` FOREIGN KEY (
 `user_id`
)
REFERENCES `user` (
 `user_id`
);

ALTER TABLE `like` ADD CONSTRAINT `FK_supplement_TO_like_1` FOREIGN KEY (
 `supplement_id`
)
REFERENCES `supplement` (
 `supplement_id`
);

ALTER TABLE `nutrient_common_code` ADD CONSTRAINT `FK_supplement_TO_nutrient_common_code_1` FOREIGN KEY (
 `supplement_id`
)
REFERENCES `supplement` (
 `supplement_id`
);

ALTER TABLE `nutrients_type` ADD CONSTRAINT `FK_supplement_TO_nutrients_type_1` FOREIGN KEY (
 `supplement_id`
)
REFERENCES `supplement` (
 `supplement_id`
);

ALTER TABLE `calendar` ADD CONSTRAINT `FK_user_TO_calendar_1` FOREIGN KEY (
 `user_id`
)
REFERENCES `user` (
 `user_id`
);

ALTER TABLE `calendar` ADD CONSTRAINT `FK_supplement_TO_calendar_1` FOREIGN KEY (
 `supplement_id`
)
REFERENCES `supplement` (
 `supplement_id`
);

