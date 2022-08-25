import React from "react";
import Form from 'react-bootstrap/Form';

class Selected extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       value: 
    //     };
    // }
  
  
  handleClicked = (event) => {
    this.props.handle(event.target.value)
    console.log(event.target.value)


  };

  //   changeHandler = () => {
  //       this.setState({
  //         value: this.handleClicked
  //       });
  // }

  render() {
    return (
      <Form.Group className="mb-3">
        <Form.Select style={{backgroundColor:"gray"}} onChange={this.handleClicked}>
          <option value={0}>Choose the number of hornes</option>
          <option value={1} >1 horn</option>
          <option value={2} >2 hornes</option>
          <option value={3} >3 hornes</option>
          <option value={100} >100 hornes</option>
        </Form.Select>
      </Form.Group>
    );
  }
}

export default Selected;
