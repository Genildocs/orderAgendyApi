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
    trim: true,
  },
  login: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Pendente",
  },
  city: {
    type: String,
    required: true,
  },
  rua: {
    type: String,
    required: true,
  },
  bairro: {
    type: String,
    required: true,
  },
  agendamento: {
    type: String,
    required: true,
  },
  periodo: {
    type: String,
    required: true,
  },
  servico: {
    type: String,
    required: true,
  },
  tipoServico: {
    type: String,
    required: true,
  },
  prioridade: {
    type: String,
    required: true,
  },
  observacao: {
    type: String,
    trim: true,
  },
  criadoEm: {
    type: String,
    default: moment().format("LLL"),
  },
  criadoPor: String,
});

const Ordem = mongoose.model("Ordem", ordemSchema);

module.exports = Ordem;
