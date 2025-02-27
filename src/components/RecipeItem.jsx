function RecipeItem(props) {
  console.log(props)
  const ingredientsList = props.obj.ingredients.map(function(ingredient) {
    return <li>{ingredient}</li>
  })

  const stepsList = props.obj.steps.map(function(step) {
    return <li>{step}</li>
  })
  return (
    <div className="recipe-item">
      <h2 className="recipe-title">{props.obj.title}</h2>

      <p className="recipe-desc" >
        {props.obj.description}
      </p>

      <img className="recipe-image" src={props.obj.image} alt={props.obj.title} />

      <h3>Ingredients</h3>
      <ul className="recipe-ingredients-list">
        {ingredientsList}
      </ul>

      <h3>Steps</h3>
      <ol className="recipe-steps-list">
        {stepsList}
      </ol>
      
    </div>
  )
}

export default RecipeItem
