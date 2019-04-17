var connection = require("../conexion");

var RutaModel = {};

RutaModel.getRutas = function(callback){
    if(connection){
        var sql = "SELECT id_rutas"
            +", ciudad_origen_rutas"
            +", ciudad_destino_rutas"
            +", estado_rutas"
            +" FROM rutas ORDER BY estado_rutas";

        connection.query(sql, function(error, rows){
            if(error){
                throw error;
            }else{
                callback(null, rows);
            }
        });
    }
};

RutaModel.getOneRuta = function(id, callback){
    if(connection){
        var sql = "SELECT id_rutas"
            +", ciudad_origen_rutas"
            +", ciudad_destino_rutas"
            +", estado_rutas"
            +" FROM rutas"
            +" WHERE id_rutas = "
            + connection.escape(id)
            +" ORDER BY estado_rutas";

        connection.query(sql, function(error, rows){
            if(error){
                throw error;
            }else{
                callback(null, rows);
            }
        });
    }
};

RutaModel.insertRuta = function(rutaData, callback){
    var sql =  "INSERT INTO rutas SET ?";

    connection.query(sql, rutaData, function(error, result){
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
};

RutaModel.updateRuta = function(rutaData, callback){
    if(connection){

        var sql = "UPDATE rutas SET"
        +" ciudad_origen_rutas="+connection.escape(rutaData.ciudad_origen_rutas)
        +", ciudad_destino_rutas="+connection.escape(rutaData.ciudad_destino_rutas)
        +", estado_rutas="+connection.escape(rutaData.estado_rutas)
        +" WHERE id_rutas="+connection.escape(rutaData.id_rutas)+";";
    }

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
};

module.exports = RutaModel;
