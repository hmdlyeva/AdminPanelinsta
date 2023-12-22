import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const AddUser = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField
        id="outlined-multiline-flexible"
        label="Name"
        multiline
        maxRows={4}
      />
      <TextField
        id="outlined-textarea"
        label="Surname"
        placeholder="Surname"
        multiline
      />
      <TextField
        id="outlined-multiline-static"
        label="Bio"
        multiline
        rows={4}
        defaultValue="Bio"
      />
    </div>
    <div>
      <TextField
        id="filled-multiline-flexible"
        label="Username"
        multiline
        maxRows={4}
        // variant="filled"
      />
      <TextField
        id="filled-textarea"
        label="Email"
        placeholder="Email"
        multiline
        // variant="filled"
      />
      <TextField
        id="filled-multiline-static"
        label="Info"
        multiline
        rows={4}
        defaultValue="Info"
        // variant="filled"
      />
    </div>
    <div>
      <TextField
        id="standard-multiline-flexible"
        label="Number"
        multiline
        maxRows={4}
        variant="standard"
      />
     <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      {/* <TextField
        id="standard-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
        variant="standard"
      /> */}


    </div>
  </Box>
  )
}

export default AddUser