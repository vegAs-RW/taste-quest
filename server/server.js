const express = require ('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.get('/recipe', (req,res) => {
    res.send("Je fonctionne")
})

const PORT = process.env.APP_PORT;
const HOST = process.env.APP_HOST;
app.listen(PORT, () => {
    console.log(`Serveur is listening on http://${HOST}:${PORT}`);
})