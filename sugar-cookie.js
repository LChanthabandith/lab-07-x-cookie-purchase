// input for the amount of customer cookie
var numCookies = prompt("How many cookies do you want to purchase?");

// input for discount code
var discountCode = prompt("Do you have a discount code? Enter '10OFF' for 10% off or '5OFF' for $5 off.");

// set prices for product, tax, and shipping
var pricePerCookie = 1.00;
var taxRate = 0.052;
var shippingCost = 3.99;

// calculate subtotal
var subtotal = numCookies * pricePerCookie;

// apply discount code
var discount = 0.0;
if (discountCode === "10OFF") {
  discount = subtotal * 0.1;
} else if (discountCode === "5OFF") {
  discount = 5.0;
}

// calculate total before tax and shipping
var totalBeforeTaxAndShipping = subtotal - discount;

// calculate tax
var tax = totalBeforeTaxAndShipping * taxRate;

// calculate total after tax
var totalAfterTax = totalBeforeTaxAndShipping + tax;

// calculate total after tax and shipping
var total = totalAfterTax;
if (totalAfterTax < 25.0) {
  total += shippingCost;
}

// write results to the page
document.write("<p>Number of cookies: " + numCookies + "</p>");
document.write("<p>Price per cookie: $" + pricePerCookie.toFixed(2) + "</p>");
document.write("<p>Discount: $" + discount.toFixed(2) + "</p>");
document.write("<p>Tax: $" + tax.toFixed(2) + "</p>");
document.write("<p>Shipping cost: $" + shippingCost.toFixed(2) + "</p>");
document.write("<p>Total cost: $" + total.toFixed(2) + "</p>");
