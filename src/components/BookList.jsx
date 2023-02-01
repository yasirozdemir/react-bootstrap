import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          {/* <Col
            key={this.props.book.asin}
            xs={10}
            sm={6}
            md={4}
            lg={3}
            className="mb-3"
          >
            <SingleBook book={this.props.book} />
          </Col> */}
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
