import React, {Component} from 'react'

import { Link} from 'react-router-dom';

const API_KEY = "be45a5a431943db1d3b1703ce07ffdae";


class Recipe extends Component {
    state= {
        currentRecipe: []
    };

    componentDidMount= async () => {
        const title = this.props.location.state.recipe;
        const req = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);

        const res = await req.json();
        this.setState({ currentRecipe: res.recipes[0]});
        console.log(this.state.currentRecipe);
    };
    render() {
        const recipe = this.state.currentRecipe;

        return(
            <div className="container">
                { this.state.currentRecipe.length !== 0 &&
                <div className="current-recipe">
                    <img className="current-recipe__img" src={recipe.image_url} alt={recipe.title} />
                    <h2 className="current-recipe__title"> {recipe.title} </h2>
                    <h3 className="current-recipe__publisher">
                        Made By: <span> {recipe.publisher} </span>
                    </h3>
                    <p className="current-recipe__website">
                         <span> <a href={recipe.f2f_url}> View Recipe </a> </span>
                    </p>
                    <button className="active-recipe__button">
                        <Link to="/"> Home </Link>
                    </button>
                </div>
                }
            </div>
        )
    }

}


export default Recipe