"use client";

import { useState } from "react";
import RecipeCard from "./RecipeCard";
import type { Recipe } from "../data/recipes";

export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
    const [query, setQuery] = useState("");

    const visible = recipes.filter((recipe) =>
        (recipe.name + " " + recipe.cuisine)
            .toLowerCase()
            .includes(query.toLowerCase())
    );

    return (
        <div>
            <input
                className="rounded-md"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search recipes or cuisines…"
            />
            <div className="search-result">
                {visible.length === 0 ? (
                    <p className="empty">No recipes match “{query}”. Try another search.</p>
                ) : (
                    <div className="grid flex-1 justify-center grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-10">
                        {visible.map((recipe) => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                        ))}
                    </div>

                )}
            </div>
        </div>
    );
}