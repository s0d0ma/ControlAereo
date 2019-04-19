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
        var sql = "SELECT * FROM vuelos" 
        +" WHERE fecha_reg_vuelos >= "
        +connection.escape(dataInforme1.fecha_inicio)
        +" AND fecha_reg_vuelos <= "
        +connection.escape(dataInforme1.fecha_final)
        +" AND operario_vuelos = "
        +connection.escape(dataInforme1.id_operario)+";";

        connection.query(sql, function(error, rows){
            if(error){
                throw error;
            }else{
                callback(null, rows);
            }
        });
    }
};

VuelosModel.informe2 = function(dataIndorme2, callback){
    if(connection){

        // duda acerca de que informacion mostrar en el informe
        var sql = "SELECT * FROM vuelos"
        +" , aviones, aerolineas"
        +" WHERE vuelos.fecha_reg_vuelos >= " + connection.escape(dataInforme2.fecha_inicio)
        +" AND fecha_reg_vuelos <= " + connection.escape(dataInforme2.fecha_final)
        +" AND vuelos.avion_vuelos = aviones.id_aviones"
        +" AND aviones.id_aerolineas_aviones = " + connection.escape(dataInforme2.id_aerolinea)
        +" AND aerolineas.id_aerolineas = aviones.id_aerolineas_aviones;";

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