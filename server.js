const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const dotenv = require("dotenv");
dotenv.config()

const port =(process.env.PORT) || 8000;
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bodyparser.json());
app.use("/", require("./routes"));

app.listen(port, () => (
    console.log(`server running on port ${port}`)
))