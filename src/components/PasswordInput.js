import { useState } from "react"
import { Grid, TextField, Tooltip, Typography, Checkbox, Box } from "@mui/material"
import { Lock } from '@mui/icons-material'
import { useField } from "formik";

function PasswordInput({...props}) {
  const [password, setPassword] = useState('');
  const [tooltipOpen, setTooltipOpen] = useState(false)
  const [rule1, setRule1] = useState(false)
  const [rule2, setRule2] = useState(false)
  const [rule3, setRule3] = useState(false)
  const [field, meta, helpers] = useField(props)

  const handleChange = (event) => {
    setPassword(event.target.value)
    helpers.setValue(event.target.value);

    const hasRule1 = event.target.value.length >= 8
    const hasRule2 = /\d/.test(event.target.value)
    const hasRule3 = /[A-Z]/.test(event.target.value)

    setRule1(hasRule1)
    setRule2(hasRule2)
    setRule3(hasRule3)

    if (!tooltipOpen && event.target.value.length > 0) {
      setTooltipOpen(true)
    }
  }

  const handleBlur = () => {
    setTooltipOpen(false);
  }

  const handleTooltipClose = () => {
    setTooltipOpen(false);
  }

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12}>
        <TextField
          type="password"
          {...field}
          {...props}
          value={password}
          onChange={handleChange}
          onBlur={handleBlur}
          fullWidth
          error={meta.touched && !!meta.error}
          helperText={meta.touched && meta.error}

          InputProps={{
            endAdornment: (
              <Tooltip
                title={
                  <Box sx={{ color: 'white' }}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 1 }}>Requirements</Typography>
                    <Checkbox checked={rule1} disabled={!password} color="primary" />
                    At least 8 characters
                    <br />
                    <Checkbox checked={rule2} disabled={!password} color="primary" />
                    At least 1 digit
                    <br />
                    <Checkbox checked={rule3} disabled={!password} color="primary" />
                    At least 1 uppercase letter
                  </Box>
                }
                open={tooltipOpen}
                onClose={handleTooltipClose}
                PopperProps={{
                  disablePortal: true,
                }}
                disableInteractive
                placement="right"
                arrow
              >
                <Lock />
              </Tooltip>
            ),
          }}
        />
      </Grid>
    </Grid>
  );
}

export default PasswordInput;
