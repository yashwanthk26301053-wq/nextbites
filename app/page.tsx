import { recipes } from "./data/recipes";
import RecipeGrid from "./components/RecipeGrid";
export default function Home() {
  return (
    <div className="flex-1 justify-center bg-zinc-50 font-sans dark:bg-black">
      <RecipeGrid recipes={recipes} />
    </div>
  );
}
