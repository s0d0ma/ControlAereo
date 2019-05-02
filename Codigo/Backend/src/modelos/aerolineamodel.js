var connection = require("../conexion");

var AerolineaModel = {};

// Listar Aerolineas
// informacion reqerida : 
//      GET : none 
// retorna : json(Array(
//     {
//         "cedula_operarios": "10101012145",
//         "correo_operarios": "operario1@correo.com",
//         "fecha_nac_operarios": "2019-04-15T05:00:00.000Z",
//         "fecha_reg_operarios": "2019-04-16T01:10:42.000Z",
//         "id_operarios": 400001,
//         "nombre_operarios": "operario1",
//         "sexo_operarios": 1
//     }
// ))
AerolineaModel.getAerolineas = function(callback)
{
    if(connection){

        var sql = "SELECT id_aerolineas"
                    +", nombre_aerolineas"
                    +", estado_aerolineas"
                    +", fecha_reg_aerolineas"
                    +" FROM aerolineas"
                    +" ORDER BY id_aerolineas;";

        connection.query(sql, function(error, rows)
        {
            if(error)
            {
                throw error;
            }else{
                callback(null, rows);
            }
        });

    }
}

// Mostrar Aerolineas
// informacion reqerida : 
//              GET : id
// retorna : json(Array(
//     {
//         "cedula_operarios": "10101012145",
//         "correo_operarios": "operario1@correo.com",
//         "fecha_nac_operarios": "2019-04-15T05:00:00.000Z",
//         "fecha_reg_operarios": "2019-04-16T01:10:42.000Z",
//         "id_operarios": 400001,
//         "nombre_operarios": "operario1",
//         "sexo_operarios": 1
//     }
// ))
AerolineaModel.getOneAerolinea = function(id, callback){
    if(connection){

        var sql = "SELECT id_aerolineas"
            +", nombre_aerolineas"
            +", estado_aerolineas"
            +", fecha_reg_aerolineas"
            +" FROM aerolineas"
            +" WHERE id_aerolineas = "
            + connection.escape(id)
            +";";

        connection.query(sql, function(error, row){
            if(error){
                throw error;
            }else{
                callback(null,row);
            }
        });

    }
}

// insertar nuevo registro
// informacion requerida : POST:
//      cedula_operarios,
//      correo_operarios,
//      fecha_nac_operarios,
//      fecha_reg_operarios,
//      nombre_operarios,
//      sexo_operarios
// retorna:
//      {"msg": "Registro Insertado"}
//      {"msg": "error"}
AerolineaModel.insertAerolinea = function(AerolineaData, callback){
    if(connection){
        var sql = "INSERT INTO aerolineas SET ?";

        connection.query(sql, AerolineaData, function(error,result){
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
}

// actualizar registro de Aerolineas
// informacion requerida : PUT:
//      id_operarios,
//      cedula_operarios,
//      correo_operarios,
//      fecha_nac_operarios,
//      fecha_reg_operarios,
//      nombre_operarios,
//      sexo_operarios
// retorna:
//      {"msg": "Registro Actualizado"}
//      {"msg": "error"}
AerolineaModel.updateAerolinea = function(AerolineaData, callback){
    if(connection){
        var sql = "UPDATE aerolineas SET nombre_aerolineas=" + connection.escape(AerolineaData.nombre_aerolineas)
        +", estado_aerolineas=" + connection.escape(AerolineaData.estado_aerolineas)
        +", fecha_reg_aerolineas=" + connection.escape(AerolineaData.fecha_reg_aerolineas)
        +" WHERE id_aerolineas = " + connection.escape(AerolineaData.id_aerolineas) +";";

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
}


module.exports = AerolineaModel;