const mongoose = require("mongoose");

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
  criadoEm: {
    type: Date,
    default: Date.now,
  },
});

const Ordem = mongoose.model("Ordem", ordemSchema);

module.exports = Ordem;
