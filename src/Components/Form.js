import React from "react";
import Form from 'react-bootstrap/Form';

class Selected extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userStory: '',
        };
    }
  
  
  handleClicked = (e) => {
    this.props.handleForm(e.target.value)
  };

    changeHandler = (e) => {
        console.log(e.target.value);
        this.setState({
          userStory: e.target.value
        });

  }

  render() {
    return (
      <Form.Group className="mb-3">
        <Form.Label></Form.Label>
        <Form.Select onChanges={this.handleClicked}>
          <option>Choose the number of hornes</option>
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
