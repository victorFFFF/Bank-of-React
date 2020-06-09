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



          <img  class="mx-auto d-block" src="https://img.etimg.com/thumb/width-640,height-480,imgsize-169788,resizemode-1,msid-71487585/you-could-lose-a-large-part-of-your-savings-if-your-bank-fails.jpg" alt="bank" style={{height:"10%", width:"25%"}}/>
          <h1 class="col-md-12 text-center">Bank of React</h1>
          
          <div class="col-md-12 text-center"> 
          <Link to="/userProfile" class="btn btn-primary" >User Profile</Link> 
          <Link to="/login" class="btn btn-warning" >Login</Link>
          <Link to="/credits" class="btn btn-success" >Credit</Link>
          <Link to="/debits" class="btn btn-danger" theinfo={this.state.debit} >Debits</Link>
         </div>
      
        <div class="col-md-12 text-center"> 
        <div  class="btn btn-link">
          <AccountBalance accountBalance={this.props.accountBalance} />
          </div>
          </div>

        </div>
    );
  }
}

export default Home;