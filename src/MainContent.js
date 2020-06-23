import React from 'react'

class MainContent extends React.Component{

    render(){
        return(
            <div>
                <p>Hi! This is Naveen Kumar. How Can I help  {this.props.name}?</p>
                <h1>
                    {this.props.count}
                </h1>
                <button onClick = {this.props.handleClick}>Click</button>
            </div>
        )
    }
}

export default MainContent