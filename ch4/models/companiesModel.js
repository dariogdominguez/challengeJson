const mongoose = require("mongoose");
const { Schema } = mongoose;

const companySchema = new mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    users:[{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
});

module.exports = mongoose.model("Company", companySchema);