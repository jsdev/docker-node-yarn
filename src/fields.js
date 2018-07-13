import React from 'react';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

const mockService = [{
  control: 'input',
  props: {
    id: 'ryan',
    value: 'tony'
  }
}];

const handleTextChange = (prop, component) => event => {
  component.setState({ [prop]: event.target.value });
};

const transform = {
  input: (props, component) => <Input {...props} key={props.id} onChange={handleTextChange(props.id, component)} />,
  text: (props, component) => <TextField {...props} key={props.id} onChange={handleTextChange(props.id, component)} />
};

export default (fields=mockService, component) =>
  fields.map(({control, props}) => transform[control](props, component))
