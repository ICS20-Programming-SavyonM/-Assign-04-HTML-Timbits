// Copyright (c) 2023 Savyon All rights reserved
//
// Created by: Savyon
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays what the user has ordered and the total cost
 */
   function submitOrder() {
    // Retrieve the selected values from the dropdowns
    let timbitsPack = document.getElementById("timbits").options[document.getElementById("timbits").selectedIndex].text;
    let toppings = document.getElementById("toppings").selectedOptions;
    let secondToppings = document.getElementById("Secondtoppings").selectedOptions;
    let coffeeSize = document.getElementById("coffee").options[document.getElementById("coffee").selectedIndex].text;

    // Check if any selections are made
    if (timbitsPack === "Please select a size" && toppings.length === 0 && secondToppings.length === 0 && coffeeSize === "Please select a size") {
        // Display error message
        document.getElementById("summary").textContent = "Please select what you would like to order.";
    } else {
        // Create the order summary
        let orderSummary = "Timbits Pack: " + timbitsPack + "\n";
        orderSummary += "Toppings: ";
        for (let i = 0; i < toppings.length; i++) {
            orderSummary += toppings[i].text + ", ";
        }
        for (let j = 0; j < secondToppings.length; j++) {
            orderSummary += secondToppings[j].text + ", ";
        }
        orderSummary = orderSummary.slice(0, -2); // Remove the last comma and space
        orderSummary += "\n";
        orderSummary += "Coffee Size: " + coffeeSize;

        // Display the order summary
        document.getElementById("summary").textContent = orderSummary;
    }
}
