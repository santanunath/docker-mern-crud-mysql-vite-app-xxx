CREATE TABLE IF NOT EXISTS `tbl_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name`   varchar(50) NOT NULL,
  `email`  varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

INSERT INTO `tbl_users` (`name`, `email`) 
VALUES ('anil', 'anil@gmail.com');

INSERT INTO `tbl_users` (`name`, `email`) 
VALUES ('sudhakar', 'sudhakar@gmail.com');
