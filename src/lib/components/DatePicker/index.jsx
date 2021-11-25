import * as React from 'react'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'

export default function DateOfBirthPicker({label, setDate, style, width}) {
    return (
        <Stack component="form" noValidate spacing={3} style={style}>
            <TextField
                id="date"
                label={label}
                type="date"
                defaultValue="2017-05-24"
                sx={{ width: width }}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e) => setDate(e.target.value)}
            />
        </Stack>
    )
}
