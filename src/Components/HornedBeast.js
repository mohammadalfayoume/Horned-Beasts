import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';


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
      // <div>
      //     <h3>{this.props.title}</h3>
      //     <img src={this.props.image} title={this.props.title} onClick={this.increamentFavHeart}></img>
      //     <p>{this.props.descr}</p>
      //     <h3>Favorites: {this.state.counter}</h3>
      // </div>
      <Card style={{ width: "18rem" }}>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Img variant="top" src={this.props.image} onClick={this.increamentFavHeart} />
        <Card.Body>
          
          <Card.Text>
          <p>{this.props.descr}</p>
          <h3>Favorites: {this.state.counter}</h3>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
