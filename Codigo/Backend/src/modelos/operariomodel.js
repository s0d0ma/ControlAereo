var connection = require("../conexion");

var OperarioModel = {};
/// cambiando esta mierda
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
                    +" ORDER BY nombre_operarios;";

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

module.exports = OperarioModel;