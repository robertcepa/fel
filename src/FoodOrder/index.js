import React, { Component } from "react";
import * as api from "./api";

class FoodOrder extends Component {
  state = {
    totalTime: null,
    items: []
  };

  pickFood = menu => {
    return menu[Math.floor(Math.random() * menu.length)];
  };

  pickDrink = menu => {
    return menu[Math.floor(Math.random() * menu.length)];
  };

  buyDinner = async () => {
    const foodMenu = await api.fetchFoodMenu(); // ~6s ["pizza", "cake", "burger"]
    const drinkMenu = await api.fetchDrinkMenu(); // ~4s ["cola", "beer", "water", "juice"]

    const food = this.pickFood(foodMenu); // synchronous
    const drink = this.pickDrink(drinkMenu); // synchronous

    await api.addFoodToCart(food); // ~1s
    await api.addDrinkToCart(drink); // ~1s

    const myDinner = await api.orderItems(); // ~1s
    this.setState({ items: myDinner });
  };

  buyDinnerFaster = async () => {};

  async componentDidMount() {
    const t0 = performance.now();

    await this.buyDinner();
    //await this.buyDinnerFaster();

    const t1 = performance.now();

    this.setState({
      totalTime: ((t1 - t0) / 1000).toLocaleString(undefined, {
        maximumFractionDigits: 2
      })
    });
  }

  render() {
    const { totalTime, items } = this.state;
    return (
      <p style={{ textAlign: "center" }}>
        {totalTime
          ? `Finished ordering ${items.join(
              " and "
            )}. Total order time: ${totalTime}`
          : "Ordering some food..."}
      </p>
    );
  }
}

export default FoodOrder;
