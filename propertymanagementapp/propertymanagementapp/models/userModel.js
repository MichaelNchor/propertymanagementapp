// User Schema
const UserSchema = {
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Number,
    },
    image: {
        type: String,
    },
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    mobileno: {
        type: String,
    },
    country: {
        type: String,
    },
    dob: {
        type: String,
    },
    address: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
};

var User = module.exports = UserSchema;