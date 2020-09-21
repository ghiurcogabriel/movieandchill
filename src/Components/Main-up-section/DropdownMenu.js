import React, { Component } from 'react';
import movie from './movie.svg';
// import ImgComponent from '../Main-up-section/ImgComponent'
import './DropdownMenu.css';
// import {BrowserRouter as Router, Route} from "react-router-dom";



class DropdownMenu extends Component {

    render() {
        return (
            <div className='dropdown-menu'>
              <img className='menu' src={movie} alt='movie'/>
              <div className='dropdown-links'>
                <p>Advance Search</p>               
              </div>
            </div>
        )
    }
}
export default DropdownMenu;