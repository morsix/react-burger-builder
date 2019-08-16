import React from 'react'
import "./Order.css"
const order = (props) => {

    const ingredients = [];

    for (const ingName in props.ingredients) {
        ingredients.push({
            name: ingName,
            amount: props.ingredients[ingName]
        })
    }
    const ingOutput = ingredients.map(ig=>{
        return <span
        style={{
            textTransform: 'capitalize',
            display: 'inline-block',
            margin: "0 8px",
            border: '1px solid #ccc',
            padding: '5px'
        }}
        key={ig.name}> {ig.name} ({ig.amount})</span>
    })
    return (
        <div className="Order">
            <p>Ingredients: {ingOutput}</p>
            <p>Price: <strong>GBP {Number.parseFloat(props.price).toFixed(2)}</strong></p>
        </div>
    )
}

export default order;
