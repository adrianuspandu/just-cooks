import RecipeItem from "./RecipeItem.jsx"
import recipes from "../data/recipes.js"

function MainContent() {
    const recipeItems = recipes.map(function(recipe) {
        console.log(recipe)
        return(
            <RecipeItem
                key={recipe.id}
                obj={recipe}
            />
        )
    })
    return(
        <main>
            {recipeItems}
        </main>
    )
}

export default MainContent