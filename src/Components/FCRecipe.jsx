import React from 'react'
import RecipeArr from '../RecipeArr';
import FCRecipes from './FCRecipes';

export default function FCRecipe(props) {
    const btnprep = () => {
        props.sendIdR(props.id);
    }

    return (
        <div className="col-sm-4" style={{ border: 'solid grey 1px', width: '200px',height:'300px', textAlign: 'center' }}>
            <img src={props.image} style={{ width: '100%', height:'100px' }}></img>
            <h2>{props.name}</h2>
            <p>{props.time}<br/> {props.cookingMethod}</p><br />
            <button onClick={btnprep}>{props.btnName}</button>
        </div>
    )
}

