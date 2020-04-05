import React, { Component }from "react";
import CommentList from "../components/CommentList";

class  CommentBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      comments:[
        {
          id:1,
          author: "Beth Fraser",
          text:"I love JS more each day."
        },
        {
          id:2,
          author: "Alan Russell",
          text: "Just wait until we add the form."
        }
      ]
    };
  }

  render(){
    return(
      <div className="comment-box">
      <h2>Comments</h2>
      <CommentList comments={this.state.comments}/>
      </div>
    );
  }
}


export default CommentBox;
