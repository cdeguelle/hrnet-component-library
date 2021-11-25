import * as React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import { useState } from 'react'

export default function StickyHeadTable({data, paperStyle, tableStyle, rowsPerPageOptions}) {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    const columns = [
        { id: 'firstName', label: 'First Name' },
        { id: 'lastName', label: 'Last Name' },
        { id: 'startDate', label: 'Start Date' },
        { id: 'department', label: 'Department' },
        { id: 'dateOfBirth', label: 'Date of Birth' },
        { id: 'street', label: 'Street' },
        { id: 'city', label: 'City' },
        { id: 'state', label: 'State' },
        { id: 'zipCode', label: 'Zip Code' }    
    ]
    
    function createData(firstName, lastName, startDate, department, dateOfBirth, street, city, state, zipCode) {
        return { firstName, lastName, startDate, department, dateOfBirth, street, city, state, zipCode }
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    const rows = data.map(employee => createData(employee.firstName, employee.lastName, employee.startDate, employee.department, employee.dateOfBirth, employee.street, employee.city, employee.state, employee.zipCode))

    for (let index = 0; index < rows.length; index++) {
        const codeIndex = index
        rows[index].code = codeIndex
    }

    return (
        <Paper sx={paperStyle}>
            <TableContainer sx={tableStyle}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((row) => {
                                return (
                                    <TableRow
                                        hover
                                        tabIndex={-1}
                                        key={row.code}
                                    >
                                        {columns.map((column) => {
                                            const value = row[column.id]
                                            return (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                >
                                                    {value}
                                                </TableCell>
                                            )
                                        })}
                                    </TableRow>
                                )
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={rowsPerPageOptions}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}
