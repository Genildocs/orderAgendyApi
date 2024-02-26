const mongoose = require("mongoose");
const moment = require("moment");

const ordemSchema = new mongoose.Schema({
  ordem: {
    type: Number,
    required: true,
    unique: true,
  },
  nome: {
    type: String,
    required: true,
  },
  status: String,
  city: {
    type: String,
    required: true,
  },
  periodo: {
    type: String,
    required: true,
  },
  horario: String,
  tecnico: {
    type: String,
    required: true,
    modalidade: {
      type: String,
    },
  },
  servico: {
    type: String,
    required: true,
  },
  tipoServico: {
    type: String,
    required: true,
    subTipo: {
      type: String,
      required: true,
    },
  },
  prioridade: {
    type: String,
    required: true,
  },
  criadoEm: {
    type: String,
    horario: moment().format("LLL"),
  },
  criadoPor: String,
});

const Ordem = mongoose.model("Ordem", ordemSchema);

module.exports = Ordem;
