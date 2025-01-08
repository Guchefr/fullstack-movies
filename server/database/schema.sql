CREATE TABLE movie (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL
);

INSERT INTO movie (title) VALUES ('The Shawshank Redemption'), ('The Godfather'), ('The Dark Knight');