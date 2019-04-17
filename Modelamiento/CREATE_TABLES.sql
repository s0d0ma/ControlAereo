-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-04-2019 a las 06:35:42
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
  `id_aerolineas` int(11) AUTO_INCREMENT NOT NULL,
  `nombre_aerolineas` varchar(50) COLLATE utf8_bin NOT NULL,
  `estado_aerolineas` varchar(50) COLLATE utf8_bin NOT NULL,
  `fecha_reg_aerolineas` datetime NOT NULL,
  PRIMARY KEY (`id_aerolineas`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

ALTER TABLE aerolineas AUTO_INCREMENT=1000;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aviones`
--

CREATE TABLE `aviones` (
  `id_aviones` int(11) AUTO_INCREMENT NOT NULL,
  `placa_aviones` varchar(50) COLLATE utf8_bin NOT NULL,
  `modelo_aviones` varchar(50) COLLATE utf8_bin NOT NULL,
  `capacidad_aviones` int(11) NOT NULL,
  `id_aerolineas_aviones` int(11) NOT NULL,
  `estado_aviones` varchar(50) COLLATE utf8_bin NOT NULL,
  `fecha_reg_aviones` datetime NOT NULL,
  PRIMARY KEY (`id_aviones`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

ALTER TABLE aviones AUTO_INCREMENT=2000;
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudades`
--

CREATE TABLE `ciudades` (
  `id_ciudades` int(11) AUTO_INCREMENT NOT NULL,
  `nombre_cuidades` varchar(255) COLLATE utf8_bin NOT NULL,
  `prefijo_cuidades` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id_ciudades`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

ALTER TABLE ciudades AUTO_INCREMENT=3000;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operarios`
--

CREATE TABLE `operarios` (
  `id_operarios` int(11) AUTO_INCREMENT NOT NULL,
  `fecha_nac_operarios` date NOT NULL,
  `fecha_reg_operarios` datetime NOT NULL,
  `cedula_operarios` varchar(50) COLLATE utf8_bin NOT NULL,
  `nombre_operarios` varchar(255) COLLATE utf8_bin NOT NULL,
  `correo_operarios` varchar(255) COLLATE utf8_bin NOT NULL,
  `sexo_operarios` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_operarios`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

ALTER TABLE operarios AUTO_INCREMENT=4000;

-- Volcado de datos para la tabla `operarios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rutas`
--

CREATE TABLE `rutas` (
  `id_rutas` int(11) AUTO_INCREMENT NOT NULL,
  `ciudad_origen_rutas` int(11) NOT NULL,
  `ciudad_destino_rutas` int(11) NOT NULL,
  `estado_rutas` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id_rutas`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

ALTER TABLE rutas AUTO_INCREMENT=5000;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vuelos`
--

CREATE TABLE `vuelos` (
  `id_vuelos` int(11) AUTO_INCREMENT NOT NULL,
  `fecha_reg_vuelos` datetime NOT NULL,
  `avion_vuelos` int(11) NOT NULL,
  `operario_vuelos` int(11) NOT NULL,
  `rutas_vuelos` int(11) NOT NULL,
  `estado_vuelos` varchar(50) COLLATE utf8_bin NOT NULL,
  `hora_llegada_vuelos` datetime NOT NULL,
  `hora_salida_vuelos` datetime NOT NULL,
  PRIMARY KEY (`id_vuelos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

ALTER TABLE vuelos AUTO_INCREMENT=6000;

ALTER TABLE `aviones`
  ADD KEY `IXFK_aviones_aerolineas` (`id_aerolineas_aviones`);

--
-- Indices de la tabla `rutas`
--
ALTER TABLE `rutas`
  ADD KEY `IXFK_rutas_ciudades` (`ciudad_origen_rutas`),
  ADD KEY `IXFK_rutas_ciudades_02` (`ciudad_destino_rutas`);

--
-- Indices de la tabla `vuelos`
--
ALTER TABLE `vuelos`
  ADD KEY `IXFK_vuelos_aviones` (`avion_vuelos`),
  ADD KEY `IXFK_vuelos_operarios` (`operario_vuelos`),
  ADD KEY `IXFK_vuelos_rutas` (`rutas_vuelos`);

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