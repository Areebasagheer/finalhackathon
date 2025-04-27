import mongoose from "mongoose"
const subTodoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        defult: false
    },
    createdBy: {
        tyope: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

},
{timestamps: true}
);
export const todo = mongoose.model('Todo', todoSchema)
