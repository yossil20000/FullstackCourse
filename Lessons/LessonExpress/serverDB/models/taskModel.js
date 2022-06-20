const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
    userId: {},
    id: Number,
    title: String,  
    completed: Boolean
})

// validations
    // id: {type: Number, min:[1, 'Too few'], max: [10000, 'worng id'], unique: true},
    // title: {type: String, required: true, minLength: 3, maxLength: 400, 
    // trim: true,
//     enum: values:['home', 'work']
// message: {VALUE} is not supported}}

// email: {
//     type: String,
//     match: [
//       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\. 
//    [0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//       'Please add a valid email address.',
//     ]

// custom validation
// validate: {
//     validator: (arr) => {
//         return arr.length > 2
//    },
//    message: 'You must provide more than 2 locations.'
// }
    

//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now() },

// });
let Task = mongoose.model('Task', TaskSchema);
module.exports = Task;
