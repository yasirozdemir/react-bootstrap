import { Component } from "react";
import { Container, Row, Nav, InputGroup, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    searchQuery: "",
  };

  render() {
    return (
      <Container>
        <Nav>
          <InputGroup className="col-12 col-lg-6 mx-auto mb-4">
            <Form.Control
              className="border-dark"
              placeholder="Search Books"
              onChange={(event) => {
                this.setState({
                  searchQuery: event.target.value,
                });
              }}
            />
          </InputGroup>
        </Nav>
        <Row className="justify-content-center">
          {this.props.books.map((book) => {
            return (
              book.title.toLowerCase().includes(this.state.searchQuery) && (
                <SingleBook key={book.asin} book={book} />
              )
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default BookList;
