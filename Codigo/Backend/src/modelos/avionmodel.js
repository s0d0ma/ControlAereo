var connection = require("../conexion");

var AvionModel = {};

// Listar Aviones
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
AvionModel.getAvion = function(callback)
{
    if(connection){

        var sql = "SELECT id_aviones"
                    +", placa_aviones"
                    +", modelo_aviones"
                    +", capacidad_aviones"
                    +", id_aerolineas_aviones"
                    +", estado_aviones"
                    +", fecha_reg_aviones"
                    +" FROM aviones"
                    +" ORDER BY id_aviones;";

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

// Mostrar Avion
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
AvionModel.getOneAvion = function(id, callback){
    if(connection){

        var sql = "SELECT id_aviones"
            +", placa_aviones"
            +", modelo_aviones"
            +", capacidad_aviones"
            +", id_aerolineas_aviones"
            +", estado_aviones"
            +", fecha_reg_aviones"
            +" FROM aviones"
            +" WHERE id_aviones = "
            + connection.escape(id)
            +" ORDER BY id_aviones;";

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
AvionModel.insertAvion = function(AvionData, callback){
    if(connection){
        var sql = "INSERT INTO aviones SET ?";

        connection.query(sql, AvionData, function(error,result){
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

// actualizar registro de aviones
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
AvionModel.updateAvion = function(AvionData, callback){
    if(connection){
        var sql = "UPDATE aviones SET placa_aviones=" + connection.escape(AvionData.placa_aviones)
        +", modelo_aviones=" + connection.escape(AvionData.modelo_aviones)
        +", capacidad_aviones=" + connection.escape(AvionData.capacidad_aviones)
        +", id_aerolineas_aviones=" + connection.escape(AvionData.id_aerolineas_aviones)
        +", estado_aviones=" + connection.escape(AvionData.estado_aviones)
        +", fecha_reg_aviones=" + connection.escape(AvionData.fecha_reg_aviones)
        +" WHERE id_aviones = " + connection.escape(AvionData.id_aviones) +";";

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


module.exports = AvionModel;