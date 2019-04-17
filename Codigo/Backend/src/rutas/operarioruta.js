//obtenemos el modelo TipDocModel con toda la funcionalidad
var OperarioModel = require('../modelos/operariomodel');
var express = require('express');
var router = express.Router();

module.exports = function(){
    //---------------------------------------------------------------
    //Muestra el método CRUL Listar que muestra todos los tipos de documentos
    router.get("/", function(req, res){
        OperarioModel.getOperarios(function (error, data)
        {
            res.status(200).json(data);
        });
    });

    //---------------------------------------------------------------
    // Muestra el metodo Mostrar un solo operario por el id
    router.get("/:id", function(req, res){
        var id = req.params.id;
        if(!isNaN(id)){
            OperarioModel.getOneOperario(id, function(error, data){
                
                    // si existe el id lo mostramos en json
                    if(typeof data !== 'undefined' && data.length > 0){
                        res.status(200).json(data);
                    }else{
                        res.status(404).json({"msg":"Registro no Existe"});
                    }
            });
        }else{
            res.status(500).json({"msg":"error"});
        }
        
    });

    //---------------------------------------------------------------
    // insertar nuevo operario
    router.post("/", function(req, res){
        var OperarioData = {
            id_operarios: null,
            cedula_operarios: req.body.cedula_operarios,
            correo_operarios: req.body.correo_operarios,
            fecha_nac_operarios: req.body.fecha_nac_operarios,
            fecha_reg_operarios: req.body.fecha_reg_operarios,
            nombre_operarios: req.body.nombre_operarios,
            sexo_operarios: req.body.sexo_operarios
        };

        OperarioModel.insertOperarios(OperarioData, function(error,data){
            if (data){
                res.status(200).json(data);
            }else{
                res.status(500).send({ error: "error" });
            }
        });
    });

    //---------------------------------------------------------------
    // actualizar informacion de operario
    router.put("/", function(req, res){

        // objeto operario
        var OperarioData = {
            id_operarios: req.body.id_operarios,
            cedula_operarios: req.body.cedula_operarios,
            correo_operarios: req.body.correo_operarios,
            fecha_nac_operarios: req.body.fecha_nac_operarios,
            fecha_reg_operarios: req.body.fecha_reg_operarios,
            nombre_operarios: req.body.nombre_operarios,
            sexo_operarios: req.body.sexo_operarios
        }

        OperarioModel.updateOperario(OperarioData, function(error, data){
            if (data && data.msg){
                res.status(200).json(data);
            }else{
                res.status(500).send({error: "error"});
            }
        });
    });

    return router;
}