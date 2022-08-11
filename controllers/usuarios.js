const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  const { q, name } = req.query;
  res.json({
    ok: true,
    msg: "Request GET",
    q,
    name,
  });
};
const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body;
  res.json({
    ok: true,
    msg: "Request POST",
    nombre,
    edad,
  });
};
const usuariosDelete = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Request DELETE",
  });
};

const usuariosPut = (req, res = response) => {
  const { id } = req.params;

  res.json({
    ok: true,
    msg: "Request PUT",
    id,
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosDelete,
  usuariosPut,
};
