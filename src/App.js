import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import data from "./Components/data.json";
import SelectedBeast from "./Components/SelectedBeast";
import Selected from "./Components/Form";


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state={
      selBeast: {},
      show: false,
      
      dataRender: data
    }
  }

  handleForm=(hornd)=>{
    let selected =data.filter((item)=>{
      return item.horns==hornd
    })
    console.log(selected);
    let variable= data

    if (hornd != 0) {
      variable = selected
    }

    this.setState({
      dataRender: variable
      
    })
     
    
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
        <Selected handle={this.handleForm} />
        <Footer />
        <Main theData={this.state.dataRender} myFunction={this.myFunction} />
        <SelectedBeast showModal={this.state.show} handleClose={this.handleClose} selBeast={this.state.selBeast} />
      </div>
    )
  }
}

export default App;


