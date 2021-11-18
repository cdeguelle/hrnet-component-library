import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
export default function DateOfBirthPicker({
  label
}) {
  return /*#__PURE__*/React.createElement(Stack, {
    component: "form",
    noValidate: true,
    spacing: 3
  }, /*#__PURE__*/React.createElement(TextField, {
    id: "date",
    label: label,
    type: "date",
    defaultValue: "2017-05-24",
    sx: {
      width: 220
    },
    InputLabelProps: {
      shrink: true
    }
  }));
}