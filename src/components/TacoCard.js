import React, { Component } from 'react'
const recipes = ["seasoning", "base_layer", "mixin", "shell", "condiment"];

export class TacoCard extends Component {    
    render() {  
        return( 
            <div>
                <h2>Seasoning: {this.props.taco.seasoning.name}</h2>
                <h3>{this.props.taco.seasoning.recipe}</h3>
                <h2>base_layer: {this.props.taco.base_layer.name}</h2>
                <h3>{this.props.taco.base_layer.recipe}</h3>
                <h2>mixin: {this.props.taco.mixin.name}</h2>
                <h3>{this.props.taco.mixin.recipe}</h3>
                <h2>shell: {this.props.taco.shell.name}</h2>
                <h3>{this.props.taco.shell.recipe}</h3>
                <h2>condiment: {this.props.taco.condiment.name}</h2>
                <h3>{this.props.taco.condiment.recipe}</h3>
            </div>
        )
    }
}

export default TacoCard
