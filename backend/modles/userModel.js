const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
        },
        pic:{
            type:String,
            // reuired:true,
            default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Favatar&psig=AOvVaw1S8cOvAgMYcCcvOKe8v4x1&ust=1705245009888000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCNDlsezS2oMDFQAAAAAdAAAAABAE",
        }
},
{
    timestamps:true  //It adds createdAt and updatedAt as fields in our schema
}
);

userSchema.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.pre("save", async function (next){
    if (!this.isModified){
        next()
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password ,salt);
});

const User= mongoose.model("User" , userSchema );
module.exports = User;

