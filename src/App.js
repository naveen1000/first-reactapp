import React from 'react';
import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent'
import DisplayCard from './DisplayCard'
import "./App.css"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      apidata : null,
      isLoading : false,
      isError : false
    }
  }

  componentDidMount(){
    this.setState({isLoading:true})
    fetch("	https://api.covid19india.org/data.json")
    .then(response => response.json())
    .then(data => {
      console.log("Loaded data")
      this.setState(
        {
          apidata : data,
          isLoading :false,
          isError : false
        })
      })
      .catch(
        this.setState(
          {
            apidata : null,
            isLoading :false,
            isError : true
          })

      )
  }

  render(){
    let displaytext =""

    if (this.state.apidata) {

      let statesdata = this.state.apidata['statewise']


      displaytext = statesdata.map((statedata) =>{
        
       return(< DisplayCard statedata = {statedata} />)

      })
      
    }

    return (
      <div>
        <Header />
        <table id="t01">
        <tr>
          <th>Confirmed</th>
          <th>Deaths</th>
          <th>Recovered</th>
          <th>State</th>
        </tr>
        {displaytext}
        </table>
      </div>
  );


  }
}

export default App;
