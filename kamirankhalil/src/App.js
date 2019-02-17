import React, { Component } from 'react';
import './App.css';
import NavigationBar from './NavigationBar'
import Carousel from './Carousel';
import Painting from './Painting';
import About from './About';
import Footer from './Footer'
import { Route, Redirect } from 'react-router';
import Sketch from './Sketch';
import Media from './Media';
import 'react-photoswipe/lib/photoswipe.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: 'EN',
    };
    this.toggleLanguage = this.toggleLanguage.bind(this)
  }
  toggleLanguage(){
    console.log('switched language')
    if(this.state.language ==='EN'){
      this.setState({language:'DE'})
    }else if (this.state.language ==='DE'){
      this.setState({language:'EN'})
    }else{
      console.log('something went wrong ')
    }
  }
  render() {
    return (
      <div className="App">
        <NavigationBar toggleLanguage={this.toggleLanguage} language={this.state.language}  />
        <Route exact path="/" component={ ()=>(<Redirect to="/EN/"/>) }/>
        <Route exact path="/:language/" component={ ()=>(<Carousel />) }></Route>
        <Route exact path="/:language/Painting/" render={({match})=>(
          <Painting  language={this.state.language} language2={match.params.language}/>
        )}></Route>
        <Route exact path="/:language/Sketch/" render={({match})=>(
          <Sketch  language={this.state.language} language2={match.params.language}/>
        )}></Route>
        <Route exact path="/:language/Media/" render={({match})=>(
          <Media  language={this.state.language} language2={match.params.language}/>
        )}></Route>
        <Route exact path="/:language/About/" render={({match})=>(
          <About language={this.state.language} language2={match.params.language}/>
        )}></Route>
        <Footer />
      </div>
    );
  }
}

export default App;
