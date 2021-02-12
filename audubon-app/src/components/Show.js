import React, { Component } from 'react';

class Show extends Component {
    render() {
        console.log(this.props.match.params.birdIndex);

        const birdy = this.props.match.params.birdIndex;

        console.log(this.props.birds[birdy].name);
        
        return (
            <div>
                <p>{this.props.birds[birdy].name}</p>
                <img src={this.props.birds[birdy].image}></img>
                <p>{this.props.birds[birdy].genus}</p>
                <p>{this.props.birds[birdy].conservationStatus}</p>
                <p>{this.props.birds[birdy].homepage}</p>


            </div>
        )
    }
}

export default Show;