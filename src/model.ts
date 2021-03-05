import mongoose from 'mongoose';

const featureSchema = new mongoose.Schema({
    feature_name: String,
    feature_type: String,
    feature_description: String,
    feature_created_timestamp: String,
    feature_version: String,
    feature_owner: String,
    feature_data : Array
});

module.exports = mongoose.model('Feature', featureSchema);