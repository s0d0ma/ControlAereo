var rutaModel = require('../modelos/rutamodel');
var express = require('express');
var router = express.Router();

module.exports = function(){

    router.get("/", function(req,res){
        rutaModel.getRutas(function(error, data){
            res.status(200).json(data);
        });
    });

    router.get("/:id", function(req,res){
        var id = req.params.id;

        if(!isNaN(id)){
            rutaModel.getOneRuta(id, function(error, data){
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

    router.post("/", function(req, res){
        var rutaData = {
            id_rutas: null,
            ciudad_origen_rutas: req.body.ciudad_origen_rutas,
            ciudad_destino_rutas: req.body.ciudad_destino_rutas,
            estado_rutas: req.body.estado_rutas
        };

        rutaModel.insertRuta(rutaData, function(error, data){
            if (data){
                res.status(200).json(data);
            }else{
                res.status(500).send({ error: "error" });
            }
        });
    });

    router.put("/", function(req, res){
        var rutaData = {
            id_rutas: req.body.id_rutas,
            ciudad_origen_rutas: req.body.ciudad_origen_rutas,
            ciudad_destino_rutas: req.body.ciudad_destino_rutas,
            estado_rutas: req.body.estado_rutas
        };

        rutaModel.updateRuta(rutaData, function(error, data){
            if (data && data.msg){
                res.status(200).json(data);
            }else{
                res.status(500).send({error: "error"});
            }
        });
    });

    return router;
};