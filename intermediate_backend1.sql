CREATE DATABASE chill;
USE chill;

CREATE TABLE User (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE Paket (
    paket_id INT PRIMARY KEY AUTO_INCREMENT,
    nama_paket VARCHAR(100) NOT NULL,
    harga_paket DECIMAL(10,2) NOT NULL,
    durasi_paket INT NOT NULL 
);

CREATE TABLE Pembayaran (
    pembayaran_id INT PRIMARY KEY AUTO_INCREMENT,
    metode_pembayaran VARCHAR(50) NOT NULL,
    status ENUM('Paid', 'Unpaid', 'Pending') NOT NULL
);

CREATE TABLE `Order` (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    paket_id INT NOT NULL,
    tanggal_order DATE NOT NULL,
    pembayaran_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (paket_id) REFERENCES Paket(paket_id),
    FOREIGN KEY (pembayaran_id) REFERENCES Pembayaran(pembayaran_id)
);

CREATE TABLE Genre (
    genre_id INT PRIMARY KEY AUTO_INCREMENT,
    nama_genre VARCHAR(100) NOT NULL
);

CREATE TABLE SeriesFilm (
    film_series_id INT PRIMARY KEY AUTO_INCREMENT,
    judul VARCHAR(200) NOT NULL,
    tahun_rilis YEAR NOT NULL,
    deskripsi TEXT,
    genre_id INT NOT NULL,
    jumlah_episode INT DEFAULT 1,
    FOREIGN KEY (genre_id) REFERENCES Genre(genre_id)
);

CREATE TABLE EpisodeMovie (
    episode_id INT PRIMARY KEY AUTO_INCREMENT,
    film_series_id INT NOT NULL,
    judul VARCHAR(200) NOT NULL,
    durasi_menit INT NOT NULL,
    sinopsis TEXT,
    rating DECIMAL(3,1),
    FOREIGN KEY (film_series_id) REFERENCES SeriesFilm(film_series_id)
);

CREATE TABLE Daftar_Saya (
    list_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    film_series_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (film_series_id) REFERENCES SeriesFilm(film_series_id)
);

INSERT INTO User (username, email, password) VALUES
('reza', 'reza@example.com', 'pass123'),
('sinta', 'sinta@example.com', 'pass456'),
('budi', 'budi@example.com', 'pass789');

INSERT INTO Paket (nama_paket, harga_paket, durasi_paket) VALUES
('Basic', 50000.00, 30),
('Standard', 100000.00, 30),
('Premium', 150000.00, 30);

INSERT INTO Pembayaran (metode_pembayaran, status) VALUES
('Transfer Bank', 'Paid'),
('OVO', 'Pending'),
('Gopay', 'Unpaid');

INSERT INTO `Order` (user_id, paket_id, tanggal_order, pembayaran_id) VALUES
(1, 1, '2025-08-01', 1),  -- Reza ambil Basic, bayar via Transfer Bank
(2, 2, '2025-08-05', 2),  -- Sinta ambil Standard, bayar via OVO
(3, 3, '2025-08-10', 3);  -- Budi ambil Premium, bayar via Gopay

INSERT INTO Genre (nama_genre) VALUES
('Action'),
('Comedy'),
('Drama'),
('Horror'),
('Sci-Fi');

INSERT INTO SeriesFilm (judul, tahun_rilis, deskripsi, genre_id, jumlah_episode) VALUES
('Avengers Assemble', 2019, 'Film superhero dengan banyak karakter Marvel', 1, 1),
('The Crown', 2020, 'Drama sejarah tentang kerajaan Inggris', 2, 40),
('Friends', 1994, 'Sitcom legendaris tentang persahabatan di New York', 3, 236),
('Stranger Things', 2022, 'Serial misteri dan fiksi ilmiah', 4, 34);

INSERT INTO EpisodeMovie (film_series_id, judul, durasi_menit, sinopsis, rating) VALUES
(1, 'Avengers Assemble', 180, 'Pertarungan epik melawan Thanos', 8.5),
(2, 'The Crown S1E1', 55, 'Awal kisah kerajaan Inggris modern', 8.2),
(3, 'Friends S1E1', 25, 'Awal pertemanan Ross, Monica, Chandler, Joey, Rachel, Phoebe', 9.0),
(4, 'Stranger Things S1E1', 50, 'Anak hilang di kota kecil Hawkins', 8.7);

INSERT INTO Daftar_Saya (user_id, film_series_id) VALUES
(1, 1),  -- Reza simpan Avengers
(1, 4),  -- Reza simpan Stranger Things
(2, 2),  -- Sinta simpan The Crown
(3, 3);  -- Budi simpan Friends
