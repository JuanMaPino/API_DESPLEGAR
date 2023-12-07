const mongoose = require("mongoose");

const beneficiarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
    },
    telefono: {
        type: Number,
        required: true,
    },
    numero_familiares: {
        type: Number,
        required: true,
    },
    documento: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model("beneficiarios", beneficiarioSchema);