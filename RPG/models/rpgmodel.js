'use strict'
const moongose = require('mongoose');
const Schema = moongose.Schema;

const rpgmodel = new Schema({
    nome: {type: String,required: true},
    vida: {type: Number, required: true},
    classe:{ String, required: true},
    raca: {String, required: true},
    nivel:{Number, required: true},
    experiencia:{Number , required: true},

    forca: Number,
    destreza: Number,
    inteligencia: Number,
    carisma: Number,
});

module.exports = moongose.model('rpgmodel', rpgmodel);