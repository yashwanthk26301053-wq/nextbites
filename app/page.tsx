import { recipes } from "./data/recipes";
import RecipeCard from "./components/RecipeCard";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)) items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
