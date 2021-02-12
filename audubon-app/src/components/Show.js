import React, { Component } from 'react';

class Show extends Component {
    render() {
        console.log(this.props.match.params.birdIndex);
        console.log(this.props.birds);
        return (
            <div>
                Show {this.props.match.params.birds}
            </div>
        )
    }
}

export default Show;