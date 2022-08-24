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
      dataOfHorns: null
    }
  }

  handleForm=(hornd)=>{
    let selected =data.filter(item=>item.horns===hornd)

    this.setState({
      dataOfHorns: selected
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
        <Selected handleClose={this.state.dataOfHorns} />
        <Footer />
        <Main theData={data} myFunction={this.myFunction} />
        <SelectedBeast showModal={this.state.show} handleClose={this.handleClose} selBeast={this.state.selBeast} />
      </div>
    )
  }
}

export default App;


