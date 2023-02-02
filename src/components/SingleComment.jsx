import { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";

class SingleComment extends Component {
  state = {
    url: "https://striveschool-api.herokuapp.com/api/comments/",
    commentId: this.props.commentObj._id,
  };

  deleteComment = async () => {
    try {
      fetch(this.state.url + this.state.commentId, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzgxYWU3MzczODAwMTUzNzQzN2MiLCJpYXQiOjE2NzUzNDI4NzAsImV4cCI6MTY3NjU1MjQ3MH0.XvSJCouk9YeDJk4keaXoIOlB-nkCaRWTmZAqhXXgSGQ",
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <ListGroup.Item className="mb-1">
        <div className="mb-1 d-flex align-items-center">
          ({this.props.commentObj.rate}) {this.props.commentObj.comment}
          <Button
            className="ml-auto"
            variant="danger"
            onClick={this.deleteComment}
          >
            X
          </Button>
        </div>
      </ListGroup.Item>
    );
  }
}

export default SingleComment;
