//obtenemos el modelo TipDocModel con toda la funcionalidad
var AerolineaModel = require('../modelos/aerolineamodel');
var express = require('express');
var router = express.Router();

module.exports = function(){
    //---------------------------------------------------------------
    //Muestra el método CRUL Listar que muestra todos los tipos de documentos
    router.get("/", function(req, res){
        AerolineaModel.getAerolineas(function (error, data)
        {
            res.status(200).json(data);
        });
    });

    //---------------------------------------------------------------
    // Muestra el metodo Mostrar un solo Aerolinea por el id
    router.get("/:id", function(req, res){
        var id = req.params.id;
        if(!isNaN(id)){
            AerolineaModel.getOneAerolinea(id, function(error, data){
                
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
    // insertar nueva Aerolinea
    router.post("/", function(req, res){
        var AerolineaData = {
            id_aerolineas: null,
            nombre_aerolineas: req.body.nombre_aerolineas,
            estado_aerolineas: req.body.estado_aerolineas,
            fecha_reg_aerolineas: req.body.fecha_reg_aerolineas
           
        };

        AerolineaModel.insertAerolinea(AerolineaData, function(error,data){
            if (data){
                res.status(200).json(data);
            }else{
                res.status(500).send({ error: "error" });
            }
        });
    });

    //---------------------------------------------------------------
    // actualizar informacion de Aerolinea
    router.put("/", function(req, res){

        // objeto Aerolinea
        var AerolineaData = {
            id_aerolineas: req.body.id_aerolineas,
            nombre_aerolineas: req.body.nombre_aerolineas,
            estado_aerolineas: req.body.estado_aerolineas,
            fecha_reg_aerolineas: req.body.fecha_reg_aerolineas
        }

        AerolineaModel.updateAerolinea(AerolineaData, function(error, data){
            if (data && data.msg){
                res.status(200).json(data);
            }else{
                res.status(500).send({error: "error"});
            }
        });
    });

    return router;
}