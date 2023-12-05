/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  // Initialize an empty object to store category-wise totals
  const categoryTotals = {};

  // Loop through each transaction
  for (const transaction of transactions) {
    const { category, price } = transaction;

    // If category exists, add the price to its existing total
    if (categoryTotals.hasOwnProperty(category)) {
      categoryTotals[category] += price;
    } else {
      // Create a new category entry with the price
      categoryTotals[category] = price;
    }
  }

  // Convert the categoryTotals object to an array of objects
  const output = Object.keys(categoryTotals).map(category => ({
    category,
    totalSpent: categoryTotals[category],
  }));

  return output;
}
 



module.exports = calculateTotalSpentByCategory;
