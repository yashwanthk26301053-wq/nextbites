import { Recipe } from "../data/recipes";

export default function renderRecipe({ recipe }: { recipe: Recipe }) {
  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>{recipe.cuisine}</p>
      <hr />
      <p>{recipe.minutes}</p>
    </div>
  );
}
