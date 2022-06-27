const db = require("../models");
const config = require("../config/auth.config");
const Orden = db.orden;
const Producto = db.producto;
const Op = db.Sequelize.Op;

exports.createOrden = (req, res) => {
    // Save User to Database
    Orden.create({
      total: req.body.total,
      subtotal: req.body.subtotal,
      iva: req.body.iva,
    })
      .then(orden => {
        if (req.body.productos) {
          Producto.findAll({
            where: {
              id: {
                [Op.or]: req.body.productos
              }
            }
          }).then(productos => {
            orden.setProductos(productos).then(() => {
              res.send({ message: "Orden Creada con exito!" });
            });
          });
        }
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.getallo = (req, res) => {
    // Save User to Database
    Orden.findAll({ include: Producto })
      .then(orden => {
            res.send(orden);
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.deleteByIdorden = (req, res) => {
    // Save User to Database
    Orden.destroy({ where: { id: req.params.id } })
        .then(orden => {
            res.send({ message: "Orden eliminada!" });
        })
        .catch((error) => {
            console.log(error);
        });
    };