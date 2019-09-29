import React, {Component} from 'react';
import './App.css';
import { StressForm } from '../../components/StressForm/StressForm';
import { Header } from '../../components/Header/Header';
import { ActualStress } from '../../components/ActualStress/ActualStress';
import { Undo } from '../../components/Undo/Undo';

class App extends Component{

  state = {
    user: 'Kyle',
    stressLevel: 0
  }


  handleChange = e =>{
    e.preventDefault()
    console.log(e)
    this.setState({
      stressLevel: e.target.value
    })
  }

  onClick = () => {
    this.setState({
      stressLevel: 0
    })
  }

  render(){

    return(
      <div className="main">
        <Header user={this.state.user} />
        <ActualStress level={this.state.stressLevel} />
        <StressForm 
        onChange={this.handleChange}
        level={this.state.stressLevel}
        />
        <Undo 
        onClick={this.onClick} 
        level={this.state.stressLevel}
        />

      </div>
    
    )
  }
}

export default App;
