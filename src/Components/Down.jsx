import React, { Component } from "react";
import { Link } from "react-router-dom";
class Down extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
        
                <div  id="down1">
                    <Link to="/BangloreSubpage" id="link1"><img className="card_images" src={this.props.src} alt="" /></Link>
                    <h1  className="text">{this.props.h1}</h1>
                    <p className="text">{this.props.p}</p>
                </div>
            
                
            </>

        )   
    }
}
export default Down;