function makeSandwich(...items:string[]){
    console.log("/nMaking a Sandwich with the following items:/n");
    items.forEach(singleItem => console.log(singleItem));
    console.log("/n Now Enjoy Sandwich");
};
makeSandwich("Chicken", "Cheese", "Mayo");
makeSandwich("Bread", "Butter",);
makeSandwich("Boiled Egg", "Vegetable", "Bread");
