import React, { Component } from 'react';

class CommentForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      author:'',
      text:''
    };
    this.handleAuthorChange= this.handleAuthorChange.bind(this);
    this.handleTextChange=this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  } //ends constructor

  handleAuthorChange(event){
    this.setState({author: event.target.value});
  }
  handleTextChange(event){
    this.setState({text: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
    const author = this.state.author.trim();
    const text = this.state.text.trim();

    if(!text|| !author){
      return;
    }
    //Update list of Comments
    this.props.onCommentSubmit({
      author: author,
      text:text
    })
    // reset the form to empty values
    this.setState({
      author: '',
      text: ''
    })
  }
  render(){
    return(
      <form className="comment-form" onSubmit={this.handleSubmit}>
      <input type="text"
              placeholder="YourName"
              value={this.state.author}
              onChange={this.handleAuthorChange}/>

      <input type="text"
              placeholder="Say Something"
              value={this.state.text}
              onChange={this.handleTextChange} />
      <input type="submit" value="Post" />
      </form>
    );

  } // ends render

} // ends class

export default CommentForm;
