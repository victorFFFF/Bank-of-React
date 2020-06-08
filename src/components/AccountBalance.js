// src/components/AccountBalance.js

import React, {Component} from 'react';

class AccountBalance extends Component {
// constructor(props){
//     super(props);
//     this.state={
//         accountBalance: this.props.accountBalance }
// }

// componentWillMount()
// {
//     console.log("BEFORE " +this.state.accountBalance );
//     this.setState({accountBalance: this.props.accountBalance})
//     console.log("HERE " +this.props.accountBalance );
// }


// componentWillReceiveProps( nextProps)
// {
//    // console.log("BEFORE " +this.state.accountBalance );
//     if(nextProps != this.props)
//     {
//     this.setState({accountBalance: nextProps.accountBalance})
//     console.log("currentProp " +this.props.accountBalance );
//     console.log("next " + nextProps.accountBalance);
    
//     }
// }

// componentDidMount() {
//     const storedValue = localStorage.getItem(this.props.accountBalance);
//     console.log("@@"+storedValue);
//     console.log("##" +this.props.accountBalance)
//     if (storedValue) {
//       this.setState({ accountBalance: storedValue });
//     }}


  render() {
      //console.log("balance state " + this.state.accountBalance)
    return (
        <div>
          Balance: ${this.props.accountBalance}
        </div>
    );
  }
}

export default AccountBalance;