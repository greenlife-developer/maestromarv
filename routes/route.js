require("dotenv").config({
  path: "./config_files/.env",
});
const sgMail = require("@sendgrid/mail");
const express = require("express");
const router = express.Router();
sgMail.setApiKey(process.env.MAIL_KEY);
const bcrypt = require("bcrypt");
const pdfTemplate = require("../documents");


const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;
const mongoClient = mongodb.MongoClient;

const db = process.env.MONGO_URI;

mongoClient.connect(db, { useUnifiedTopology: true }, function (error, client) {
  if (error) {
    return;
  }
  console.log("MongoDB Connected...");
  database = client.db("MaestroMarv");

  function getUser(userId, callBack) {
    database.collection("users").findOne(
      {
        _id: ObjectId(userId),
      },
      function (error, result) {
        if (error) {
          return;
        }
        if (callBack !== null) {
          callBack(result);
        }
      }
    );
  }

  router.get("/", (req, res) => {
    if (req.session.user_id) {
      getUser(req.session.user_id, (user) => {
        database
          .collection("sales")
          .find()
          .sort({
            createdAt: -1,
          })
          .toArray((err, sales) => {
            database
              .collection("cart")
              .find()
              .sort({
                createdAt: -1,
              })
              .toArray((err, cart) => {
                database.collection("products")
                  .find()
                  .sort({
                    createdAt: -1
                  })
                  .toArray((err, product) => {
                    res.json({
                      isLogin: true,
                      user: user,
                      sales: sales,
                      products: product,
                      cart: cart,
                    });
                  })
              });
          });
      });
    } else {
      res.json({
        error: "Please login",
        isLogin: false,
      });
    }
  });

  router.post("/products/shop", (req, res) => {
    const shop = req.body.formBody;
    const currentTime = new Date().getTime()
    if (("session shop", req.session.user_id)) {
      getUser(req.session.user_id, (user) => {
        database.collection("sales").insertOne(
          {
            ...shop,
            user,
            createdAt: currentTime
          },
          (err, data) => {
            res.redirect("/?message=bought");
          }
        );
      });
    } else {
      res.status(301).json({
        error: "Please login to be able to perform this action",
      });
    }
  });

  router.post("/shop/edit/:id", async (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    if (req.session.user_id) {
      // const result = await database
      //   .collection("sales")
      //   .findOne({ _id: ObjectId(req.params.id) });
      getUser(req.session.user_id, (user) => {
        if (user.email === "yemijoshua81@gmail.com") {
          const newValue = { $set: { message: req.body.message, percent: req.body.percent } };
          // db.collection.update({_id: req.body.id},{$set:{status: 1}}, function(err,doc){})
          console.log(newValue)
          database
            .collection("sales")
            .updateOne({ _id: ObjectId(req.params.id) }, newValue, function (err, data) {
              if (err) throw err;
              console.log(data)
            });
        } else {
          res.send("<h1>Only the owner of the store can edit products <a href=/login > Please login as owner</a> </h1>");
        }
      })
    } else {
      res.redirect("/login?error=need_login")
    }
  })

  router.post("/products/add-to-cart", (req, res) => {
    const product = req.body.cart;
    console.log(product)
    if (req.session.user_id) {
      getUser(req.session.user_id, (user) => {
        database.collection("cart").insertOne(
          {
            ...product,
            user: user,
            isLogin: true
          },
          (err, data) => {
            res.redirect("/product/view/:id/?message=added-to-cart");
          }
        );
      });
    } else {
      res.status(301).json({
        error: "Please login to be able to perform this action",
        isLogin: false
      });
    }
  });

  router.post("/maestromarv/appointment", (req, res) => {
    const currentTime = new Date().getTime();
    const user = {
      name: req.body.appointment.fName + " " + req.body.appointment.lName,
      phone: req.body.appointment.phone,
      address: req.body.appointment.address,
      details: req.body.appointment.details,
      date: req.body.appointment.time,
      subject: req.body.appointment.subject,
      priority: req.body.appointment.priority
    }
    database.collection("apppointments").insertOne(
      {
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
      },
      (err, data) => {
        const emailData = {
          from: "maestromarve@gmail.com",
          to: ["yemijoshua81@gmail.com", "yemijoshua89@gmail.com", "maestromarve@gmail.com", req.body.appointment.email],
          subject: "A new appointmemt",
          html: `${pdfTemplate(user)}`,
        };

        sgMail
          .sendMultiple(emailData)
          .then((sent) => {
            return res.json({
              message: `Email has been sent!`,
            });
          })
          .catch((err) => {
            console.log(err, "Not allowed");
          });
      }
    );
  });

  router.post("/maestromarv/register", (req, res) => {
    database.collection("users").findOne(
      {
        email: req.body.email,
      },
      (err, user) => {
        if (user === null) {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            database.collection("users").insertOne(
              {
                firstName: req.body.fName,
                lastName: req.body.lName,
                address: req.body.address,
                email: req.body.email,
                number: req.body.phone,
                password: hash,
              },
              (err, data) => {
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

    console.log(req.body)

    database.collection("users").findOne(
      {
        email: email,
      },
      (err, user) => {
        if (user === null) {
          res.redirect("/login?error=not_exists");
        } else {
          bcrypt.compare(password, user.password, (err, isPasswordVerify) => {
            if (isPasswordVerify) {
              req.session.user_id = user._id;
              res.redirect('back')
            } else {
              res.redirect("/login?error=wrong_password");
            }
          });
        }
      }
    );
  });

  router.post("/new-product", (req, res) => {

    if (req.session.user_id) {
      getUser(req.session.user_id, (user) => {
        database.collection("products").insertOne(
          {
            name: req.body.productName,
            description: req.body.description,
            specification: req.body.specification,
            category: req.body.category,
            price: req.body.price,
            img: req.body.url,
            img1: req.body.img1,
            img2: req.body.img2,
            color: req.body.color,
            rating: req.body.rating,
            sold: req.body.sold,
            subprice: req.body.slprice,
            user: user,
            isLogin: true
          },
          (err, data) => {
            res.redirect("/product/");
          }
        );
      });
    } else {
      res.status(301).json({
        error: "Please login to be able to perform this action",
        isLogin: false
      });
    }
  });

  router.get("/new-product", (req, res) => {
    database.collection("products")
      .find()
      .sort({
        createdAt: -1
      })
      .toArray((err, product) => {
        res.json({
          products: product
        });
      })
  });

  router.post("/new-product/edit/:id", async (req, res) => {
    if (req.session.user_id) {
      const result = await database
        .collection("products")
        .findOne({ _id: ObjectId(req.params.id) });
      getUser(req.session.user_id, (user) => {
        if (user.email === "maestromarve@gmail.com" || user.email === "yemijoshua80@gmail.com") {
          const newvalues = {
            $set: {
              name: req.body.productName,
              description: req.body.description,
              specification: req.body.specification,
              category: req.body.category,
              price: req.body.price,
              img: req.body.url,
              img1: req.body.img1,
              img2: req.body.img2,
              color: req.body.color,
              rating: req.body.rating,
              sold: req.body.sold,
              subprice: req.body.slprice,
              user: user,
              isLogin: true
            }
          };
          database
            .collection("products")
            .updateMany({ _id: ObjectId(req.params.id) }, newvalues, function (err, data) {
              if (err) throw err;
              res.redirect("/products?success=new_update")
            });
        } else {
          res.send("<h1>Only the owner of the store can edit products <a href=/login > Please login as owner</a> </h1>");
        }
      })
    } else {
      res.redirect("/login?error=need_login")
    }
  })


  router.get("/logout", (req, res) => {
    req.session = null;
    res.redirect("/");
  });

});

module.exports = router;
