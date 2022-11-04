const { Schema, model } = require("mongoose")

const userSchema = Schema({
    firstName: {
        type: String,
        required: [true, "please enter your first name"],
        minLength: 4,
        maxLength: 25
    },
    lastName: {
        type: String,
        required: [true, "please enter your last name"],
        minLength: 4,
        maxLength: 5
    },
    email: {
        type: String,
        required: [true, "Email must be provided"],
        unique: true,
        validate: {
            validator: function(val){
                return val.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i)
            },
            message: "Please input a valid email address"
        }
    },
    password: {
        type: String,
        required: [true, "Provide a strong password character"]
    }
})

const Users = model("User", userSchema);

module.exports = Users
