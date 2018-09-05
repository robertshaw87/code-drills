DROP DATABASE IF EXISTS countryDB;
CREATE database countryDB;

USE countryDB;

CREATE TABLE countryHappiness (
-- YOUR CODE HERE --

  country VARCHAR(50) NOT NULL UNIQUE,
  gdp decimal(20),
  family decimal(20),
  lifeExpectancy decimal(20),
  freedom decimal(20),
  corruption decimal(20)

-- END CODE AREA --
);

CREATE TABLE countryEconomy (
-- YOUR CODE HERE --



-- END CODE AREA --
);

SELECT * FROM countryHappiness