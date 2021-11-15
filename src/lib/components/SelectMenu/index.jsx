import styled from 'styled-components'

const Label = styled.label`
    display: block;
    margin-top: 1rem;
    margin-bottom: 10px;
`

const Select = styled.select`
    width: 208px;
    height: 25px;
`

export function StateSelectMenu({options, onChangeFunction, label, labelFor}) {
    return (
        <div>
            <Label htmlFor={labelFor}>{label}</Label>
            <Select name="state" onChange={(e) => onChangeFunction(e.target.value)}>
                {options.map((option) => (
                    <option value={option.abbreviation} key={option.abbreviation}>{option.name}</option>
                ))}
            </Select>
        </div>
    )
}

export function DepartmentSelectMenu({options, onChangeFunction, label, labelFor}) {
    return (
        <div>
            <Label htmlFor={labelFor}>{label}</Label>
            <Select name="state" onChange={(e) => onChangeFunction(e.target.value)}>
                {options.map((option) => (
                    <option value={option} key={option}>{option}</option>
                ))}
            </Select>
        </div>
    )
}