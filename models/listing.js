const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const { number } = require("joi");

// To create a schema 
const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    }, 
    description: String,
    image: {
       url: String,
       filename: String,
    },
    low_price: Number,
    high_price: Number,
    location: String,
    country: String,
    general_total: {
        type: Number,
        required: true,
    },
    general_booked: {
        type: Number,
        default: 0,
    },
    female_total: {
        type: Number,
        required: true,
    },
    female_booked: {
        type: Number,
        default: 0,
    },
    cabin_total: {
        type: Number,
        required: true,
    },
    cabin_booked: {
        type: Number,
        default: 0,
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if(listing) {
        await Review.deleteMany({ _id: {
            $in: listing.reviews }});
    }
});

//using this schema create a model
const Listing =mongoose.model("Listing", listingSchema);

// To export listing
module.exports = Listing;