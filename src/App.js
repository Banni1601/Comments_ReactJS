import "./styles.css";
import { Component } from "react";
import Comment from "./component/comment/comments.js";
let arr = [];
let id = 0;
class App extends Component {
  state = { name: "", comment: "", NComments: 0, list: [] };

  submitForm = (event) => {
    event.preventDefault();
    const { name, comment, NComments, list } = this.state;
    id += 1;
    const newcomment = {
      userId: id,
      userName: name,
      userComment: comment,
      isLiked: false,
    };
    if (name.length > 0 && comment.length > 0) {
      this.setState((prevState) => ({
        list: [...prevState.list, newcomment],
        name: "",
        comment: "",
        NComments: prevState.NComments + 1,
      }));
    }
  };

  inputText = (event) => {
    const { name } = this.state;
    this.setState({ name: event.target.value });
  };
  inputComment = (event) => {
    const { comment } = this.state;
    this.setState({ comment: event.target.value });
  };

  likeComment = (userId) => {
    const { list } = this.state;
    this.setState((prevState) => ({
      list: prevState.list.map((i) => {
        if (i.userId === userId) {
          return { ...i, isLiked: !i.isLiked };
        }
        return i;
      }),
    }));
  };

  deleteButton = (userId) => {
    const { list, NComments } = this.state;
    this.setState((prevState) => ({
      list: prevState.list.filter((i) => {
        if (i.userId !== userId) {
          return { i };
        }
      }),
    }));
    this.setState((prevState) => ({
      NComments: prevState.NComments - 1,
    }));
  };

  render() {
    const { name, comment, NComments, list } = this.state;
    return (
      <div className="App">
        <form action="" onSubmit={this.submitForm}>
          <input type="text" value={name} onChange={this.inputText} />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={comment}
            onChange={this.inputComment}
          ></textarea>

          <button type="submit">Add Comment</button>
        </form>
        <p>Comments: {NComments}</p>
        {list.map((i) => (
          <Comment
            key={i}
            data={i}
            likeComment={this.likeComment}
            deleteButton={this.deleteButton}
          />
        ))}
      </div>
    );
  }
}
export default App;
