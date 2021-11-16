import React, { useState } from "react"
import DatePicker from "../lib/components/DatePicker"
import Modal from "../lib/components/Modal"
import { StateSelectMenu } from "../lib/components/SelectMenu"
import { DepartmentSelectMenu } from "../lib/components/SelectMenu"
import { employees, states } from "../data"
import { departments } from "../data"
import DataTable from "../lib/components/DataTable"

const App = () => {
    const [buttonActivated, setButtonActivated] = useState(false)
    const [state, setState] = useState('AL')
    const [department, setDepartment] = useState('Sales')

    console.log(state)
    console.log(department)

    return (
        <div>
            <h1>HRnet components</h1>

            <h2>Date of birth picker</h2>
            <DatePicker label={'Date of birth'} />

            <h2>Start date picker</h2>
            <DatePicker label={'Start date'} />

            <h2>Modal</h2>
            <button onClick={() => setButtonActivated(true)}>Open the modal</button>
            {buttonActivated ? (
                <Modal onClickFunction={() => setButtonActivated(false)} contentMessage={'Employee created'} />
            ) : null}            

            <h2>Select menu</h2>
            <StateSelectMenu options={states} onChangeFunction={setState} label={'State'} labelFor={'state'} />
            <DepartmentSelectMenu options={departments} onChangeFunction={setDepartment} label={'Department'} labelFor={'department'} />

            <h2>Data Table</h2>
            <DataTable data={employees} />
        </div>
    )
}

export default App