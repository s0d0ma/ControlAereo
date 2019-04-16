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

    return router;
}