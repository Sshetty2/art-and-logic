import React, { PureComponent } from 'react'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles';
import './App.css';

const styles = theme => ({
  margin: {
    marginTop: 16,
    margin: 10
  },
  input: {
    color: 'white',
    borderColor: 'white' 
  },
  floatingLabelFocusStyle: {
    color: 'white'
  },
  cssLabel: {
    '&$cssFocused': {
      color: 'white',
    },
    color: 'white'
  },
  cssOutlinedInput: {
    borderColor: 'white',
  },
  notchedOutline: {
    borderWidth: '2px',
    borderColor: 'white !important'
  },
  cssFocused: {
    color: 'white'
  }
});


class InternalTextField extends PureComponent {

  handleChange = (e) => {
    this.props.onInputChange(e.target.value);
  }
  
  render() {
    const { classes } = this.props;
    return (
        <TextField
        className={classes.margin}
        margin="normal"
        InputLabelProps={{
          classes: {
            root: classes.cssLabel,
            focused: classes.cssFocused,
          },
        }}
        InputProps={{
          classes: {
            input: classes.input,
            root: classes.cssOutlinedInput,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
          },
        }}
        label={this.props.var}
        variant="outlined"
        id={this.props.id}
        onChange={this.handleChange}
        value={this.props._value}
      />
    )
  }
}

export default withStyles(styles)(InternalTextField);
