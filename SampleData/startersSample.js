let sample = [
    {
      name: "Hyderabadi Chicken 65",
      category: "Starter",
      description: "Spicy deep-fried chicken pieces marinated with yogurt and a blend of spices.",
      ingredients: ["chicken", "yogurt", "ginger", "garlic", "chili powder", "curry leaves"],
      cooking_method: "Frying",
      price: 8.99
    ,
      available: true,
    },
    {
      name: "Lukhmi",
      category: "Starter",
      description: "A savory pastry filled with spiced minced meat, deep-fried until golden and crispy.",
      ingredients: ["flour", "minced meat", "spices", "oil"],
      cooking_method: "Frying",
      price: 6.99
    ,
      available: true,
    },
    {
      name: "Mutton Shikampur Kebab",
      category: "Starter",
      description: "Minced mutton patties stuffed with spiced yogurt and deep-fried.",
      ingredients: ["mutton", "yogurt", "onions", "spices", "oil"],
      cooking_method: "Frying",
      price: 9.99
    ,
      available: true,
    },
    {
      name: "Paneer Tikka",
      category: "Starter",
      description: "Chunks of paneer marinated in spices and grilled to perfection.",
      ingredients: ["paneer", "yogurt", "spices", "bell peppers", "onions"],
      cooking_method: "Grilling",
      price: 7.99
    ,
      available: true,
    },
    {
      name: "Fish Amritsari",
      category: "Starter",
      description: "Batter-fried fish pieces seasoned with spices, served with mint chutney.",
      ingredients: ["fish", "gram flour", "spices", "lemon juice", "oil"],
      cooking_method: "Frying",
      price: 10.99
    ,
      available: true,
    },
    {
      name: "Vegetable Cutlet",
      category: "Starter",
      description: "Deep-fried patties made with mixed vegetables and spices.",
      ingredients: ["potatoes", "carrots", "peas", "breadcrumbs", "spices", "oil"],
      cooking_method: "Frying",
      price: 5.99
    ,
      available: true,
    },
    {
      name: "Haleem Kebabs",
      category: "Starter",
      description: "A variation of the traditional haleem, formed into patties and shallow-fried.",
      ingredients: ["meat", "lentils", "wheat", "ghee", "spices"],
      cooking_method: "Shallow frying",
      price: 7.49
    ,
      available: true,
    },
    {
      name: "Dahi Ke Kebab",
      category: "Starter",
      description: "Kebabs made from hung curd mixed with spices, coated in breadcrumbs, and deep-fried.",
      ingredients: ["hung curd", "breadcrumbs", "spices", "oil"],
      cooking_method: "Frying",
      price: 6.49
    ,
      available: true,
    },
    {
      name: "Chilli Paneer",
      category: "Starter",
      description: "Paneer cubes sautéed with bell peppers, onions, and a spicy sauce.",
      ingredients: ["paneer", "bell peppers", "onions", "soy sauce", "chili sauce"],
      cooking_method: "Sautéing",
      price: 8.49
    ,
      available: true,
    },
    {
      name: "Hyderabadi Mirchi Bajji",
      category: "Starter",
      description: "Green chilies stuffed with spiced potato mixture, dipped in gram flour batter, and deep-fried.",
      ingredients: ["green chilies", "potatoes", "spices", "gram flour", "oil"],
      cooking_method: "Frying",
      price: 5.49
    ,
      available: true,
    },
  ];
  

  sample = sample.map((el) => ({...el, price: Math.floor(el.price*83.26)}));

  export default sample;