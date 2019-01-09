import React, {Component} from 'react';
import './style.css'
import {Link} from 'react-router-dom';



class Carousel extends Component{
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  
  
  
  
  render() {
    
    return (
      <div id="Carousel">
        <div className='slider'>
            <div className='slide1'></div>
            <div className='slide2'></div>
            <div className='slide3'></div>
            <div className='slide4'></div>
          </div>
      </div>
    );
  }
}

export default Carousel