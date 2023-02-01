import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card
        onClick={() => {
          if (this.state.selected) {
            this.setState({
              selected: false,
            });
          } else {
            this.setState({
              selected: true,
            });
          }
        }}
        className="bookCard"
      >
        <Card.Img variant="top" src={this.props.img} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text className="text-primary">${this.props.price}</Card.Text>
          <small>
            {this.props.category.charAt(0).toUpperCase() +
              this.props.category.slice(1)}
          </small>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
