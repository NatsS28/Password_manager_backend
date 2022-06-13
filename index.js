const express = require('express');
const path = require('path');
var cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const { encrypt, decrypt } = require('./Encrypt_DecryptHandler')

const PasswordRoute = require('./routes/passwordRoute')

app.use(cors());
app.use(express.json());

const connectDB = async () => {
    //mongoose.set('useFindAndModify', false);
    await mongoose.connect('mongodb+srv://user:user@cluster0.siqgv.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log("Connection Estabilsed successfully");
    });

}

connectDB();






 
const PORT = process.env.PORT || 9999;
//port connection

app.listen(PORT, () => {
    console.log("Server Started");
})

app.post("/decryptpassword", (req, res) => {
    res.send(decrypt(req.body));
});


app.use(PasswordRoute);