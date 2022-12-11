import React, { Component } from 'react'
import RecipeArr from '../RecipeArr';
import FCRecipes from './FCRecipes';
import FCRecipe from './FCRecipe';

export default class CCMyKitchen extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            arr: RecipeArr,
            arrEat: [],
            counter: 0
        });
    }

    getidtodel = (idtodel) => {
        let newArr = this.state.arr.filter(recipe => recipe.id !== idtodel);
        let tempRecp = RecipeArr.find(recipe1 => recipe1.id == idtodel);
        let arrLength = [...this.state.arrEat, tempRecp];
        this.setState({
            arr: newArr,
            arrEat:arrLength,
            //arrEat: [...this.state.arrEat, tempRecp],
            counter: this.state.counter + 1
        });
    }
    getidtodelEAT = (idtodel) => {
        let newArr = this.state.arrEat.filter(recipe => recipe.id !== idtodel);
        let tempRecp = RecipeArr.find(recipe1 => recipe1.id == idtodel);
        let arrLength = [...this.state.arr, tempRecp];

        this.setState({
            arrEat: newArr,
            arr: arrLength,
            //arr: [...this.state.arr, tempRecp],
            counter: this.state.counter - 1
        });
    }

    render() {
        return (
            <div className='container'>
                <FCRecipes
                    arr={this.state.arr}
                    sendIdRecipes={this.getidtodel}
                    btnName={"Prepare now"}
                    isDisplay={'none'}
                />
                
                <FCRecipes
                    isDisplay={this.state.counter> 0 ? 'block' : 'none'}
                    arr={this.state.arrEat}
                    sendIdRecipes={this.getidtodelEAT}
                    btnName={"Eat now"}
                    counter={this.state.counter}
                    />
            </div>

        )
    }
}
