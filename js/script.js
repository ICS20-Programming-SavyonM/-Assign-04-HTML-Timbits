function calculateCost() {
  const timbitsPack = document.getElementById("timbitsPack").value;
  const toppings = document.querySelectorAll('input[name="toppings"]:checked');
  const coffeeSize = document.getElementById("coffeeSize").value;

  let toppingsCost = 0;
  toppings.forEach((topping) => {
    const toppingCost = parseFloat(topping.value);
    toppingsCost += toppingCost;
  });

  const timbitsCost = parseFloat(timbitsPack) * (toppingsCost + 0.01);
  const coffeeCost = parseFloat(coffeeSize);
  const subtotal = timbitsCost + coffeeCost;
  const tax = 0.13 * subtotal;
  const total = subtotal + tax;

  const orderSummary = `Your order: ${timbitsPack} Timbits with ${toppings.length} toppings and a ${coffeeSize} coffee`;
  const subtotalDisplay = `Subtotal: $${subtotal.toFixed(2)}`;
  const totalDisplay = `Total (including tax): $${total.toFixed(2)}`;

  document.getElementById("orderSummary").textContent = orderSummary;
  document.getElementById("orderTotal").textContent = `${subtotalDisplay}\n${totalDisplay}`;
}
