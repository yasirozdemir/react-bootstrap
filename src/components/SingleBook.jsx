import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  render() {
    return (
      <Card className="bookCard">
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text className="text-primary">
            ${this.props.book.price}
          </Card.Text>
          <small>
            {this.props.book.category.charAt(0).toUpperCase() +
              this.props.book.category.slice(1)}
          </small>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
