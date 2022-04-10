const express = require("express");
const port = 3000

const loginRoute = require("./routes/login");

const app = express();
app.set("view engine", "ejs");

app.use(loginRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
