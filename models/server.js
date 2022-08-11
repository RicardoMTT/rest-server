const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    //Middlewares
    this.middlewares();
    //Rutas
    this.routes();
  }

  middlewares() {
    //Directorio publico
    this.app.use(express.static("public"));
    this.app.use(cors());

    //La info que viene hacia el backend llegara en formato json
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("servidor corriendo", this.port);
    });
  }
}

module.exports = Server;
