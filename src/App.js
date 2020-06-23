import React from 'react';
import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent'

class App extends React.Component {
  constructor(){
    super()
    this.state = {count : 1}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState( prevState => {
     return {count : prevState.count + 1}
    })
  }

  render(){
    return (
        <div>
          <Header />
          <MainContent name='Naveen' count = {this.state.count} handleClick = {this.handleClick} />
          <Footer />
        </div>
    );
  }
}

export default App;
