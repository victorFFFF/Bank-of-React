import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance:0, 
      debit: [],
      credit: [],
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      }
    }

  }



  render() {
    return (
        <div>
          <img src="https://img.etimg.com/thumb/width-640,height-480,imgsize-169788,resizemode-1,msid-71487585/you-could-lose-a-large-part-of-your-savings-if-your-bank-fails.jpg" alt="bank" style={{height:"200px"}}/>
          <h1>Bank of React</h1>

          <Link to="/userProfile" style={{border:"5px black solid", backgroundColor: "black", color:"white", padding:"5px", margin: "10px"}}>User Profile</Link> 
          <Link to="/login" style={{border:"5px black solid", backgroundColor: "black", color:"white", padding:"5px", margin: "10px"}}>Login</Link>
          <Link to="/credits" style={{border:"5px black solid", backgroundColor: "black", color:"white", padding:"5px", margin: "10px"}}>Credit</Link>
          <Link to="/debits"  theinfo={this.state.debit} style={{border:"5px black solid", backgroundColor: "black", color:"white", padding:"5px", margin: "10px"}}>Debits</Link>
      
        {/* <div style={{margin:"1%"}}> */}
        <div style={{border:"5px black solid", backgroundColor: "grey", color:"white", padding:"10px", marginTop: "5%", marginRight: "85%", marginLeft: "5%"}}>
          <AccountBalance accountBalance={this.props.accountBalance} />
          </div>

        </div>
    );
  }
}

export default Home;