# hrnet-components-library

A library of React components created using `create-react-app`.

  

## Installation

Run the following command:

`npm install hrnet-component-library`.

## Components

### DataTable
 A component for create a table for display an employee list.
|First Name|Last Name|Start Date|Department|Date of Birth|Street|City|State|Zip Code
|--|--|--|--|--|--|--|--|--|
|  |  |  |  |  |  |  |  |  |
#### Props

 1. `data` object for fill the table with the following attributes : 
	` {firstName, lastName, startDate, department, dateOfBirth, street, city, state, zipCode}`
	
 2. `paperStyle` style for the higher parent of the table
 
 3. `tableStyle` style for the container of the table

4. `rowsPerPageOptions` options for select how many rows want to display per page

#### Use

    import { DataTable } from  'hrnet-components-library'

### DatePicker
A component for create a date picker.
#### Props

 1. `label` the name label of the date picker
 2. `setDate` the function will be change the value of the date picker
 3. `style` style for the date picker
 4. `width` the width of the date picker

#### Use

    import { DatePicker } from  'hrnet-components-library'

### Modal
A component for create a modal window.
#### Props

 1. `onClickFunction` the function will be executed when the close button will be clicked
 2. `contentMessage` the text inside the modal window
 3. `closeIcon` the icon for the close button
 4. `style` style of the modal window

#### Use

    import { Modal } from  'hrnet-components-library'

### SelectMenu
Two components for create select menu : `StateSelectMenu` & `DepartmentSelectMenu`
#### Props

 1. `options` data for the options of the select menu
 2. `onChangeFunction` function for change the value of the select menu
 3. `label` name of the select menu
 4. `labelFor` for attribute of the label
 5. `labelStyle` style of the label
 6. `selectStyle` style of the select menu

#### Use

    import { StateSelectMenu, DepartmentSelectMenu } from  'hrnet-components-library'
