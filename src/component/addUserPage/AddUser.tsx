import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import Button from "@mui/material/Button";
import type { RootState } from "../../redux/store/store";
import { useSelector, useDispatch } from "react-redux";
import { getUser, postUsersData } from "./../../redux/slice/userSlice";
const AddUser = () => {
  const User = useSelector((state: RootState) => state.users.user);
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleAddUser = () => {
    dispatch(postUsersData(User) as any);
    console.log(User);
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
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
          onChange={(e) => {
            dispatch(getUser({ ...User, name: e.target.value } as typeof User));
          }}
        />
        <TextField
          id="outlined-textarea"
          label="Surname"
          placeholder="Surname"
          multiline
          onChange={(e) => {
            dispatch(
              getUser({ ...User, surname: e.target.value } as typeof User)
            );
          }}
        />
        <TextField
          id="outlined-multiline-static"
          label="Bio"
          multiline
          rows={4}
          defaultValue=""
          onChange={(e) => {
            dispatch(getUser({ ...User, bio: e.target.value } as typeof User));
          }}
        />
      </div>
      <div>
        <TextField
          id="filled-multiline-flexible"
          label="Username"
          multiline
          maxRows={4}
          onChange={(e) => {
            dispatch(
              getUser({ ...User, username: e.target.value } as typeof User)
            );
          }}
        />
        <TextField
          id="filled-textarea"
          label="Email"
          placeholder="Email"
          multiline
          onChange={(e) => {
            dispatch(
              getUser({ ...User, email: e.target.value } as typeof User)
            );
          }}
        />
        <TextField
          id="filled-multiline-static"
          label="Info"
          multiline
          rows={4}
          defaultValue=""
          onChange={(e) => {
            dispatch(getUser({ ...User, info: e.target.value } as typeof User));
          }}
        />
      </div>
      <div>
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          maxRows={4}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => {
            dispatch(
              getUser({
                ...User,
                number: parseInt(e.target.value, 10),
              } as typeof User)
            );
          }}
        />
        <TextField
          id="outlined-age"
          label="Age"
          type="number"
          maxRows={4}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => {
            dispatch(
              getUser({
                ...User,
                age: parseInt(e.target.value, 10),
              } as typeof User)
            );
          }}
        />

        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
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
            onChange={(e) => {
              dispatch(
                getUser({ ...User, password: e.target.value } as typeof User)
              );
            }}
          />
        </FormControl>
      </div>
      <div>
        {/* non unique idi */}
        <TextField
          id="outlined-multiline-flexiblee"
          label="Country"
          multiline
          maxRows={4}
          onChange={(e) => {
            dispatch(
              getUser({ ...User, country: e.target.value } as typeof User)
            );
          }}
        />

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            // defaultValue="female"
            name="radio-buttons-group"
            onChange={(e) => {
              const genderValue = e.target.value === "female";
              dispatch(
                getUser({
                  ...User,
                  gender: genderValue ? "female" : "male",
                } as typeof User)
              );
            }}
          >
            <FormControlLabel
              value="female"
              control={<Radio style={{color:"orange"}}/>}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio style={{color:"orange"}}/>} label="Male" />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Visibility</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            // defaultValue="public"
            name="radio-buttons-group"
            onChange={(e) => {
              const isPublicValue = e.target.value === "public";

              dispatch(
                getUser({
                  ...User,
                  ispublic: isPublicValue ? true : false,
                } as typeof User)
              );
            }}
          >
            <FormControlLabel
              value="public"
              control={<Radio style={{color:"orange"}}/>}
              label="Public"
            />
            <FormControlLabel
              value="private"
              control={<Radio style={{color:"orange"}}/>}
              label="Private"
            />
          </RadioGroup>
        </FormControl>

        <Button onClick={handleAddUser} variant="contained" style={{backgroundColor:"orange"}}>
          Add User
        </Button>
      </div>
    </Box>
  );
};

export default AddUser;
