-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Май 12 2023 г., 12:00
-- Версия сервера: 10.4.28-MariaDB
-- Версия PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `bbd test`
--

-- --------------------------------------------------------

--
-- Структура таблицы `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `password` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `admin`
--

INSERT INTO `admin` (`id`, `password`) VALUES
(1, 1234);

-- --------------------------------------------------------

--
-- Структура таблицы `bids`
--

CREATE TABLE `bids` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `bids`
--

INSERT INTO `bids` (`id`, `name`, `phone`) VALUES
(1, 'Тест', '89136543075');

-- --------------------------------------------------------

--
-- Структура таблицы `complex`
--

CREATE TABLE `complex` (
  `id` int(11) NOT NULL,
  `complex_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `complex`
--

INSERT INTO `complex` (`id`, `complex_name`) VALUES
(1, 'Генеральский'),
(2, 'Квантум'),
(3, 'Лесной'),
(4, 'Речной');

-- --------------------------------------------------------

--
-- Структура таблицы `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `scu` varchar(255) NOT NULL,
  `title` int(11) NOT NULL,
  `complex_name` int(11) NOT NULL,
  `square` int(11) NOT NULL,
  `price_sq_m` int(11) NOT NULL,
  `price_total` int(11) NOT NULL,
  `building` int(11) NOT NULL,
  `floor` int(11) NOT NULL,
  `floors_total` int(11) NOT NULL,
  `rooms` int(11) NOT NULL,
  `flat_number` int(11) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `items`
--

INSERT INTO `items` (`id`, `scu`, `title`, `complex_name`, `square`, `price_sq_m`, `price_total`, `building`, `floor`, `floors_total`, `rooms`, `flat_number`, `image`) VALUES
(1, 'ГЕН-112', 1, 1, 39, 48000, 1872000, 1, 8, 12, 1, 32, '01.png'),
(2, 'РЕЧ-05', 3, 4, 42, 64000, 2688000, 1, 12, 12, 2, 52, '02.png'),
(3, 'ЛЕС-09', 4, 3, 65, 72000, 4680000, 1, 2, 16, 3, 45, '03.png'),
(4, 'ГЕН-82', 6, 1, 102, 52000, 5304000, 2, 1, 18, 5, 38, '04.png'),
(5, 'КВ-967', 4, 2, 80, 46000, 3680000, 1, 12, 12, 3, 49, '05.png'),
(6, 'ГЕН-34', 4, 1, 72, 79000, 5688000, 1, 10, 12, 3, 67, '06.png'),
(7, 'РЕЧ-250', 5, 4, 105, 82000, 8610000, 2, 8, 8, 4, 45, '07.png'),
(8, 'КВ-138', 1, 2, 38, 55000, 2090000, 2, 18, 22, 1, 74, '08.png'),
(9, 'ЛЕС-435', 3, 3, 68, 102000, 6936000, 2, 16, 18, 2, 15, '09.png'),
(10, 'ГЕН-12', 4, 1, 57, 92000, 5244000, 3, 1, 14, 3, 65, '10.png'),
(11, 'КВ-947', 4, 2, 71, 57000, 4047000, 1, 1, 12, 3, 89, '11.png'),
(12, 'ЛЕС-763', 5, 3, 92, 68000, 6256000, 22, 5, 22, 4, 67, '12.png'),
(13, 'ГЕН-462', 6, 1, 104, 72000, 7488000, 2, 4, 18, 5, 29, '13.png'),
(14, 'РЕЧ-412', 6, 4, 120, 52000, 6240000, 2, 8, 8, 5, 83, '14.png'),
(15, 'ЛЕС-654', 2, 3, 48, 46000, 2208000, 1, 12, 16, 1, 41, '15.png'),
(16, 'ГЕН-792', 3, 1, 56, 79000, 4424000, 4, 6, 14, 2, 97, '16.png'),
(17, 'ЛЕС-158', 4, 3, 72, 48000, 3456000, 3, 7, 12, 3, 84, '17.png'),
(18, 'РЕЧ-872', 5, 4, 98, 64000, 6272000, 3, 2, 20, 4, 95, '18.png');

-- --------------------------------------------------------

--
-- Структура таблицы `titles`
--

CREATE TABLE `titles` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `titles`
--

INSERT INTO `titles` (`id`, `title`) VALUES
(1, 'Студия'),
(2, 'Однокомнатная квартира'),
(3, 'Двухкомнатная квартира'),
(4, 'Трехкомнатная квартира'),
(5, 'Четырехкомнатная квартира'),
(6, 'Пятикомнатная квартира');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `bids`
--
ALTER TABLE `bids`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `complex`
--
ALTER TABLE `complex`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `title` (`title`),
  ADD KEY `complex_name` (`complex_name`);

--
-- Индексы таблицы `titles`
--
ALTER TABLE `titles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `bids`
--
ALTER TABLE `bids`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `complex`
--
ALTER TABLE `complex`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT для таблицы `titles`
--
ALTER TABLE `titles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `items_ibfk_1` FOREIGN KEY (`title`) REFERENCES `titles` (`id`),
  ADD CONSTRAINT `items_ibfk_2` FOREIGN KEY (`complex_name`) REFERENCES `complex` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
