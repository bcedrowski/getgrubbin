import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header'
import Form from './Components/Form'
import Recipes from './Components/Recipes'

const API_KEY = "be45a5a431943db1d3b1703ce07ffdae";

class App extends Component {
    state = {
        recipes: []
    };
    getRecipe = async (e) => {
        const recipeName = e.target.elements.recipeName.value;
        e.preventDefault();
        const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=30`);

        const data = await api_call.json();
        this.setState({recipes: data.recipes});
        console.log(this.state.recipes)
    };

    componentDidMount = () => {
        const json = localStorage.getItem("recipes");
        const recipes = JSON.parse(json);
        this.setState({ recipes });
    };

    componentDidUpdate = () => {
        const recipes = JSON.stringify(this.state.recipes);
        localStorage.setItem("recipes", recipes);
    };

  render() {
    return(
        <div className="App">
            <Header />
            <Form getRecipe={this.getRecipe} />
            <Recipes recipes={this.state.recipes} />
        </div>
    )
  }
}

export default App;
