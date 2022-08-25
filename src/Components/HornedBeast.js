import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: "",
    };
  }

  increamentFavHeart = () => {
    this.setState({
      counter: this.state.counter + "❤️",
    });
  };

  render() {
    return (
      <Col>
        <Card style={{ width: "18rem", textAlign: "center" }} >
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Body>
            <Card.Img
              variant="top"
              src={this.props.image}
              title={this.props.title}
              
              
            />
            <Card.Text>
              <p>{this.props.descr}</p>
              <h5>Hornes: {this.props.horns}</h5>
              <h3>Favorites: {this.state.counter}</h3>
            </Card.Text>
            <Button variant="primary" onClick={()=>{this.props.myFunction(this.props.title)}}>Show me the model</Button>
            <Button style={{margin:"10px"}} variant="primary" onClick={this.increamentFavHeart}>increament Heart</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default HornedBeast;
