import React, { Component } from 'react';



import { Link } from 'react-router-dom';

// class Home extends Component {
//     render() {
        
//         let list = this.props.birds.map((bird, index) => {
//             return (
//                 <div className="birds" key={bird.name}>
//                     <p>
//                         <Link to = {"/show/"}>{bird.name}</Link>:{" "}
//                         {bird.genus}
//                     </p>
//                 </div>
//             );
//         });
//         return (<div>{list}</div>)
//     }
// }

class Home extends Component {
    render() {
        console.log(this.props.birds);
        return (
            <div className="homePage">
                {this.props.birds.map((birdName, index) => {
                    console.log(index);
                    return (
                        <div className="birds">
                            <Link to={"/show/"+index} >
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