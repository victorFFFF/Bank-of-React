import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import axios from "axios";

class Credit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountBalance: 0,
      info: [],
      recentChange: 0
    }
    this.submitIt = this.submitIt.bind(this);
  }

  componentDidMount = () => {
    axios
      .get("https://moj-api.herokuapp.com/credits")
      .then((response) => {
        const data = response.data;

        let temp = [];

        for(let i =0; i< data.length; i++)
        {
            temp = [data[i].description,
                    data[i].amount,
                    data[i].date];
            
            this.setState ({ info: [...this.state.info, temp], accountBalance: this.state.accountBalance + data[i].amount});
        }
        //this.props.updateDebit((Math.round(this.state.accountBalance* 100) / 100).toFixed(2));
      })
      .catch((err) => console.log(err));
  };

submitIt(event){
    event.preventDefault();
       let temp = [event.target.creditDesc.value,
                   event.target.creditAmount.value,
                   new Date().toLocaleString()]
        this.state.recentChange = event.target.creditAmount.value;
        this.setState ({ info: [...this.state.info, temp], accountBalance: this.state.accountBalance + Number(event.target.creditAmount.value)});
        
        this.props.updateCredit((Math.round(this.state.recentChange* 100) / 100).toFixed(2));
        console.log("RECENT " +this.state.recentChange)
}

  render() {
    
    return (
        <div>
            <Link to="/"> Home</Link>
            <h1>Credit</h1>
            <div style={{margin:"1%"}}>
          {/* <AccountBalance accountBalance={(Math.round(this.state.accountBalance* 100) / 100).toFixed(2)}/> */}
          {(Math.round(this.state.accountBalance* 100) / 100).toFixed(2)}
            
          <form onSubmit={this.submitIt}>    
            <input type='text' name="creditDesc" placeholder="Credit Description" />
            <input type='number'  name="creditAmount" placeholder="Credit amount"/>
            <input type='submit'/>
            </form>

          </div>

            <ul>
                {this.state.info.map ((x , index) =>
                      <div key = {index} style={{border:"2px black solid"}}>
                        <p> Description: {x[0]}</p>  
                        <p> Amount: {x[1]} </p>
                        <p> Date:  {x[2]} </p>
                          </div>)}
                      
            </ul>
        </div>
    );
  }
}

export default Credit;