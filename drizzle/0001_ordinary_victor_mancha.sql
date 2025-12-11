CREATE TABLE `formSubmissions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`serviceType` varchar(100) NOT NULL,
	`serviceTypeOther` text,
	`urgency` varchar(50) NOT NULL,
	`postcode` varchar(20) NOT NULL,
	`languagePreference` varchar(50) NOT NULL,
	`languagePreferenceOther` text,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(50),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `formSubmissions_id` PRIMARY KEY(`id`)
);
