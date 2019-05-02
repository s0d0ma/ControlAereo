-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-05-2019 a las 10:59:53
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.1.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `control_aereo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aerolineas`
--

CREATE TABLE `aerolineas` (
  `id_aerolineas` int(11) NOT NULL,
  `nombre_aerolineas` varchar(50) COLLATE utf8_bin NOT NULL,
  `estado_aerolineas` varchar(50) COLLATE utf8_bin NOT NULL,
  `fecha_reg_aerolineas` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `aerolineas`
--

INSERT INTO `aerolineas` (`id_aerolineas`, `nombre_aerolineas`, `estado_aerolineas`, `fecha_reg_aerolineas`) VALUES
(1000, 'avianca', 'enable', '2019-04-16 01:10:42'),
(1001, 'aerolinea pablito', 'enable', '2019-04-17 00:29:20'),
(1002, 'aerolinea prueba', 'enable', '2019-04-17 00:29:20'),
(1003, 'avianca', 'enable', '2019-04-16 01:10:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aviones`
--

CREATE TABLE `aviones` (
  `id_aviones` int(11) NOT NULL,
  `placa_aviones` varchar(50) COLLATE utf8_bin NOT NULL,
  `modelo_aviones` varchar(50) COLLATE utf8_bin NOT NULL,
  `capacidad_aviones` int(11) NOT NULL,
  `id_aerolineas_aviones` int(11) NOT NULL,
  `estado_aviones` varchar(50) COLLATE utf8_bin NOT NULL,
  `fecha_reg_aviones` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `aviones`
--

INSERT INTO `aviones` (`id_aviones`, `placa_aviones`, `modelo_aviones`, `capacidad_aviones`, `id_aerolineas_aviones`, `estado_aviones`, `fecha_reg_aviones`) VALUES
(2000, '12301', 'boing', 400, 1000, 'disable', '2019-04-17 05:29:20'),
(2001, '12302', 'boing2', 300, 1001, 'enable', '2019-04-17 00:29:21'),
(2002, '12303', 'boing3', 200, 1002, 'enable', '2019-04-17 00:29:21'),
(2003, '12301', 'boing', 400, 1000, 'enable', '2019-04-17 05:29:20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudades`
--

CREATE TABLE `ciudades` (
  `id_ciudades` int(11) NOT NULL,
  `nombre_cuidades` varchar(255) COLLATE utf8_bin NOT NULL,
  `prefijo_cuidades` varchar(50) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `ciudades`
--

INSERT INTO `ciudades` (`id_ciudades`, `nombre_cuidades`, `prefijo_cuidades`) VALUES
(3000, 'Bogota', 'BG'),
(3001, 'Medellin', 'MD'),
(3002, 'Cali', 'CL'),
(3003, 'Pereira', 'PE');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operarios`
--

CREATE TABLE `operarios` (
  `id_operarios` int(11) NOT NULL,
  `fecha_nac_operarios` date NOT NULL,
  `fecha_reg_operarios` datetime NOT NULL,
  `cedula_operarios` varchar(50) COLLATE utf8_bin NOT NULL,
  `nombre_operarios` varchar(255) COLLATE utf8_bin NOT NULL,
  `correo_operarios` varchar(255) COLLATE utf8_bin NOT NULL,
  `sexo_operarios` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `operarios`
--

INSERT INTO `operarios` (`id_operarios`, `fecha_nac_operarios`, `fecha_reg_operarios`, `cedula_operarios`, `nombre_operarios`, `correo_operarios`, `sexo_operarios`) VALUES
(4000, '2019-04-15', '2019-04-16 01:10:42', '111111111', 'cambiado____1', 'operario1@correo.com', 1),
(4001, '2019-04-16', '2019-04-16 23:35:00', '666666666', 'operario3', 'operario3@correo.com', 1),
(4002, '2019-04-16', '2019-04-16 23:35:00', '888888888', 'operario2', 'operario2@correo.com', 1),
(4003, '2019-04-15', '2019-04-16 01:10:42', '00000000', 'cambiado____1', '00000000@correo.com', 1),
(4004, '2019-04-15', '2019-04-16 01:10:42', '00000000', 'cambiado____1', '00000000@correo.com', 1),
(4005, '2019-04-16', '2019-04-16 06:10:42', '999999999', 'Cambiado nombre', 'operario@mail.com', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rutas`
--

CREATE TABLE `rutas` (
  `id_rutas` int(11) NOT NULL,
  `ciudad_origen_rutas` int(11) NOT NULL,
  `ciudad_destino_rutas` int(11) NOT NULL,
  `estado_rutas` varchar(50) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `rutas`
--

INSERT INTO `rutas` (`id_rutas`, `ciudad_origen_rutas`, `ciudad_destino_rutas`, `estado_rutas`) VALUES
(5000, 3000, 3001, 'enable'),
(5001, 3001, 3002, 'enable'),
(5002, 3002, 3000, 'enable'),
(5003, 3000, 3001, 'disable'),
(5004, 3000, 3001, 'disable'),
(5005, 3000, 3001, 'enable'),
(5006, 3000, 3001, 'enable');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vuelos`
--

CREATE TABLE `vuelos` (
  `id_vuelos` int(11) NOT NULL,
  `fecha_reg_vuelos` datetime NOT NULL,
  `avion_vuelos` int(11) NOT NULL,
  `operario_vuelos` int(11) NOT NULL,
  `rutas_vuelos` int(11) NOT NULL,
  `estado_vuelos` varchar(50) COLLATE utf8_bin NOT NULL,
  `hora_llegada_vuelos` datetime NOT NULL,
  `hora_salida_vuelos` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `vuelos`
--

INSERT INTO `vuelos` (`id_vuelos`, `fecha_reg_vuelos`, `avion_vuelos`, `operario_vuelos`, `rutas_vuelos`, `estado_vuelos`, `hora_llegada_vuelos`, `hora_salida_vuelos`) VALUES
(6000, '2019-04-17 05:29:21', 2000, 4000, 5000, 'changed', '2019-04-17 05:29:21', '2019-04-17 05:29:21'),
(6001, '2019-04-17 05:29:47', 2000, 4000, 5000, 'disable', '2019-04-17 05:29:47', '2019-04-17 05:29:47'),
(6002, '2019-04-17 00:29:47', 2001, 4001, 5001, 'enable', '2019-04-17 00:29:47', '2019-04-17 00:29:47'),
(6003, '2019-04-17 00:29:48', 2002, 4002, 5002, 'enable', '2019-04-17 00:29:48', '2019-04-17 00:29:48'),
(6004, '2019-04-17 05:29:21', 2000, 4000, 5000, 'enable', '2019-04-17 05:29:21', '2019-04-17 05:29:21'),
(6005, '2019-04-17 05:29:21', 2000, 4000, 5000, 'enable', '2019-04-17 05:29:21', '2019-04-17 05:29:21'),
(6006, '2019-04-17 05:29:47', 2000, 4000, 5000, 'enable', '2019-04-17 05:29:47', '2019-04-17 05:29:47');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `aerolineas`
--
ALTER TABLE `aerolineas`
  ADD PRIMARY KEY (`id_aerolineas`);

--
-- Indices de la tabla `aviones`
--
ALTER TABLE `aviones`
  ADD PRIMARY KEY (`id_aviones`),
  ADD KEY `IXFK_aviones_aerolineas` (`id_aerolineas_aviones`);

--
-- Indices de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  ADD PRIMARY KEY (`id_ciudades`);

--
-- Indices de la tabla `operarios`
--
ALTER TABLE `operarios`
  ADD PRIMARY KEY (`id_operarios`);

--
-- Indices de la tabla `rutas`
--
ALTER TABLE `rutas`
  ADD PRIMARY KEY (`id_rutas`),
  ADD KEY `IXFK_rutas_ciudades` (`ciudad_origen_rutas`),
  ADD KEY `IXFK_rutas_ciudades_02` (`ciudad_destino_rutas`);

--
-- Indices de la tabla `vuelos`
--
ALTER TABLE `vuelos`
  ADD PRIMARY KEY (`id_vuelos`),
  ADD KEY `IXFK_vuelos_aviones` (`avion_vuelos`),
  ADD KEY `IXFK_vuelos_operarios` (`operario_vuelos`),
  ADD KEY `IXFK_vuelos_rutas` (`rutas_vuelos`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `aerolineas`
--
ALTER TABLE `aerolineas`
  MODIFY `id_aerolineas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1004;

--
-- AUTO_INCREMENT de la tabla `aviones`
--
ALTER TABLE `aviones`
  MODIFY `id_aviones` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2004;

--
-- AUTO_INCREMENT de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  MODIFY `id_ciudades` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3004;

--
-- AUTO_INCREMENT de la tabla `operarios`
--
ALTER TABLE `operarios`
  MODIFY `id_operarios` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4006;

--
-- AUTO_INCREMENT de la tabla `rutas`
--
ALTER TABLE `rutas`
  MODIFY `id_rutas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5007;

--
-- AUTO_INCREMENT de la tabla `vuelos`
--
ALTER TABLE `vuelos`
  MODIFY `id_vuelos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6007;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `aviones`
--
ALTER TABLE `aviones`
  ADD CONSTRAINT `FK_aviones_aerolineas` FOREIGN KEY (`id_aerolineas_aviones`) REFERENCES `aerolineas` (`id_aerolineas`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `rutas`
--
ALTER TABLE `rutas`
  ADD CONSTRAINT `FK_rutas_ciudades` FOREIGN KEY (`ciudad_origen_rutas`) REFERENCES `ciudades` (`id_ciudades`) ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_rutas_ciudades_02` FOREIGN KEY (`ciudad_destino_rutas`) REFERENCES `ciudades` (`id_ciudades`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `vuelos`
--
ALTER TABLE `vuelos`
  ADD CONSTRAINT `FK_vuelos_aviones` FOREIGN KEY (`avion_vuelos`) REFERENCES `aviones` (`id_aviones`) ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_vuelos_operarios` FOREIGN KEY (`operario_vuelos`) REFERENCES `operarios` (`id_operarios`) ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_vuelos_rutas` FOREIGN KEY (`rutas_vuelos`) REFERENCES `rutas` (`id_rutas`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
