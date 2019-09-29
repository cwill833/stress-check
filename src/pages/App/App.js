import React, {Component} from 'react';
import './App.css';
import { StressForm } from '../../components/StressForm/StressForm';
import { Header } from '../../components/Header/Header';
import { ActualStress } from '../../components/ActualStress/ActualStress';
import { Undo } from '../../components/Undo/Undo';
import {Submit} from '../../components/Submit/Submit'
import { ThankYou } from '../../components/ThankYou/ThankYou';
class App extends Component{

  state = {
    user: 'Kyle',
    stressLevel: 0,
    submitted: false
  }


  handleChange = e =>{
    e.preventDefault()
    console.log(e)
    this.setState({
      stressLevel: e.target.value
    })
  }

  handleClick = () => {
    this.setState({
      stressLevel: 0
    })
  }

  handleSubmit = () =>{
    this.setState({
      submitted: !this.state.submitted
    })
  }

  render(){

    return(
      <div className="main">
        <Header 
          user={this.state.user} 
        />
        <ActualStress 
          submitted={this.state.submitted}
          level={this.state.stressLevel} 
        />
        <StressForm 
          onChange={this.handleChange}
          level={this.state.stressLevel}
        />
        <Undo 
          onClick={this.handleClick} 
          level={this.state.stressLevel}
          submitted={this.state.submitted}
        />
        <Submit 
          submitted={this.state.submitted}
          level={this.state.stressLevel}
          onClick={this.handleSubmit}
        />
        <ThankYou 
          submitted={this.state.submitted}
          level={this.state.stressLevel}
        />
      </div>
    
    )
  }
}

export default App;
