const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log("App is listening at port 3001!")
});
