const Food = require('./model');

// Creates a food 
const createFood = function (req, res, next) {
  
  const {
    name,
    type
  } = req.body;

  const food = new Food({
    name,
    type,
  });

  // TODO: This should trigger restaurant's type
  food
    .save()
    .exec()
    .then(food => res.json(food))
    .catch(err => next(err));
};

const getAllFood = function (req, res, next) {
  const {
    id,
  } = req.query;

  // If id is present get Particular item
  if (id) {
    Food
      .findById(id)
      .exec()
      .then(food => res.json(food))
      .catch(err => next(err));
  } else {
  // If no id then get all
    Food
      .find()
      .exec()
      .then(food => res.json(food))
      .catch(err => next(err));
  }
};

// Deletes Food By id
const deleteFoodById = function (req, res, next) {

  const {
    id
  } = req.query;

  // Remove the element by Id
  Food
    .findByIdAndRemove(id)
    .exec()
    .then(() => res.json({
      success: true,
    }))
    .catch(err => next(err));
    
};

// Updates Food By id
const updateFoodById = function (req, res, next) {
  const {
    foodId,
  } = req.params;

  Food
    .findByIdAndUpdate(foodId, req.body)
    .exec()
    .then(food => res.json(food))
    .catch(err => next(err));

};

module.exports = {
  createFood,
  getAllFood,
  deleteFoodById,
  updateFoodById,
};