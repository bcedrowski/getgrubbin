import React from 'react'

import { Link } from "react-router-dom";

function Recipes(props) {
    return(
    <div className="container">
        <div className="row">
        { props.recipes.map((recipe) => {
            return (
                <div key={recipe.title} className="col-md-4" style={{marginBottom: "2rem"}}>
                    <div className="recipes__box">
                        <img className="recipe__box-img"
                             src={recipe.image_url}
                             alt={recipe.title.length}
                             />
                        <div className="recipe__text">
                            <h4 className="recipes__title">{ recipe.title.length  < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...`}</h4>
                        </div>
                        <button className="recipe_button">
                            <Link to={{
                                pathname: `/recipe/${recipe.recipe_id}`,
                                state: {recipe: recipe.title}}}> taste test </Link>
                        </button>
                    </div>
                </div>
            )
        }) }
        </div>
    </div>
    )
}

export default Recipes;