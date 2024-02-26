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
  login: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    default: "Pendente",
  },
  city: {
    type: String,
    required: true,
  },
  endereco: String,
  agendamento: String,
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
