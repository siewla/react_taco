import React, { Component } from 'react'
import TacoCard from './TacoCard'
// import shortid from 'shortid'

export class RandomTaco extends Component {
    constructor(props){
        super(props)
        this.state ={
            taco: null,
            baseURL: "https://taco-randomizer.herokuapp.com/random/?full-tack=true"
        }
    }

    componentDidMount (){
        fetch(this.state.baseURL)
            .then((response) => response.json ())
            .then((data) => {
                this.setState({taco:data})
            });
    }


    render() {
        if (this.state.taco===null){
            return (
            <div>
                <h1>Loading</h1>
            </div>
        )} else {
            return(
                <div>
                    <TacoCard taco ={this.state.taco}/>
                </div>
            )
        }
        
    }
}

export default RandomTaco
