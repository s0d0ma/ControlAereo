//obtenemos el modelo TipDocModel con toda la funcionalidad
var AvionModel = require('../modelos/avionmodel');
var express = require('express');
var router = express.Router();

module.exports = function(){
    //---------------------------------------------------------------
    //Muestra el método CRUL Listar que muestra todos los tipos de documentos
    router.get("/", function(req, res){
        AvionModel.getAvion(function (error, data)
        {
            res.status(200).json(data);
        });
    });

    //---------------------------------------------------------------
    // Muestra el metodo Mostrar un solo Avion por el id
    router.get("/:id", function(req, res){
        var id = req.params.id;
        if(!isNaN(id)){
            AvionModel.getOneAvion(id, function(error, data){
                
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
    // insertar nueva Avion
    router.post("/", function(req, res){
        var AvionData = {
            id_aviones: null,
            placa_aviones: req.body.placa_aviones,
            modelo_aviones: req.body.modelo_aviones,
            capacidad_aviones: req.body.capacidad_aviones,
            id_aerolineas_aviones: req.body.id_aerolineas_aviones,
            estado_aviones: req.body.estado_aviones,
            fecha_reg_aviones: req.body.fecha_reg_aviones
        };

        AvionModel.insertAvion(AvionData, function(error,data){
            if (data){
                res.status(200).json(data);
            }else{
                res.status(500).send({ error: "error" });
            }
        });
    });

    //---------------------------------------------------------------
    // actualizar informacion de Avion
    router.put("/", function(req, res){

        // objeto Avion
        var AvionData = {
            id_aviones: req.body.id_aviones,
            placa_aviones: req.body.placa_aviones,
            modelo_aviones: req.body.modelo_aviones,
            capacidad_aviones: req.body.capacidad_aviones,
            id_aerolineas_aviones: req.body.id_aerolineas_aviones,
            estado_aviones: req.body.estado_aviones,
            fecha_reg_aviones: req.body.fecha_reg_aviones
        }

        AvionModel.updateAvion(AvionData, function(error, data){
            if (data && data.msg){
                res.status(200).json(data);
            }else{
                res.status(500).send({error: "error"});
            }
        });
    });

    return router;
}