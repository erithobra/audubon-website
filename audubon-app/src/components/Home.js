import React, { Component } from 'react';



import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        console.log(this.props.birds);
        return (
            <div className="homePage">
                {this.props.birds.map((birdName, index) => {
                    console.log(index);
                    return (
                        <div className="birds">
                            <Link to={"/show/"} >
                                <img src={birdName.image}/> <br/>
                                {birdName.name}
                            </Link>
                        </div>
                    )}
                )}
            </div>
        )
    }
}



export default Home;