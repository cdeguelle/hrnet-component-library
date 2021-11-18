import styled from 'styled-components';
const Label = styled.label`
    display: block;
    margin-top: 1rem;
    margin-bottom: 10px;
`;
const Select = styled.select`
    width: 208px;
    height: 25px;
`;
export function StateSelectMenu({
  options,
  onChangeFunction,
  label,
  labelFor
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: labelFor
  }, label), /*#__PURE__*/React.createElement(Select, {
    name: "state",
    onChange: e => onChangeFunction(e.target.value)
  }, options.map(option => /*#__PURE__*/React.createElement("option", {
    value: option.abbreviation,
    key: option.abbreviation
  }, option.name))));
}
export function DepartmentSelectMenu({
  options,
  onChangeFunction,
  label,
  labelFor
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
    htmlFor: labelFor
  }, label), /*#__PURE__*/React.createElement(Select, {
    name: "state",
    onChange: e => onChangeFunction(e.target.value)
  }, options.map(option => /*#__PURE__*/React.createElement("option", {
    value: option,
    key: option
  }, option))));
}