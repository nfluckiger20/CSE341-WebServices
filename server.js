const express = require('express');
const app = express();

const port =(process.env.PORT) || 8000;

app.use("/", require("./routes"));

app.listen(port, () => (
    console.log('server running on port ${port}')
))