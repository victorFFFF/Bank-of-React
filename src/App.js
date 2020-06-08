import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';
import Debits from './components/Debits';
import Credits from './components/Credits';


class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance:515.88, 
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      }
    }
    this.updateCredit = this.updateCredit.bind(this)
    this.updateDebit = this.updateDebit.bind(this)
  }

  updateDebit (event)
  {
    console.log("THEBLANCE " +this.state.accountBalance);
     this.setState({accountBalance: this.state.accountBalance - event})
    //this.setState({accountBalance: event})
    console.log("EVENT " + event)
  }

  updateCredit(event)
  {
    console.log("THEBLANCE " +this.state.accountBalance);
    this.setState({accountBalance : this.state.accountBalance + Number(event)})
      //this.setState({accountBalance: event})
      console.log("EVENT " + Number(event))
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render() {  
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />);
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>);
    const DebitsComponent = () =>(<Debits  updateDebit={this.updateDebit}/>);
    const CreditComponent = () =>(<Credits  updateCredit={this.updateCredit}/>);

    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/debits" render={DebitsComponent}/>  
            < Route exact path="/credits" render={CreditComponent}/>   
            
          </div>
        </Router>
    );
  }

}

export default App;