import { Jumbotron } from "react-bootstrap";

const Welcome = ({ quoteOfTheDay }) => {
  return (
    <Jumbotron className="text-light">
      <h1>EpiStore</h1>
      <p className="mx-auto">{quoteOfTheDay}</p>
    </Jumbotron>
  );
};

export default Welcome;
