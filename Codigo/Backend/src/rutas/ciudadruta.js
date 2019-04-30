//obtenemos el modelo TipDocModel con toda la funcionalidad
var CiudadModel = require('../modelos/ciudadmodel');
var express = require('express');
var router = express.Router();

module.exports = function(){
    //---------------------------------------------------------------
    //Muestra el método CRUL Listar que muestra todos los tipos de documentos
    router.get("/", function(req, res){
        CiudadModel.getciudad(function (error, data)
        {
            res.status(200).json(data);
        });
    });

    //---------------------------------------------------------------
    // Muestra el metodo Mostrar un solo Ciudad por el id
    router.get("/:id", function(req, res){
        var id = req.params.id;
        if(!isNaN(id)){
            CiudadModel.getOneCiudad(id, function(error, data){
                
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
    // insertar nueva Ciudad
    router.post("/", function(req, res){
        var CiudadData = {
            id_ciudades: null,
            nombre_cuidades: req.body.nombre_cuidades,
            prefijo_cuidades: req.body.prefijo_cuidades
        };

        CiudadModel.insertCiudad(CiudadData, function(error,data){
            if (data){
                res.status(200).json(data);
            }else{
                res.status(500).send({ error: "error" });
            }
        });
    });

    //---------------------------------------------------------------
    // actualizar informacion de ciudad
    router.put("/", function(req, res){

        // objeto Avion
        var CiudadData = {
            id_ciudades: req.body.id_ciudades,
            nombre_cuidades: req.body.nombre_cuidades,
            prefijo_cuidades: req.body.prefijo_cuidades
        }

        CiudadModel.updateCiudad(CiudadData, function(error, data){
            if (data && data.msg){
                res.status(200).json(data);
            }else{
                res.status(500).send({error: "error"});
            }
        });
    });

    return router;
}