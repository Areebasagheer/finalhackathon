import mongoose, { Schema } from "mongoose"

const projectSchema = new Schema({
    projectFile: {
        type: String,
        required: true
    },
    thumbnails: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
        
    },
    views: {
        type: Number,
        default: 0
    },
    isPublic: {
        type: Boolean,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
            
        
    },




       {
        timestamos: true
       }

)


export const Project = mongoose.model("Project", projectSchema)