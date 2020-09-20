import React from "react"

function DisplayCard(props){

    return(
        <tr>
          <td>{props.statedata["confirmed"]} </td>  
          <td>{props.statedata["deaths"]} </td> 
          <td>{props.statedata["recovered"]}</td>   
          <td>{props.statedata["state"]}</td>  
          </tr>
    )
}

export default DisplayCard