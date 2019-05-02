var connection = require("../conexion");

var VuelosModel = {};

VuelosModel.getVuelos = function(callback){
    if(connection){
        var sql = "SELECT id_vuelos"
            +", fecha_reg_vuelos"
            +", avion_vuelos"
            +", operario_vuelos"
            +", rutas_vuelos"
            +", estado_vuelos"
            +", hora_llegada_vuelos"
            +", hora_salida_vuelos"
            +" FROM vuelos ORDER BY fecha_reg_vuelos";

        connection.query(sql, function(error, rows){
            if(error){
                throw error;
            }else{
                callback(null, rows);
            }
        });
    }
};

VuelosModel.getOneVuelo = function(id, callback){
    if(connection){

        var sql = "SELECT id_vuelos"
            +", fecha_reg_vuelos"
            +", avion_vuelos"
            +", operario_vuelos"
            +", rutas_vuelos"
            +", estado_vuelos"
            +", hora_llegada_vuelos"
            +", hora_salida_vuelos"
            +" FROM vuelos"
            +" WHERE id_vuelos="
            + connection.escape(id)
            +" ORDER BY fecha_reg_vuelos";

        connection.query(sql, function(error, rows){
            if(error){
                throw error;
            }else{
                callback(null, rows);
            }
        });
    }
};

VuelosModel.insertVuelo = function(vueloData, callback){
    if(connection){
        var sql = "INSERT INTO vuelos SET ?";

        connection.query(sql, vueloData, function(error, result){
            if(error){
                throw error;
            }else{
                if(result.affectedRows>0){
                    callback(null,{"msg":"Registro Insertado"});
                }else{
                    callback(null,{"error":"error"});
                }
            }
        });
    }
};

VuelosModel.updateRuta = function(vueloData, callback){
    if(connection){
        var sql = "UPDATE vuelos SET fecha_reg_vuelos="+connection.escape(vueloData.fecha_reg_vuelos)
            +" ,avion_vuelos="+connection.escape(vueloData.avion_vuelos)
            +" ,operario_vuelos="+connection.escape(vueloData.operario_vuelos)
            +" ,rutas_vuelos="+connection.escape(vueloData.rutas_vuelos)
            +" ,estado_vuelos="+connection.escape(vueloData.estado_vuelos)
            +" ,hora_llegada_vuelos="+connection.escape(vueloData.hora_llegada_vuelos)
            +" ,hora_salida_vuelos="+connection.escape(vueloData.hora_salida_vuelos)
            +" WHERE id_vuelos="+connection.escape(vueloData.id_vuelos);
    
            connection.query(sql, function(error, result){
                if(error){
                    throw error;
                }else{
                    if(result.affectedRows > 0){
                        callback(null, {"msg": "Registro Actualizado"});
                    }else{
                        callback(null, {"error": "error"});
                    }
                    
                }
            });
    }
};

VuelosModel.informe1 = function(dataInforme1, callback){
    if(connection){
        var sql = "SELECT vuelos.id_vuelos, vuelos.estado_vuelos, vuelos.fecha_reg_vuelos, vuelos.avion_vuelos,"
        +" aviones.placa_aviones, aerolineas.nombre_aerolineas,"
        +" vuelos.operario_vuelos, operarios.cedula_operarios, operarios.correo_operarios,"
        +" operarios.nombre_operarios, vuelos.rutas_vuelos,"
        +" ciudades_origen.nombre_cuidades as ciudad_origen, ciudades_destino.nombre_cuidades as ciudad_destino," 
        +" vuelos.hora_llegada_vuelos, vuelos.hora_salida_vuelos"

        +" FROM vuelos, rutas, operarios, aviones, aerolineas, ciudades as ciudades_origen, ciudades as ciudades_destino"

        +" WHERE fecha_reg_vuelos >= "+connection.escape(dataInforme1.fecha_inicio)
        +" AND fecha_reg_vuelos <= "+connection.escape(dataInforme1.fecha_final)
        +" AND operario_vuelos = "+connection.escape(dataInforme1.id_operario)

        +" AND vuelos.avion_vuelos = aviones.id_aviones"
        +" AND aviones.id_aerolineas_aviones = aerolineas.id_aerolineas"

        +" AND vuelos.operario_vuelos = operarios.id_operarios"

        +" AND vuelos.rutas_vuelos = rutas.id_rutas"
        +" AND rutas.ciudad_origen_rutas = ciudades_origen.id_ciudades"
        +" AND rutas.ciudad_destino_rutas = ciudades_destino.id_ciudades;"

        connection.query(sql, function(error, rows){
            if(error){
                throw error;
            }else{
                callback(null, rows);
            }
        });
    }
};

VuelosModel.informe2 = function(dataInforme2, callback){
    if(connection){

        // duda acerca de que informacion mostrar en el informe
        var sql = "SELECT vuelos.id_vuelos, vuelos.estado_vuelos, vuelos.fecha_reg_vuelos, vuelos.avion_vuelos,"
        +" aviones.placa_aviones, aerolineas.nombre_aerolineas,"
        +" vuelos.operario_vuelos, operarios.cedula_operarios, operarios.correo_operarios,"
        +" operarios.nombre_operarios, vuelos.rutas_vuelos,"
        +" ciudades_origen.nombre_cuidades as ciudad_origen, ciudades_destino.nombre_cuidades as ciudad_destino," 
        +" vuelos.hora_llegada_vuelos, vuelos.hora_salida_vuelos"

        +" FROM vuelos, rutas, operarios, aviones, aerolineas, ciudades as ciudades_origen, ciudades as ciudades_destino"

        +" WHERE fecha_reg_vuelos >= "+connection.escape(dataInforme2.fecha_inicio)
        +" AND fecha_reg_vuelos <= "+connection.escape(dataInforme2.fecha_final)
        +" AND aerolineas.id_aerolineas = "+connection.escape(dataInforme2.id_aerolinea)

        +" AND vuelos.avion_vuelos = aviones.id_aviones"
        +" AND aviones.id_aerolineas_aviones = aerolineas.id_aerolineas"

        +" AND vuelos.operario_vuelos = operarios.id_operarios"

        +" AND vuelos.rutas_vuelos = rutas.id_rutas"
        +" AND rutas.ciudad_origen_rutas = ciudades_origen.id_ciudades"
        +" AND rutas.ciudad_destino_rutas = ciudades_destino.id_ciudades;";

        connection.query(sql, function(error, rows){
            if(error){
                throw error;
            }else{
                callback(null, rows);
            }
        });
    }
};                                       


module.exports = VuelosModel;