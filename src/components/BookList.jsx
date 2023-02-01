import { Component } from "react";
import { Container, Row, Col, Nav, InputGroup, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    searchQuery: "",
  };

  render() {
    return (
      <Container>
        <Nav>
          <InputGroup className="w-50 mx-auto mb-4">
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
          {this.props.books.map(({ asin, title, img, price, category }) => {
            return (
              <Col key={asin} xs={10} sm={6} md={4} lg={3} className="mb-3">
                <SingleBook
                  title={title}
                  img={img}
                  price={price}
                  category={category}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default BookList;
