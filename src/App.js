import React, {Fragment} from 'react';
import './App.css';
import NavBar from './Containers/NavBar'
import { BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import SignUp from './forms/SignUp'
import LogIn from './forms/Login'
import Main from './Main'

class App extends React.Component {

  state = {
    user: {},
    email: "",
    loggedIn: false,
    IsAuthenticated: false
  }


  setToken = (userObj) => {
    this.setState({
      user: {...userObj},
      email: userObj.email,
      loggedIn: true,
      IsAuthenticated: true
    }, () => {
      localStorage.setItem("token", userObj.token)
      this.props.history.push("/main");
    });
  }

  signout = () => {
    this.setState({
      user: {},
      email: "",
      loggedIn: false,
      IsAuthenticated: false
    })
  }


  render() {

    return (
      <div>
      <NavBar signOut={this.signout} loggedin={this.state.loggedIn}/>
        <br />
        <br />

        <Switch>
          <Route exact path="/login" component={props => (
              <LogIn
              {...props}
              tokenSetting={this.setToken}
              />
            ) }/>
          <Route exact path="/signup" component={props => (
              <SignUp
              {...props}
              tokenSetting={this.setToken}
              />
            ) }/>
          <Route exact path="/main" component={Main}/>
				</Switch>

      </div>



    )
  }
}


export default withRouter(App)
