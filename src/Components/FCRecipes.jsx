import FCRecipe from "./FCRecipe";
import React from 'react'

export default function FCRecipes(props) {
  const getidRecipes = (idtodel) => {
    props.sendIdRecipes(idtodel)
  }

  const recipes = props.arr.map(recipe =>
    <FCRecipe
      key={recipe.id}
      id={recipe.id}
      name={recipe.name}
      time={recipe.time}
      cookingMethod={recipe.cookingMethod}
      image={recipe.image}
      sendIdR={getidRecipes}
      btnName={props.btnName}
    />
  )
  return (
    <div >
      <h1 style={{ display: props.isDisplay }}> Recipe done : {props.counter}</h1>
      <div className="row">
        {recipes}
      </div>
    </div>
  )
}




