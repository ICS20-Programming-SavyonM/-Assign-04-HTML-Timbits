
function calculateOrder() {
    // Get the user input values
    let pack = parseInt(document.getElementById("pack").value);
    let toppings = document.getElementsByName("toppings");
    let coffee = parseFloat(document.getElementById("coffee").value);

    // Calculate the Timbits cost
    let timbitsCost = 0;
    if (pack === 10) {
        timbitsCost = 3.19;
    } else if (pack === 20) {
        timbitsCost = 4.99;
    } else if (pack === 50) {
        timbitsCost = 9.99;
    }
    timbitsCost += calculateToppingsCost(toppings);

    // Calculate the coffee cost
    let coffeeCost = coffee;

    // Calculate the subtotal and tax
    let subtotal = timbitsCost + coffeeCost;
    let tax = subtotal * 0.13;
    let total = subtotal + tax;

    // Display the order summary
    let orderSummary = "You ordered " + pack + " Timbits with toppings and a coffee size for $" + total.toFixed(2);
    document.getElementById("orderSummary").innerHTML = orderSummary;
}

function calculateToppingsCost(toppings) {
    let toppingsCost = 0;
    for (let i = 0; i < toppings.length; i++) {
        if (toppings[i].checked) {
            if (toppings[i].value === "chocolate") {
                toppingsCost += 0.02;
            } else if (toppings[i].value === "sprinkles") {
                toppingsCost += 0.01;
            } else if (toppings[i].value === "jam") {
                toppingsCost += 0.02;
            } else if (toppings[i].value === "caramel") {
                toppingsCost += 0.01;
            }
        }
    }
    return toppingsCost;
}