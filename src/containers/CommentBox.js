import React, { Component }from "react";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";

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
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleCommentSubmit(submittedComment){
    submittedComment.id = Date.now();

    const updatedComments= [...this.state.comments, submittedComment];
    this.setState({
      comments: updatedComments
    });
  }

  render(){
    return(
      <div className="comment-box">
      <h2>Add a Comment:</h2>
      <CommentForm onCommentSubmit={this.handleCommentSubmit}/>

      <h2>Comments:</h2>
      <CommentList comments={this.state.comments}/>
      </div>
    );
  }
}


export default CommentBox;
