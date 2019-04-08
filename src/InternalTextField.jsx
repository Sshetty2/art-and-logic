import React, { PureComponent } from 'react'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles';
import './App.css';


const styles = theme => ({
  margin: {
    marginTop: 16,
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
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    const { classes } = this.props;
    return (
        <TextField
        className={classes.margin}
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
        label={this.props.label}
        variant="outlined"
        id={this.props.id}
      />
    )
  }
}

export default withStyles(styles)(InternalTextField);
