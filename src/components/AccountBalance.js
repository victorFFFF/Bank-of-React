// src/components/AccountBalance.js

import React, {Component} from 'react';

class AccountBalance extends Component {


  render() {
      //console.log("balance state " + this.state.accountBalance)
    return (
        <div>
          Balance: ${(Math.round(this.props.accountBalance* 100) / 100).toFixed(2)}
        </div>
    );
  }
}

export default AccountBalance;