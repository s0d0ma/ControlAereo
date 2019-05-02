var connection = require("../conexion");

var CiudadModel = {};

// Listar ciudades
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
CiudadModel.getciudad = function(callback)
{
    if(connection){

        var sql = "SELECT id_ciudades"
                    +", nombre_cuidades"
                    +", prefijo_cuidades"
                    +" FROM ciudades"
                    +" ORDER BY id_ciudades;";

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

// Mostrar ciudad
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
CiudadModel.getOneCiudad = function(id, callback){
    if(connection){

        var sql = "SELECT id_ciudades"
            +", nombre_cuidades"
            +", prefijo_cuidades"
            +" FROM ciudades"
            +" WHERE id_ciudades = "
            + connection.escape(id)
            +" ORDER BY id_ciudades;";

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
CiudadModel.insertCiudad = function(CiudadData, callback){
    if(connection){
        var sql = "INSERT INTO ciudades SET ?";

        connection.query(sql, CiudadData, function(error,result){
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

// actualizar registro de ciudades
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
CiudadModel.updateCiudad = function(CiudadData, callback){
    if(connection){
        var sql = "UPDATE ciudades SET nombre_cuidades=" + connection.escape(CiudadData.nombre_cuidades)
        +", prefijo_cuidades=" + connection.escape(CiudadData.prefijo_cuidades)
        +" WHERE id_ciudades = " + connection.escape(CiudadData.id_ciudades) +";";

        console.log(sql);

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


module.exports = CiudadModel;