
import React, { Component, Fragment  } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './HomeComponent';
import HeaderComponent from './header/HeaderComponent';
import NewPosting from './NewPosting';
import LandingPage from './LandingPage';

class App extends Component {
  constructor(props){
    super(props);
    //this.isLoggedIn = this.isLoggedIn.bind(this);
    this.state = {
      profile:{
        displayName : "Santha"
      }
    };
    this.isLoggedIn = this.isLoggedIn.bind(this);
  }

  componentDidMount(){
    //this.isLoggedIn();
  }

  isLoggedIn(){
    fetch('/getProfile')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({profile: result});
      },
      (error) => {
      } 
    )   
  }

  render() {
    return (
      <Fragment>
      <HeaderComponent name={this.state.profile ? this.state.profile.displayName : ""} />
      <Router>
        <Route exact path='/' render={() => {return null;}} /> 
        <Route path='/postJob' render={() => <Home />} /> 
        <Route path="/landingPage" component={LandingPage} exact />
        </Router>
      </Fragment>
    );
  }
}

export default App;