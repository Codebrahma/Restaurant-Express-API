const Restaurant = require('./model');
const filter = require('lodash/filter');
const findIndex = require('lodash/findIndex');
const pick = require('lodash/pick');
const map = require('lodash/map');

// Get Restaurants by type
const getRestaurantsByType = function (req, res, next) {
  const {
    type,
  } = req.params;

  Restaurant
    .find()
    .populate('foods.food')
    .exec()
    .then(restaurants => {
      // Filters restaurant which are of required type
      const filteredRestaurants = filter(restaurants, ({ foods }) => {
        return (findIndex(foods, ({ food }) => food.type === type) !== -1);
      });
      // returns all restaurants id, name and details
      console.log('filtered restaurants ', filteredRestaurants)
      res.json(map(filteredRestaurants, restaurant => pick(restaurant, ['_id', 'name', 'details', 'foods'])));
    })
    .catch(e => next(e));
};

// Gets all restaurants with food or gets restaurant food
const getAllRestaurants = function (req, res, next) {
  const {
    id,
  } = req.query;
  
  if (id) {
    Restaurant
      .findById(id)
      .populate('foods.food')
      .exec()
      .then(restaurants => res.json(restaurants))
      .catch(e => next(e));
  } else {
    Restaurant
      .find()
      .populate('foods.food')
      .exec()
      .then(restaurants => res.json(restaurants))
      .catch(e => next(e));
  }
};

// Creates a new restaurant 
const createRestaurant = function (req, res, next) {
  const {
    name,
    details,
  } = req.body;

  const restaurant = new Restaurant({
    name,
    details,
    foods: [],
  });

  restaurant
    .save()
    .then(restaurants => res.json(restaurants))
    .catch(e => next(e));
};

// Deletes a Restaurant
const deleteRestaurant = function (req, res, next) {
  const {
    id,
  } = req.body;

  Restaurant
    .findByIdAndRemove(id)
    .then(() => res.json({ success: true }))
    .catch(e => next(e));
  
};

// Adds a food to restaurant and creates a link to Food Model
const addFoodToRestaurant = function (req, res, next) {
  const {
    restaurantId,
    foodId,
    price,
  } = req.body;
  Restaurant
    .findByIdAndUpdate(restaurantId, {
      $push: {
        foods: {
          food: foodId,
          price,
          active: false,
        }
      },
      
    })
    .exec()
    .then(restaurant => res.json(restaurant))
    .catch(e => next(e));
  
};

module.exports = {
  createRestaurant,
  getAllRestaurants,
  getRestaurantsByType,
  deleteRestaurant,
  addFoodToRestaurant,
};