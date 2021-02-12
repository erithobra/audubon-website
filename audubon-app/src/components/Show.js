import React, { Component } from 'react';

class Show extends Component {
    render() {
        console.log(this.props.match.params.birdIndex);

        const birdy = this.props.match.params.birdIndex;

        console.log(this.props.birds[birdy]);
        
        return (
            <div>
                <img src={this.props.birds[birdy].image}></img>


            </div>
        )
    }
}

export default Show;