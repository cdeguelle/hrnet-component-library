import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
export default function DateOfBirthPicker({
  label,
  setDate,
  style,
  width,
  id
}) {
  return /*#__PURE__*/React.createElement(Stack, {
    component: "form",
    noValidate: true,
    spacing: 3,
    style: style
  }, /*#__PURE__*/React.createElement(TextField, {
    id: id,
    label: label,
    type: "date",
    defaultValue: "2017-05-24",
    sx: {
      width: width
    },
    InputLabelProps: {
      shrink: true
    },
    onChange: e => setDate(e.target.value)
  }));
}