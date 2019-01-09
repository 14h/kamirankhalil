import React, {Component} from 'react';
import './style.css'
import {Link} from 'react-router-dom';



class NavigationBar extends Component{
  constructor(props) {
    super(props);

    this.state = {

    };
    this.toggleNavOverlay = this.toggleNavOverlay.bind(this)
  }
  
  
  toggleNavOverlay(){
      this.props.toggleLanguage();
    if(document.getElementsByClassName('nav-overlay')[0].style.display === 'block'){
      document.getElementsByClassName('nav-overlay')[0].style.display = 'none';
    }else{
      document.getElementsByClassName('nav-overlay')[0].style.display = 'block';

    }
  }
  toggleNavOverlayInput(){
      if(document.getElementById('toggle').checked){
        document.getElementById('toggle').checked = false;
      }else{
        document.getElementById('toggle').checked = true;
      }
  }
  render() {
    
    return (
      <div id="NavigationBar">
      {console.log(this.props.language)}

        <div className="fixed-header">
          <div className="header-content">
          
            <div className="logo">
                <Link to="/"><h1>KAMIRAN KHALIL</h1></Link>
            </div>
            <ul className="nav-list" >
                <Link to="Painting"><li className="blue">{(this.props.language ==='EN')?("Paintings"):("Gemälde")}</li></Link>
                <Link to="Sketch"><li className="purple">{(this.props.language ==='EN')?("Sketches"):("Zeichnungen")}</li></Link>
                <Link to="Media"> <li className="silver" >{(this.props.language ==='EN')?("Media and Photos"):("Presse und Fotos")}</li></Link>
                <Link to="About"><li className="blue">{(this.props.language ==='EN')?("About"):("Vita")}</li></Link>
                <a href="mailto:Kamiranart@hotmail.com" target="" name="kamirankhalil"><li>{(this.props.language ==='EN')?("Contact"):("Kontakt")}</li></a>
            </ul>
            <div className='language-switch'>
              <Link onClick={()=>
                this.props.toggleLanguage()
              } to={'/'+ ((this.props.language==='EN')?('DE'):('EN') )+ '/'}><h3>{((this.props.language==='EN')?('DE'):('EN') )}</h3></Link>
            </div>
            <div className='navigation-hamburger'>
              <input onChange={this.toggleNavOverlay} id="toggle" type="checkbox" />
              <label className="hamburger" htmlFor="toggle">
                <div className="top"></div>
                <div className="meat"></div>
                <div className="bottom"></div>
              </label>
            </div>  
          </div>
        </div>
        <div className='nav-overlay' >
              <ul className="nav2">
                <Link onClick={()=>{this.toggleNavOverlay();this.toggleNavOverlayInput()}} to="Painting"><li>{(this.props.language ==='DE')?("Paintings"):("Gemälde")}</li></Link>
                <Link onClick={()=>{this.toggleNavOverlay();this.toggleNavOverlayInput()}}  to="Sketch"><li>{(this.props.language ==='DE')?("Sketches"):("Zeichnungen")}</li></Link>
                <Link onClick={()=>{this.toggleNavOverlay();this.toggleNavOverlayInput()}}  to="Media"> <li>{(this.props.language ==='DE')?("Media and Photos"):("Presse und Fotos")}</li></Link>
                <Link onClick={()=>{this.toggleNavOverlay();this.toggleNavOverlayInput()}}  to="About"><li>{(this.props.language ==='DE')?("About"):("Vita")}</li></Link>

                <a href="mailto:Kamiranart@hotmail.com" target="" name="kamirankhalil"><li>{(this.props.language ==='DE')?("Contact"):("Kontakt")}</li></a>

              <Link onClick={()=>{
                this.props.toggleLanguage()
              }} to={'/'+ this.props.language + '/'}><li>{this.props.language}</li></Link>

              </ul>
            </div>
      </div>
    );
  }
}

export default NavigationBar