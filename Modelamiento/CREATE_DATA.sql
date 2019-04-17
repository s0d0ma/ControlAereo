INSERT INTO `aerolineas` (`nombre_aerolineas`, `estado_aerolineas`, `fecha_reg_aerolineas`) 
VALUES ('aerolinea pepito', 'enable', current_timestamp);
INSERT INTO `aerolineas` (`nombre_aerolineas`, `estado_aerolineas`, `fecha_reg_aerolineas`) 
VALUES ('aerolinea pablito', 'enable', current_timestamp);
INSERT INTO `aerolineas` (`nombre_aerolineas`, `estado_aerolineas`, `fecha_reg_aerolineas`) 
VALUES ('aerolinea prueba', 'enable', current_timestamp);

INSERT INTO `ciudades` (`nombre_cuidades`, `prefijo_cuidades`) 
VALUES ('Bogota', 'BG');
INSERT INTO `ciudades` (`nombre_cuidades`, `prefijo_cuidades`) 
VALUES ('Medellin', 'MD');
INSERT INTO `ciudades` (`nombre_cuidades`, `prefijo_cuidades`) 
VALUES ('Cali', 'CL');

INSERT INTO `operarios` (`fecha_nac_operarios`, `fecha_reg_operarios`, `cedula_operarios`, `nombre_operarios`, `correo_operarios`, `sexo_operarios`) VALUES
('2019-04-15', '2019-04-15 20:10:42', '111111111', 'operario1', 'operario1@correo.com', 1),
('2019-04-16', '2019-04-16 23:35:00', '666666666', 'operario3', 'operario3@correo.com', 1),
('2019-04-16', '2019-04-16 23:35:00', '888888888', 'operario2', 'operario2@correo.com', 1);

INSERT INTO `aviones` (`placa_aviones`, `modelo_aviones`, `capacidad_aviones`, `id_aerolineas_aviones`, `estado_aviones`, `fecha_reg_aviones`) 
VALUES ('12301', 'boing', 400, 1001, 'enable', current_timestamp);
INSERT INTO `aviones` (`placa_aviones`, `modelo_aviones`, `capacidad_aviones`, `id_aerolineas_aviones`, `estado_aviones`, `fecha_reg_aviones`) 
VALUES ('12302', 'boing2', 300, 1001, 'enable', current_timestamp);
INSERT INTO `aviones` (`placa_aviones`, `modelo_aviones`, `capacidad_aviones`, `id_aerolineas_aviones`, `estado_aviones`, `fecha_reg_aviones`)
VALUES ('12303', 'boing3', 200, 1001, 'enable', current_timestamp);

INSERT INTO `rutas` (`ciudad_origen_rutas`, `ciudad_destino_rutas`, `estado_rutas`) 
VALUES (3000, 3001, 'enable');
INSERT INTO `rutas` (`ciudad_origen_rutas`, `ciudad_destino_rutas`, `estado_rutas`) 
VALUES (3001, 3002, 'enable');
INSERT INTO `rutas` (`ciudad_origen_rutas`, `ciudad_destino_rutas`, `estado_rutas`) 
VALUES (3002, 3000, 'enable');

INSERT INTO `vuelos` (`fecha_reg_vuelos`, `avion_vuelos`, `operario_vuelos`, `rutas_vuelos`, `estado_vuelos`, `hora_llegada_vuelos`, `hora_salida_vuelos`) 
VALUES (current_timestamp, 2000, 4000, 5000, 'enable', current_timestamp, current_timestamp);
INSERT INTO `vuelos` ( `fecha_reg_vuelos`, `avion_vuelos`, `operario_vuelos`, `rutas_vuelos`, `estado_vuelos`, `hora_llegada_vuelos`, `hora_salida_vuelos`) 
VALUES (current_timestamp, 2001, 4001, 5001, 'enable', current_timestamp, current_timestamp);
INSERT INTO `vuelos` ( `fecha_reg_vuelos`, `avion_vuelos`, `operario_vuelos`, `rutas_vuelos`, `estado_vuelos`, `hora_llegada_vuelos`, `hora_salida_vuelos`) 
VALUES (current_timestamp, 2002, 4002, 5002, 'enable', current_timestamp, current_timestamp);