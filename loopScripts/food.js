"use strict"


    function getMealCost(orders) {
        let sum = 0;
        let numOrders = orders.length;
        for(let i = 0; i < numOrders; i++) {
        sum += orders[i].price;
        }
        let subTotal = sum
        console.log(subTotal)
        return sum;
    }

    let lunch = [
        {item: "Steak Fajitas", price: 9.95},
        {item: "Chips and Guacamole", price: 5.25},
        {item: "Sweet Tea", price: 2.79}
        ]
   let mealCost= getMealCost()
    totalWithTip =( mealCost * 1.18).toFixed();
    console.log(totalWithTip)