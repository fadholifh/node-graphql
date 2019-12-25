const mongoose = require('mongoose');
const bluebird = require('bluebird');

mongoose.Promise = bluebird;

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name: {type: String, required: true},
    club: {type: String, required: true},
    position: {type: String, required: true},
    nationality: {type: String, required: true},
    createdAt: Date,
    updatedAt: Date
  });

playerSchema.pre('save', (next) => {
    let currentDate = new Date();
    this.updatedAt = currentDate;

    if(!this.createdAt){
        this.createdAt = currentDate;
    }

    next();
});

export default mongoose.model('players', playerSchema);