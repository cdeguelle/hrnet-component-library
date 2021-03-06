import React, { useState } from "react"
import DatePicker from "../lib/components/DatePicker"
import Modal from "../lib/components/Modal"
import { StateSelectMenu } from "../lib/components/SelectMenu"
import { DepartmentSelectMenu } from "../lib/components/SelectMenu"
import { employees, states } from "../data"
import { departments } from "../data"
import DataTable from "../lib/components/DataTable"
import close from "../assets/close.png"

const App = () => {
    const [buttonActivated, setButtonActivated] = useState(false)
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [startDate, setStartDate] = useState('')
    const [state, setState] = useState('AL')
    const [department, setDepartment] = useState('Sales')

    console.log(state)
    console.log(department)
    console.log(dateOfBirth)
    console.log(startDate)

    return (
        <div>
            <h1>HRnet components</h1>

            <h2>Date of birth picker</h2>
            <DatePicker label={'Date of birth'} setDate={setDateOfBirth} width={220} />

            <h2>Start date picker</h2>
            <DatePicker label={'Start date'} setDate={setStartDate} width={220} />

            <h2>Modal</h2>
            <button onClick={() => setButtonActivated(true)}>Open the modal</button>
            {buttonActivated ? (
                <Modal onClickFunction={() => setButtonActivated(false)} contentMessage={'Employee created'} closeIcon={close} />
            ) : null}            

            <h2>Select menu</h2>
            <StateSelectMenu options={states} onChangeFunction={setState} label={'State'} labelFor={'state'} />
            <DepartmentSelectMenu options={departments} onChangeFunction={setDepartment} label={'Department'} labelFor={'department'} />

            <h2>Data Table</h2>
            <DataTable data={employees} paperStyle={{ width: '100%', overflow: 'hidden' }} tableStyle={{ maxHeight: 440 }} rowsPerPageOptions={[10, 25, 100]} />
        </div>
    )
}

export default App