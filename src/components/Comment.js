import React, { Component } from "react";

class  Comment extends Component {
  render(){
    return(
      <li className="comment">
      <h4>{this.props.children}</h4>
      <p>{this.props.author}</p>
      </li>
    );
  }
}

export default Comment;
