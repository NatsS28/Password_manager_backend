const Password = require('../model/password');
const mongoose = require("mongoose");
const { encrypt, decrypt } = require('../Encrypt_DecryptHandler');


const postPassword = (req, res, next) => {
    const password = req.body.password;
    const hashedPassword = encrypt(password);

    const pass = new Password({
        title: req.body.title,
        password: hashedPassword.password,
        iv: hashedPassword.iv
    });

    pass
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Password updated"
            });
        })
        .catch(err => {
            res.status(500).json({
                message: err
            });
        });
}

const showAllPasswords = (req, res, next) => {
     
    Password.find()
        .then(result => {
            console.log(result);
            res.status(201).json({
                data:result,
                message: "Result Shown"
            });
        })
        .catch(err => {
            res.status(500).json({
                message: err
            });
        });
}


const decryptedPassword = (req, res, next) => {
    console.log("ss");
    res.send(decrypt(req.body));
}


module.exports = {
    postPassword,showAllPasswords,decryptedPassword
}