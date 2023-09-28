const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const dotenv = require("dotenv");
dotenv.config()

const port =(process.env.PORT) || 8000;

app.use(bodyparser.json());
app.use("/", require("./routes"));

app.listen(port, () => (
    console.log(`server running on port ${port}`)
))