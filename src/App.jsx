import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InternalTextField from './InternalTextField'



const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}




function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {temperature: '', scale: 'c'};
  }

  handleEncodedChange = (_value) => {
    this.setState({varType: 'e', _value});
  }

  handleDecodedChange = (_value) => {
    this.setState({varType: 'd', _value});
  }

  render() {
    const varTypes = {
      e: 'Encoded',
      d: 'Decoded'
    };

    const varType = this.state.varType;
    const _value = this.state._value;
    const encoded = varType === 'e' ? tryConvert(_value, toCelsius) : _value;
    const decoded = varType === 'd' ? tryConvert(_value, toFahrenheit) : _value;

    return (
      <div className="App">
        <header className='App-header'>
          <img src={logo} className="App-logo" alt="logo" />
          <InternalTextField 
          var={varTypes.e} 
          _value={encoded}
          onInputChange={this.handleEncodedChange}
           />
          <InternalTextField
           var={varTypes.d}
           _value={decoded}
           onInputChange={this.handleDecodedChange}
            />
        </header>
      </div>
    );
  }
}

export default (App);
