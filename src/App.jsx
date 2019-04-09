import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InternalTextField from './InternalTextField'

function tryEncode(input) {
  input = parseInt(input)
  if(input < -8192 || input > 8191 ){
    return ''
  }
  input = input + 8192;
  let mask = 127;
  let bit1 = input & mask;
  let bit2 = (input >> 7) << 8;
  let result = ( bit2 | bit1 ).toString(16);
  return result
}

function tryDecode(val){
  let input = val.toString()
  let result = '';
  if (input.length === 4){
    let lowInt = input.slice(2,4)
    let hiInt = input.slice(0,2)
    let lowBit = parseInt(lowInt, 16)
    let hiBit = parseInt(hiInt, 16)
    if ( hiBit < parseInt("00", 16)  || 
      hiBit > parseInt("7f", 16)  ||
      lowBit < parseInt("00", 16) ||
      lowBit > parseInt("7f", 16) ){
      return result;
    } else {
        hiBit = hiBit << 7;
        result =  ( hiBit | lowBit ) - 8192;
        result = result.toString(10);    
    }
  }
  return result
}

function DescriptionText(props) {
  if (props.encoded.length >= 3 && props.decoded.length >= 4) {
    return <p>Voilà!</p>;
  }
  return <p>Enter in a value to Encode or Decode</p>;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.handleEncodedChange = this.handleEncodedChange.bind(this);
    this.state = {_value: ""};
  }

  handleEncodedChange(_value){
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
    const encoded = varType === 'd' ? tryDecode(_value) : _value;
    const decoded = varType === 'e' ? tryEncode(_value) : _value;

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
          <DescriptionText encoded={encoded} decoded={decoded} />
        </header>
      </div>
    );
  }
}

export default (App);
