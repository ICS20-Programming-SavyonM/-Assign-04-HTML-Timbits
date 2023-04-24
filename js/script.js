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
	// Get the selected values from the dropdown menus
	let timbits = document.getElementById("timbits").value;
	let toppings = document.getElementById("toppings").value;
	let coffee = document.getElementById("coffee").value;

	// Calculate the subtotal and total cost
	let subtotal = (timbits * 1) + (timbits * toppings) + (coffee * 1);
	let total = subtotal * 1.13;

	// Update the display each time the 
	document.getElementById("subtotal").innerHTML = "$" + subtotal.toFixed(2);
	document.getElementById("total").innerHTML = "$" + total.toFixed(2);
}

function submitOrder() {
	// Get the selected values from the dropdown menus
	let timbits = document.getElementById("timbits").value;
	let toppings = document.getElementById("toppings").options[document.getElementById("toppings").selectedIndex].text;
	let coffee = document.getElementById("coffee").options[document.getElementById("coffee").selectedIndex].text;

	// Create a summary of the order
	let summary = "<li>" + timbits + " Timbits with " + toppings + "</li>";
	summary += "<li>" + coffee + "</li>";

	// Update the display
	document.getElementById("summary").innerHTML = summary;
}
