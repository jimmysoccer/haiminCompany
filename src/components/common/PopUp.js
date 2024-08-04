import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const PopUp = ({
  title,
  content,
  confirmText,
  cancelText,
  open,
  handleClose,
  confirmAction,
  cancelAction,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={confirmAction} autoFocus>
          {confirmText}
        </Button>
        <Button onClick={cancelAction}>{cancelText}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PopUp;
