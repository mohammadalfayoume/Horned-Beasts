import React from "react";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import HornedBeast from "./HornedBeast";




class Main extends React.Component {


  render() {
    return (

      <Row xs={1} md={4} className="g-4">
        {this.props.theData.map((card) => {
          return (
            <HornedBeast title={card.title} image={card.image_url} descr={card.description} myFunction={this.props.myFunction} horns={card.horns} />
          );
        })}
      </Row>
    );
  }
}

export default Main;
