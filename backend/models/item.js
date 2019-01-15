'use strict'

import mongoose, { Schema } from 'mongoose'


// Model for the Item collection
const ItemSchema = new Schema({
        name: String,
        carbs: Number,
    }
);

export default mongoose.model('Item', ItemSchema);