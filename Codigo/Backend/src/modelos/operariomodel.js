var connection = require("../conexion");

var OperarioModel = {};

// Listar operarios
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
OperarioModel.getOperarios = function(callback)
{
    if(connection){

        var sql = "SELECT cedula_operarios"
                    +", correo_operarios"
                    +", fecha_nac_operarios"
                    +", fecha_reg_operarios"
                    +", id_operarios"
                    +", nombre_operarios"
                    +", sexo_operarios"
                    +" FROM operarios"
                    +" ORDER BY cedula_operarios;";

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

// Mostrar operario
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
OperarioModel.getOneOperario = function(id, callback){
    if(connection){

        var sql = "SELECT cedula_operarios"
            +", correo_operarios"
            +", fecha_nac_operarios"
            +", fecha_reg_operarios"
            +", id_operarios"
            +", nombre_operarios"
            +", sexo_operarios"
            +" FROM operarios"
            +" WHERE id_operarios = "
            + connection.escape(id)
            +" ORDER BY cedula_operarios;";

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
OperarioModel.insertOperarios = function(OperarioData, callback){
    if(connection){
        var sql = "INSERT INTO operarios SET ?";

        connection.query(sql, OperarioData, function(error,result){
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

// actualizar registro de operario
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
OperarioModel.updateOperario = function(OperarioData, callback){
    if(connection){
        var sql = "UPDATE operarios SET fecha_nac_operarios=" + connection.escape(OperarioData.fecha_nac_operarios)
        +", fecha_reg_operarios=" + connection.escape(OperarioData.fecha_reg_operarios)
        +", cedula_operarios=" + connection.escape(OperarioData.cedula_operarios)
        +", nombre_operarios=" + connection.escape(OperarioData.nombre_operarios)
        +", correo_operarios=" + connection.escape(OperarioData.correo_operarios)
        +", sexo_operarios=" + connection.escape(OperarioData.sexo_operarios)
        +" WHERE id_operarios = " + connection.escape(OperarioData.id_operarios) +";";

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


module.exports = OperarioModel;