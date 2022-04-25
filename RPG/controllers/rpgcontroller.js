'use strict'
const moongose = require('mongoose');
const rpgmodel = moongose.model('rpgmodel');


//GET ALL
exports.listar_rpg = function(req, res){
    rpg.find ({}, function(err, rpg){
        if (err) res.send(err);
        res.json(rpg);
    });   
};

//GET ID
exports.listar_um_rpg = function(req, res){
    rpg.find ({"_id": req.params.rpgid}, function(err, personagem){
        if (err) res.send(err);
        res.json(personagem);
    });   
};

//POST

exports.adciona_rpg = function(req, res){
    var novo_rpg = new rpg(req.body);
    novo_rpg.save(function(err, rpg){
        if (err) res.send(err);
        res.json(rpg);
    });
}


exports.atualiza_rpg = function(req, res){
    rpg.findOneAndUpdate({_id: req.params.rpgid}, req.body, {new: true}, function(err, rpg){
        if (err) res.send(err);
        res.json(rpg);
    });
}