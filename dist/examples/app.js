import React, { useState } from "react";
import DatePicker from "../lib/components/DatePicker";
import Modal from "../lib/components/Modal";
import { StateSelectMenu } from "../lib/components/SelectMenu";
import { DepartmentSelectMenu } from "../lib/components/SelectMenu";
import { employees, states } from "../data";
import { departments } from "../data";
import DataTable from "../lib/components/DataTable";

const App = () => {
  const [buttonActivated, setButtonActivated] = useState(false);
  const [state, setState] = useState('AL');
  const [department, setDepartment] = useState('Sales');
  console.log(state);
  console.log(department);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "HRnet components"), /*#__PURE__*/React.createElement("h2", null, "Date of birth picker"), /*#__PURE__*/React.createElement(DatePicker, {
    label: 'Date of birth'
  }), /*#__PURE__*/React.createElement("h2", null, "Start date picker"), /*#__PURE__*/React.createElement(DatePicker, {
    label: 'Start date'
  }), /*#__PURE__*/React.createElement("h2", null, "Modal"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setButtonActivated(true)
  }, "Open the modal"), buttonActivated ? /*#__PURE__*/React.createElement(Modal, {
    onClickFunction: () => setButtonActivated(false),
    contentMessage: 'Employee created'
  }) : null, /*#__PURE__*/React.createElement("h2", null, "Select menu"), /*#__PURE__*/React.createElement(StateSelectMenu, {
    options: states,
    onChangeFunction: setState,
    label: 'State',
    labelFor: 'state'
  }), /*#__PURE__*/React.createElement(DepartmentSelectMenu, {
    options: departments,
    onChangeFunction: setDepartment,
    label: 'Department',
    labelFor: 'department'
  }), /*#__PURE__*/React.createElement("h2", null, "Data Table"), /*#__PURE__*/React.createElement(DataTable, {
    data: employees
  }));
};

export default App;