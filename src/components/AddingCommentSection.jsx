import { Component } from "react";
import { FormGroup, Form, Button } from "react-bootstrap";

class AddingCommentSection extends Component {
  state = {
    url: "https://striveschool-api.herokuapp.com/api/comments/",
    newComment: {
      comment: "",
      rate: 0,
      elementId: this.props.bookAsin,
    },
  };

  postComment = async () => {
    try {
      console.log(this.props.bookAsin);
      const response = await fetch(this.state.url, {
        method: "POST",
        body: JSON.stringify(this.state.newComment),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzgxYWU3MzczODAwMTUzNzQzN2MiLCJpYXQiOjE2NzUzNDI4NzAsImV4cCI6MTY3NjU1MjQ3MH0.XvSJCouk9YeDJk4keaXoIOlB-nkCaRWTmZAqhXXgSGQ",
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      if (response.ok) {
        this.setState({
          ...this.state,
          newComment: {
            ...this.state.newComment,
            comment: "",
            rate: 0,
          },
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  render() {
    return (
      <>
        <h6>Add comment</h6>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            this.postComment();
          }}
        >
          <FormGroup>
            <Form.Control
              as="textarea"
              placeholder="Your comment..."
              value={this.state.newComment.comment}
              onChange={(event) => {
                this.setState({
                  ...this.state,
                  newComment: {
                    ...this.state.newComment,
                    comment: event.target.value,
                  },
                });
              }}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="rateInput">Rate</label>
            <input
              className="ml-2 w-50"
              type="number"
              id="rateInput"
              required
              min={0}
              max={5}
              value={this.state.newComment.rate}
              onChange={(event) => {
                this.setState({
                  ...this.state,
                  newComment: {
                    ...this.state.newComment,
                    rate: event.target.value,
                  },
                });
              }}
            />
          </FormGroup>
          <Button
            type="submit"
            variant="dark"
            onClick={() => {
              this.postComment();
            }}
          >
            Send
          </Button>
        </Form>
      </>
    );
  }
}

export default AddingCommentSection;
