import React, { Component } from 'react'
// const recipes = ["seasoning", "base_layer", "mixin", "shell", "condiment"];
const ReactMarkdown = require ('react-markdown')
export class TacoCard extends Component {    
    render() {  
        return( 
            <div>
                <h1 className="title">Seasoning: {this.props.taco.seasoning.name}</h1>
                <ReactMarkdown source = {this.props.taco.seasoning.recipe}/>
                <h1 className="title">Base layer: {this.props.taco.base_layer.name}</h1>
                <ReactMarkdown source = {this.props.taco.base_layer.recipe}/>
                <h1 className="title">mixin: {this.props.taco.mixin.name}</h1>
                <ReactMarkdown source = {this.props.taco.mixin.recipe}/>
                <h1 className="title">shell: {this.props.taco.shell.name}</h1>
                <ReactMarkdown source = {this.props.taco.shell.recipe}/>
                <h1 className="title">condiment: {this.props.taco.condiment.name}</h1>
                <ReactMarkdown source = {this.props.taco.condiment.recipe}/>
            </div>
        )
    }
}

export default TacoCard
