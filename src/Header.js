import React from 'react'
import './App.css'

function Header(){
    return(
        <div>
            <h1 className="header">
                COVID-19
            </h1>

            <ul class="topnav">
            <li><a class="active" href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li class="right"><a href="#about">About</a></li>
            </ul>
        </div>
    )
}

export default Header