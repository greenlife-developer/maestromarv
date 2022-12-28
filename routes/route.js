require("dotenv").config({
  path: "./config_files/.env",
});
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt")

const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;
const mongoClient = mongodb.MongoClient;

function getUser(userId, callBack) {
  database.collection("users").findOne(
    {
      _id: ObjectId(userId),
    },
    function (error, result) {
      if (error) {
        console.log(error);
        return;
      }
      if (callBack !== null) {
        callBack(result);
      }
    }
  );
}

const db = process.env.MONGO_URI;

mongoClient.connect(db, { useUnifiedTopology: true }, function (error, client) {
  if (error) {
    console.log(error);
    return;
  }
  console.log("MongoDB Connected...")
  database = client.db("MaestroMarv");

  router.get("/", (req, res) => {
    database
      .collection("sales")
      .find()
      .sort({
        createdAt: -1,
      })
      .toArray((err, sales) => {
        database.collection("cart").find().sort({
          createdAt: -1
        })
          .toArray((err, cart) => {
            res.json({
              sales: sales,
              cart: cart
            })
          })
      });
  });

  router.post("/products/shop", (req, res) => {
    const shop = req.body.formBody;
    database.collection("sales").insertOne(
      {
        ...shop,
      },
      (err, data) => {
        res.redirect("/?message=bought");
      }
    );
  });

  router.post("/products/add-to-cart", (req, res) => {
    const product = req.body.product;
    console.log(product);
    database.collection("cart").insertOne(
      {
        ...product,
      },
      (err, data) => {
        res.redirect("/product/view/:id/?message=added-to-cart");
      }
    );
  });

  router.post("/maestromarv/appointment", (req, res) => {
    const currentTime = new Date().getTime();
    database.collection("apppointments").insertOne({
      createdAt: currentTime,
      fName: req.body.appointment.fName,
      lName: req.body.appointment.lName,
      email: req.body.appointment.email,
      phone: req.body.appointment.phone,
      address: req.body.appointment.address,
      time: req.body.appointment.time,
      priority: req.body.appointment.priority,
      type: req.body.appointment.type,
      subject: req.body.appointment.subject,
      details: req.body.appointment.details,
    }, (err, data) => {
      console.log(data)
    })
  })

  router.post("/maestromarv/register", (req, res) => {

    console.log(req.body)
    database.collection("users").findOne(
      {
        email: req.body.regForm.email,
      },
      (err, user) => {
        if (user === null) {
          bcrypt.hash(req.body.regForm.password, 10, (err, hash) => {
            database.collection("users").insertOne(
              {
                firstName: req.body.regForm.fName,
                lastName: req.body.regForm.lName,
                email: req.body.regForm.email,
                number: req.body.regForm.phone,
                password: hash,
              },
              (err, data) => {
                console.log(err);
                res.redirect("/login?message=registered");
              }
            );
          });
        } else {
          res.redirect("/register?error=exists");
        }
      }
    );
  });

  router.post("/maestromarv/login", (req, res) => {
      const email = req.body.email;
      const password = req.body.password;

      database.collection("users").findOne(
          {
              email: email,
          },
          (err, user) => {
              if (user === null) {
                  res.redirect("/login?error=not_exists");
              } else {
                  bcrypt.compare(
                      password,
                      user.password,
                      (err, isPasswordVerify) => {
                          if (isPasswordVerify) {
                              req.session.user_id = user._id;
                              res.redirect("/");
                          } else {
                              res.redirect("/login?error=wrong_password");
                          }
                      }
                  );
              }
          }
      );
  });
});

module.exports = router;
