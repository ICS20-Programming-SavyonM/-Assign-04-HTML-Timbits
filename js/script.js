// Copyright (c) 2023 Savyon All rights reserved
//
// Created by: Savyon
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays what the user has ordered and the total cost
 */
   function calculateTotal() {
    // Retrieve the selected values from the dropdowns
    let timbitsPrice = parseFloat(document.getElementById("timbits").value);
    let coffeePrice = parseFloat(document.getElementById("coffee").value);
    let toppings = document.getElementById("toppings").selectedOptions;
    let secondToppings = document.getElementById("Secondtoppings").selectedOptions;

    let toppingsTotal = 0;
    let secondToppingsTotal = 0;

    // Calculate the total cost for selected toppings
    for (let i = 0; i < toppings.length; i++) {
        toppingsTotal += parseFloat(toppings[i].value);
    }

    // Calculate the total cost for selected second toppings
    for (let j = 0; j < secondToppings.length; j++) {
        secondToppingsTotal += parseFloat(secondToppings[j].value);
    }

    // Calculate the subtotal and total cost
    let subtotal = timbitsPrice + coffeePrice + toppingsTotal + secondToppingsTotal;
    let total = subtotal * 1.13; // Add 13% tax

    // Update the display with dollar signs
    document.getElementById("subtotal").textContent = "$" + subtotal.toFixed(2);
    document.getElementById("total").textContent = "$" + total.toFixed(2);
}

function submitOrder() {
  
    // Retrieve the selected values from the dropdowns
    let timbitsPack = document.getElementById("timbits").options[document.getElementById("timbits").selectedIndex].text;
    let toppings = document.getElementById("toppings").selectedOptions;
    let secondToppings = document.getElementById("Secondtoppings").selectedOptions;
    let coffeeSize = document.getElementById("coffee").options[document.getElementById("coffee").selectedIndex].text;

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
