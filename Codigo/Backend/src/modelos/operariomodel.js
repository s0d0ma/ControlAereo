var connection = require("../conexion");

var OperarioModel = {};

// Listar operarios
// informacion reqerida : GET : none POST: none
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
//
OperarioModel.getAllOperarios = function(id, callback){
    if(connection){

        var sql = "SELECT"
        +", correo_operarios"
        +", fecha_nac_operarios"
        +", fecha_reg_operarios"
        +", id_operarios"
        +", nombre_operarios"
        +", sexo_operarios"
        +" FROM operarios"
        +" WHERE id_operarios = "
        + connection.espace(id)
        +" ORDER BY cedula_operarios;";

    }
}

module.exports = OperarioModel;