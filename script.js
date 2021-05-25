function pizzaOven(crustType,sauceType,cheeses,toppings){
    var pizza ={};
        pizza.crustType =crustType,
        pizza.sauceType = sauceType,
        pizza.cheeses =  cheeses,
        pizza.toppings = toppings
        return pizza;
}

    var pizza = pizzaOven("deep dish", "traditional", ["mozzarella"],["pepperoni", "sausage"]);
    var pizza1 = pizzaOven("hand tossed","marinara",["mozzarella", "feta"],["mushrooms", "olives", "onions"]);
    var pizza2 = pizzaOven("ultra thin", "pepper sauce", ["Cheddar","Provolone"],["olives", "onions","chicken"]);
    var pizza3 = pizzaOven("Flatbread Crust","White sauce",["Parmesan" ,"Provolone"],["pepperoni"]);

    var arrpizza=[pizza,pizza1,pizza2,pizza3];


function randomPizza(){
    var index = Math.floor(Math.random()*4); 
    var pizzaType = arrpizza[index];
    console.log(pizzaType);
}

randomPizza();