import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import data from "./Components/data.json";
import SelectedBeast from "./Components/SelectedBeast";


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state={
      selBeast: {},
      show: false
    }
  }

  myFunction= (title)=> {
    const SelectedBeast=data.find(beast=> beast.title===title)
    this.setState({
      show:true,
      selBeast: SelectedBeast
    })
  }

  handleClose=()=>{
    this.setState({
      show: false,
    })
  }



  render(){
    return(
      <div>
        <Header />
        <Footer />
        <Main theData={data} myFunction={this.myFunction} />
        <SelectedBeast showModal={this.state.show} handleClose={this.handleClose} selBeast={this.state.selBeast} />
      </div>
    )
  }
}

export default App;


