var vuelosModel = require('../modelos/vuelosmodel');
var express = require('express');
var router = express.Router();

module.exports = function(){

    router.get("/", function(req,res){
        vuelosModel.getVuelos(function(error, data){
            res.status(200).json(data);
        });
    });

    router.get("/:id", function(req, res){
        var id = req.params.id;

        if(!isNaN(id)){
            vuelosModel.getOneVuelo(id, function(error, data){
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
        var vueloData = {
            id_vuelos:null,
            fecha_reg_vuelos: req.body.fecha_reg_vuelos,
            avion_vuelos: req.body.avion_vuelos,
            operario_vuelos: req.body.operario_vuelos,
            rutas_vuelos: req.body.rutas_vuelos,
            estado_vuelos: req.body.estado_vuelos,
            hora_llegada_vuelos: req.body.hora_llegada_vuelos,
            hora_salida_vuelos: req.body.hora_salida_vuelos
        };
        
        vuelosModel.insertVuelo(vueloData, function(error, data){
            if (data){
                res.status(200).json(data);
            }else{
                res.status(500).send({ error: "error" });
            }
        });
    });

    router.put("/", function(req, res){
        var vueloData = {
            id_vuelos: req.body.id_vuelos,
            fecha_reg_vuelos: req.body.fecha_reg_vuelos,
            avion_vuelos: req.body.avion_vuelos,
            operario_vuelos: req.body.operario_vuelos,
            rutas_vuelos: req.body.rutas_vuelos,
            estado_vuelos: req.body.estado_vuelos,
            hora_llegada_vuelos: req.body.hora_llegada_vuelos,
            hora_salida_vuelos: req.body.hora_salida_vuelos
        };

        vuelosModel.updateRuta(vueloData, function(error, data){
            if (data && data.msg){
                res.status(200).json(data);
            }else{
                res.status(500).send({error: "error"});
            }
        });
    });

    // informe de vuelos registrados por operario por un rango de tiempo
    router.post("/informe1", function(req, res){
        var dataInforme1 = {
            id_operario : req.body.id_operario,
            fecha_inicio : req.body.fecha_inicio,
            fecha_final : req.body.fecha_final
        };

        vuelosModel.informe1(dataInforme1, function(error, data){
            if(typeof data !== 'undefined' && data.length > 0){
                res.status(200).json(data);
            }else{
                res.status(404).json({"msg":"no hay datos encontrados"});
            }
        });
    });

    // informe de vuelos registrados de una aerolinea por un rango de tiempo
    router.post("/informe2", function(req, res){
        var dataInforme2 = {
            id_aerolinea : req.body.id_aerolinea,
            fecha_inicio : req.body.fecha_inicio,
            fecha_final : req.body.fecha_final
        };

        vuelosModel.informe2(dataInforme2, function(error, data){
            if(typeof data !== 'undefined' && data.length > 0){
                res.status(200).json(data);
            }else{
                res.status(404).json({"msg":"no hay datos encontrados"});
            }
        });

    });

    return router;
};