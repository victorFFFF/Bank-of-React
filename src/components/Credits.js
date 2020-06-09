import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Credit extends Component {
  constructor(props) {  
    super(props);
    this.submitIt = this.submitIt.bind(this);
  }




submitIt(event){
    event.preventDefault();
       let temp = [event.target.creditDesc.value,
                   event.target.creditAmount.value,
                   new Date().toLocaleString()]
                   
        this.props.updateCredit(Number(event.target.creditAmount.value));
        this.props.updateCreditInfo(temp);

}

  render() {
      
    return (
        <div>
              <Link class="btn btn-secondary btn-lg" to="/"> Home</Link>
              <h4>
              <div class="badge badge-pill badge-success">Credits: </div>   ${(Math.round(this.props.creditAmount* 100) / 100).toFixed(2)}
              </h4>

            <div>        
              <form onSubmit={this.submitIt}>    
              <input type='text' name="creditDesc" placeholder="Credit Description" />
              <input type='number'  name="creditAmount" placeholder="Credit amount"/>
              <input type='submit'/>
              </form>
          </div>

            <ul>
                {this.props.creditInfo.map ((x , index) =>
                      <div key = {index} style={{border:"2px black solid"}}>
                        <p class="alert alert-info" role="alert"> Description: {x[0]}</p>  
                        <p> Amount: {x[1]} </p>
                        <p> Date:  {x[2]} </p>
                          </div>)}       
            </ul>
        </div>
    );
  }
}

export default Credit;