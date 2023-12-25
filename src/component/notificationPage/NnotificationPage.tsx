import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import type { RootState } from "../../redux/store/store";
import { useSelector, useDispatch } from "react-redux";
import { sendNotifications } from "./../../redux/slice/userSlice";
import { v4 as uuidv4 } from "uuid";
type Props = {};


interface Notification {
    id: string;
    userId: string;
    ntfctncontent: string;
}
const NnotificationPage = (props: Props) => {
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const [ntfcValue, setntfcValue] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        style={{ borderColor: "orange", color: "orange" }}
        onClick={handleClickOpen}
      >
        Send Notification
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Notification</DialogTitle>
        <DialogContent>
          <DialogContentText>
            The Notification will be send to whole users. Be careful!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Notification"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setntfcValue(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button style={{ color: "orange" }} onClick={handleClose}>
            Cancel
          </Button>
          <Button
            onClickCapture={() => {
              users.forEach((user) => {
                if (user.id) {
                dispatch(
                  sendNotifications({
                    // notification:Notification,

                    userId: user.id,
                    notification: { ntfctncontent: ntfcValue },
                  }) as any
                );
                }
              });
              handleClose();
            }}
            style={{ color: "orange" }}
            onClick={handleClose}
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default NnotificationPage;
