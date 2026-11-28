import { recipes } from "./data/recipes";
import RecipeCard from "./components/RecipeCard";
export default function Home() {
  return (
    <div className="grid flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black grid-cols-[repeat(auto-fill,minmax(230px,1fr))]">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
