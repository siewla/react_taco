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

    fetchTaco = async () => {
        try{
            const response = await fetch (this.state.baseURL);
            const data = await response.json();
            this.setState({
                taco:data
            })
        } catch (error){
            console.log(error)
        }
    }

    componentDidMount (){
        this.fetchTaco();
    }

    handleClick = () =>{
        this.fetchTaco();
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
                    <button onClick={() => this.handleClick()}>New Taco</button>
                    <TacoCard taco ={this.state.taco}/> 
                </div>
            )
        }
        
    }
}

export default RandomTaco
