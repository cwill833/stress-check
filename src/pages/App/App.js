import React, {Component} from 'react';
import './App.css';
import { StressForm } from '../../components/StressForm/StressForm';
import { Header } from '../../components/Header/Header';
import { ActualStress } from '../../components/ActualStress/ActualStress';

class App extends Component{

  state = {
    user: 'Chris',
    stressLevel: 0
  }


  handleSubmit = (e) =>{
    e.preventDefault()
    this.setState({
      stressLevel: e.target.value
    })
  }

  render(){

    return(
      <div className="main">
        <ActualStress level={this.state.stressLevel} />
        <Header user={this.state.user} />
        <StressForm onSubmit={this.handleSubmit}/>
      </div>
    
    )
  }
}

export default App;
