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
 `recommend_three` varchar(20) NULL
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
 `like` int NULL
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

CREATE TABLE `routine` (
	`routine_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` int NOT NULL,
    `supplement_id` int NOT NULL,
    `time` varchar(10) NULL COMMENT '(hh:mm)',
    `day` int NULL COMMENT '요일',
    `tablets` int NULL
    );

CREATE TABLE `calendar` (
	`calendar_id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`routine_id` int NOT NULL,
	`date` datetime NULL COMMENT '(yyyy-MM-dd)',
	`taken` boolean NULL
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

ALTER TABLE `routine` ADD CONSTRAINT `FK_user_TO_routine_1` FOREIGN KEY (
	`user_id`
)
REFERENCES `user` (
	`user_id`
);

ALTER TABLE `routine` ADD CONSTRAINT `FK_supplement_TO_routine_1` FOREIGN KEY (
	`supplement_id`
)
REFERENCES `supplement` (
	`supplement_id`
);

ALTER TABLE `calendar` ADD CONSTRAINT `FK_routine_TO_calendar_1` FOREIGN KEY (
	`routine_id`
)
REFERENCES `routine` (
	`routine_id`
);

show tables;

select * from routine;

insert into user values (
	0, 'test@gmail.com', '김싸피', 26, 'F', '비타민 B', '유산균', '아연'
);

select * from `user`;

insert into `supplement` values (
	0, '10억 보장 유산균', 35000, '', '재료1, 재료2', 'Lactobacillus rhamnosus', 1
);

insert into `like` values (
	0, 1, 1
);

select * from `like`;

select * from `routine`;