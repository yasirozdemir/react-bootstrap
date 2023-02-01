import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  render() {
    return (
      <Card className="bookCard">
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
