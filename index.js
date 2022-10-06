const express = require("express");
const path = require("path")

const app = express();


// app.use("/", require("./routes/image"));
app.use('/api', require("./routes/route"));

// --------------------------deployment------------------------------

if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging") {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// --------------------------deployment------------------------------

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server has started on port", PORT)
})