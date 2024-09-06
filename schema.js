const joi = require("joi");

module.exports.listingSchema = joi.object({
    listing: joi.object({
        title: joi.string().required(),
        description: joi.string().required(),
        low_price: joi.number().required().min(0),
        high_price: joi.number().required().min(0),
        country: joi.string().required(),
        location: joi.string().required(),
        image: joi.string().allow("",null),
        general_total: joi.number().required().min(0),
        general_booked: joi.number().required().min(0),
        female_total: joi.number().required().min(0),
        female_booked: joi.number().required().min(0),
        cabin_total: joi.number().required().min(0),
        cabin_booked: joi.number().required().min(0),
    }).required(),
});

module.exports.reviewSchema = joi.object({
    review: joi.object({
        rating: joi.number().required().min(1).max(5),
        comment: joi.string().required(),
    }).required(),
});