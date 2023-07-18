const Validator = require('validator')
const isEmpty = require('is-empty')

const isInt = (value) => {
    return !isNaN(value) && !isNaN(parseInt(value, 10))
}

export const validateRecipeInput = (data) => {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : "";
    data.origin = !isEmpty(data.origin) ? data.origin : "";
    data.description = !isEmpty(data.description) ? data.description : "";
    data.difficulty = !isEmpty(data.difficulty) ? data.difficulty : 1;
    data.protein = !isEmpty(data.protein) ? data.protein : "";
    data.produce = !isEmpty(data.produce) ? data.produce : "";
    data.spice = !isEmpty(data.spice) ? data.spice : "";
    data.serves = !isEmpty(data.serves) ? data.serves : 1;
    data.stock = !isEmpty(data.stock) ? data.stock : "";
    data.cookingOil = !isEmpty(data.cookingOil) ? data.cookingOil : "";

    // name check
    if (!Validator.isLength(data.name,
        { min: 1, max: 40 })) {
        errors.name = "Name field invalid"
    }

    // origin check
    if (!Validator.isLength(data.origin,
        { min: 2, max: 2 })) {
        errors.origin = "Origin field invalid"
    }

    // description check
    if (!Validator.isLength(data.description,
        { min: 1, max: 250 })) {
        errors.description = "Description field invalid"
    }

    // protein check
    if (!Validator.isLength(data.protein,
        { min: 1, max: 15 })) {
        errors.protein = "protein field invalid"
    }

    // produce check
    if (!Validator.isLength(data.produce,
        { min: 1, max: 250 })) {
        errors.produce = "produce field invalid"
    }

    // difficulty check
    if (!isInt(data.difficulty)) {
        errors.difficulty = "difficulty field invalid"
    }

    // spice check
    if (!Validator.isLength(data.spice,
        { min: 1, max: 15 })) {
        errors.spice = "spice field invalid"
    }

    // cookingOil check
    if (!Validator.isLength(data.cookingOil,
        { min: 1, max: 15 })) {
        errors.cookingOil = "cookingOil field invalid"
    }

    // volumn check
    if (!isInt(data.volume)) {
        errors.volumn = "volumn field invalid"
    }

    // serves check
    if (!isInt(data.serves)) {
        errors.serves = "serves field invalid"
    }

    // authenticity check
    if (!Validator.isLength(data.authenticity,
        { min: 1, max: 15 })) {
        errors.authenticity = "authenticity field invalid"
    }

    // stock check
    if (!Validator.isLength(data.stock,
        { min: 1, max: 15 })) {
        errors.stock = "stock field invalid"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};