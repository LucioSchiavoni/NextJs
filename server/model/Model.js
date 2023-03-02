import mongoose from "mongoose";
const Schema = mongoose.Schema

const schemaDB = new Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            require: true,
            trim: true
        },
        edad: {
            type: Number,
            require: true,
            trim: true
        },
        ubicacion: {
            type: String,
            required: true,
            trim: true
        }

    },
    { colletion: 'luciodb' }

)


export default mongoose.model("Model", schemaDB);