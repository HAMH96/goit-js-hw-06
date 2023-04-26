const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");
const ingredientsArray = ingredients.map((ingredient) => {
  const ingredientLiElement = document.createElement("li");
  ingredientLiElement.classList.add("item");
  ingredientLiElement.textContent = ingredient;
  return ingredientLiElement;
})

ingredientsList.append(...ingredientsArray);