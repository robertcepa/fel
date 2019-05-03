const foodMenu = ["pizza", "cake", "burger"];
const drinkMenu = ["cola", "beer", "water", "juice"];
const cart = [];

export const fetchFoodMenu = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(foodMenu);
    }, 6000);
  });
};

export const fetchDrinkMenu = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(drinkMenu);
    }, 4000);
  });
};

export const addFoodToCart = food => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (foodMenu.includes(food)) {
        cart.push(food);
        resolve(food);
      } else {
        reject("We don't have this meal in our menu.");
      }
    }, 1000);
  });
};

export const addDrinkToCart = drink => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (drinkMenu.includes(drink)) {
        cart.push(drink);
        resolve(drink);
      } else {
        reject("We don't have this drink in our menu.");
      }
    }, 1000);
  });
};

export const orderItems = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cart);
    }, 1000);
  });
};
