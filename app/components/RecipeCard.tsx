
import { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div>
      <br />
      <h2>{recipe.name}</h2>
      <p>{recipe.cuisine}</p>
      <hr />
      <p>{recipe.minutes} minutes to munch</p>
    </div>
  );
}
