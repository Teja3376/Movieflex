const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/User');

const app = express();
app.use(express.json())
app.use(cors());

mongoose.connect("mongodb://localhost:27017/user")


app.post("/login",(req, res) => {

    const {email,password} = req.body;
    UserModel.findOne({email: email, password: password})
    .then(user => {
        if (user){
            if (user.password === password){
                res.json("success")
            }
            else{
                res.json("Incorrect password")
            }
        }
        else{
            res.json("User not found")
        }
    })
})

app.post('/person' , (req, res) => {
        UserModel.create(req.body)
        .then(user => res.json(user))
        .catch(err =>res.json(err))

})


app.listen(3001, () => {
    console.log("Server is running on port 3001")
})