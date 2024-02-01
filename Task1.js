const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

//Adding Meat at the beginning
shoppingCart.unshift("Meat");

//Adding Sugar at the end
shoppingCart.push("Sugar");

//Remove Honey

shoppingCart.splice(4, 1);

//Modify Tea to Green Tea
shoppingCart.splice(3, 1, "Green Tea");
