DROP DATABASE IF EXISTS nationdata_db;
CREATE DATABASE nationdata_db;

USE nationdata_db;

CREATE TABLE health (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(200),
  gdp INT(100),
  life_expectancy_male INT,
  life_expectancy_female INT,
  doctors INT,
  hdi INT,
  gender_inequality INT,
  PRIMARY KEY (id)
);

INSERT INTO health (name, gdp, life_expectancy_male, life_expectancy_female, doctors, hdi, gender_inequality) VALUES ("Albania", 7700, 75, 80, 131, 64, 61), ("Belarus", 12500, 65, 77, 455, 61, 0), ("Kazakhstan", 11800, 63, 74, 354, 66, 67), ("Kosovo", 2500, 0, 0, 0, 0, 0), ("Macedonia", 9100, 72, 78, 219, 71, 0), ("Ukraine", 6300, 63, 75, 295, 69, 44), ("USA", 46000, 76, 81, 256, 4, 37);

SELECT doctors FROM health where name="Belarus";
-- SELECT MAX(doctors) FROM health;

SELECT gdp FROM health where name="Kosovo";
-- SELECT MIN(gdp) from health;
