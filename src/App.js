import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import data from "./Components/data.json";
// import SelectedBeast from "./Components/SelectedBeast";
// import { Card } from "react-bootstrap";


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state={
      showMe: alert("aaa")
    }
  }

  show = () => {
    this.setState({
        showModule: this.state.showMe
    })

    this.props.handle();
}


  render(){
    return(
      <div>
        <Header />
        <Footer />
        <Main theData={data} onClick={this.show} />
        {/* <SelectedBeast  /> */}
      </div>
    )
  }
}

export default App;


