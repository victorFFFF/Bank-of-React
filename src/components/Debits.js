import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Debit extends Component {
  constructor(props) {  
    super(props);
    this.submitIt = this.submitIt.bind(this);
  }




submitIt(event){
    event.preventDefault();
      console.log("DEBIT SUBMIT VALUE "+event.target.debitAmount.value)
       let temp = [event.target.debitDesc.value,
                   event.target.debitAmount.value,
                   new Date().toLocaleString()]
  
        this.props.updateDebit(Number(event.target.debitAmount.value));
        this.props.updateDebitInfo(temp)      

}

  render() {

    return (
        <div>
            <Link to="/"> Home</Link>

            <h4>
            <>Debits: </>
            ${(Math.round(this.props.debitAmount* 100) / 100).toFixed(2)}
            </h4>

            <div style={{margin:"1%"}}>

        
            
          <form onSubmit={this.submitIt}>    
            <input type='text' name="debitDesc" placeholder="Debit Description" />
            <input type='number'  name="debitAmount" placeholder="Debit amount"/>
            <input type='submit'/>
            </form>

          </div>

            <ul>
                {this.props.debitInfo.map ((x , index) =>
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

export default Debit;