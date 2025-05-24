const menuData = {
  main: [
    {
      id: 1,
      name: "Filet Mignon",
      description:
        "8oz premium cut with truffle mashed potatoes and seasonal vegetables",
      price: 32.99,
      image:
        "https://images.unsplash.com/photo-1569229490681-4085b3f54ba3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RlYWslMjBkaXNofGVufDB8fDB8fHww",
    },

    {
      id: 2,
      name: "Grilled Salmon",
      description:
        "Atlantic salmon with lemon butter sauce, asparagus, and wild rice",
      price: 26.5,
      image:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      name: "Mushroom Risotto",
      description:
        "Creamy arborio rice with wild mushrooms, white wine, and parmesan",
      price: 19.99,
      image:
        "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
    {
      id: 4,
      name: "Herb-Crusted Rack of Lamb",
      description: "New Zealand lamb with mint jus and roasted root vegetables",
      price: 34.99,
      image:
        "https://images.unsplash.com/photo-1677051707481-d0d4447ccd6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN0ZWFrJTIwZGlzaHxlbnwwfHwwfHx8MA%3D%3D",
    },

    {
      id: 5,
      name: "Grilled Chicken Breast",
      description:
        "Juicy grilled chicken served with garlic butter sauce and a side of steamed vegetables",
      price: 21.49,
      image:
        "https://images.unsplash.com/photo-1676300185579-ed2b14891d82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0ZWFrJTIwZGlzaHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ],
  dessert: [
    {
      id: 5,
      name: "Chocolate Soufflé",
      description: "Warm chocolate soufflé with vanilla bean ice cream",
      price: 12.5,
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80",
    },
    {
      id: 6,
      name: "Crème Brûlée",
      description: "Classic vanilla bean custard with caramelized sugar crust",
      price: 10.99,
      image:
        "https://images.unsplash.com/photo-1623888884968-b5a895f882dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fERlc3NlcnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 7,
      name: "Tiramisu",
      description: "Layers of coffee-soaked ladyfingers and mascarpone cream",
      price: 11.25,
      image:
        "https://images.unsplash.com/photo-1588195542907-a0c0a2ac3312?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fERlc3NlcnR8ZW58MHx8MHx8fDA%3D",
    },
  ],
  beverage: [
    {
      id: 8,
      name: "Signature Cocktail",
      description: "House special with gin, elderflower, and fresh citrus",
      price: 14.0,
      image:
        "https://plus.unsplash.com/premium_photo-1671088575920-09f2a5970574?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGJldmVyYWdlfGVufDB8fDB8fHww",
    },
    {
      id: 9,
      name: "Premium Wine Selection",
      description: "Glass of our sommelier's choice red or white",
      price: 12.0,
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1498&q=80",
    },
    {
      id: 10,
      name: "Artisanal Coffee",
      description: "Locally roasted single-origin coffee",
      price: 6.5,
      image:
        "https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
    },
  ],
  appetizer: [
    {
      id: 11,
      name: "Truffle Arancini",
      description: "Crispy risotto balls with black truffle and fontina cheese",
      price: 14.5,
      image:
        "https://images.unsplash.com/photo-1549203386-9d4394c8a2fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QXBwZXRpemVyfGVufDB8fDB8fHww",
    },
    {
      id: 12,
      name: "Bruschetta Trio",
      description:
        "Toasted bread with tomato, mushroom, and goat cheese toppings",
      price: 12.99,
      image:
        "https://images.unsplash.com/photo-1625938146369-adc83368bda7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QXBwZXRpemVyfGVufDB8fDB8fHww",
    },
    {
      id: 13,
      name: "Seared Scallops",
      description: "Fresh scallops with cauliflower purée and micro greens",
      price: 18.75,
      image:
        "https://plus.unsplash.com/premium_photo-1668202969210-3e42f4e13902?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEFwcGV0aXplcnxlbnwwfHwwfHx8MA%3D%3D",
    },
  ],
};

export default menuData;
