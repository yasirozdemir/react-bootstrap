import { Component } from "react";
import AddingCommentSection from "./AddingCommentSection";
import CommentsList from "./CommentsList";

class CommentsArea extends Component {
  render() {
    return (
      <>
        <CommentsList bookAsin={this.props.bookAsin} />
        <AddingCommentSection bookAsin={this.props.bookAsin} />;
      </>
    );
  }
}

export default CommentsArea;
