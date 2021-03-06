const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
        title: { type: String, required:'Title is required above.', max: [128, 'Too long, max is 128 characters']},
        city: { type: String, required: 'City is required above.', lowercase: true },
        street: { type: String, required: 'Street is required above.', min: [4, 'Too short, min is 4 characters']},
        category: { type: String, required: 'Category is required above.', lowercase: true },
        image: { type: String, required:'image is required above.' },
        bedrooms: {type:Number,required:'Number of Bedrooms is required above.'},
        shared: Boolean,
        description: { type: String, required: 'Description is required above.' },
        dailyRate: Number,
        createdAt: { type: Date, default: Date.now },
        user:{type:Schema.Types.ObjectId,ref:'User'},
        bookings:[{type:Schema.Types.ObjectId,ref:'Booking'}]
},{collection: 'Rental'});

module.exports=mongoose.model('Rental',rentalSchema);


// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const rentalSchema = new Schema({
//   title: { type: String, required: true, max: [128, 'Too long, max is 128 characters']},
//   city: { type: String, required: true, lowercase: true },
//   street: { type: String, required: true, min: [4, 'Too short, min is 4 characters']},
//   category: { type: String, required: true, lowercase: true },
//   image: { type: String, required: true },
//   bedrooms: Number,
//   shared: Boolean,
//   description: { type: String, required: true },
//   dailyRate: Number,
//   createdAt: { type: Date, default: Date.now },
//   user: { type: Schema.Types.ObjectId, ref: 'User' },
//   bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }]
// },{collection:'Rental'});


// module.exports = mongoose.model('Rental', rentalSchema );