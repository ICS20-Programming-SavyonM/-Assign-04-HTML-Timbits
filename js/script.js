function calculateTotal() {
	// Get the selected values from the dropdown menus
	var timbits = document.getElementById("timbits").value;
	var toppings = document.getElementById("toppings").value;
	var coffee = document.getElementById("coffee").value;

	// Calculate the subtotal and total cost
	var subtotal = (timbits * 1) + (timbits * toppings) + (coffee * 1);
	var total = subtotal * 1.13;

	// Update the display
	document.getElementById("subtotal").innerHTML = "$" + subtotal.toFixed(2);
	document.getElementById("total").innerHTML = "$" + total.toFixed(2);
}

function submitOrder() {
	// Get the selected values from the dropdown menus
	var timbits = document.getElementById("timbits").value;
	var toppings = document.getElementById("toppings").options[document.getElementById("toppings").selectedIndex].text;
	var coffee = document.getElementById("coffee").options[document.getElementById("coffee").selectedIndex].text;

	// Create a summary of the order
	var summary = "<li>" + timbits + " Timbits with " + toppings + "</li>";
	summary += "<li>" + coffee + "</li>";

	// Update the display
	document.getElementById("summary").innerHTML = summary;
}
