import React from "react";
import Form from 'react-bootstrap/Form';

class Selected extends React.Component {

    
  handleClicked = (event) => {
    this.props.handle(event.target.value)
    console.log(event.target.value)


  };


  render() {
    return (
      <Form.Group className="mb-3" >
        <Form.Select style={{backgroundColor:"gray" , color:"white",textAlign:'center'}} onChange={this.handleClicked}>
          <option value={0}>Choose the number of hornes</option>
          <option value={1} >1 horn</option>
          <option value={2} >2 horns</option>
          <option value={3} >3 horns</option>
          <option value={100} >100 horns</option>
        </Form.Select>
      </Form.Group>
    );
  }
}

export default Selected;
