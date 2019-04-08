import React, { PureComponent } from 'react'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles';
import classes from 'classes'


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

export default class withStyles(styles)(InternalTextfield) extends PureComponent {
  render() {
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
