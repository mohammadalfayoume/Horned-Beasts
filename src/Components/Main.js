import React from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";




class Main extends React.Component {
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

      show = () => {
        this.setState({
            showAble: this.state.show
        })
      }

  render() {
    return (
      <Row xs={1} md={4} className="g-4">
        {this.props.theData.map((card) => {
          return (
            <Col>
        <Card style={{ width: "18rem", textAlign: "center" }}>
          <Card.Title>{card.title}</Card.Title>
          <Card.Body>
            <Card.Img
              variant="top"
              src={card.image_url}
              title={card.title}
              onClick={this.increamentFavHeart}
            //   onClick={this.show}
              
            />
            <Card.Text>
              <p>{card.description}</p>
              <h3>Favorites: {this.state.counter}</h3>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
          );
        })}
      </Row>
    );
  }
}

export default Main;
