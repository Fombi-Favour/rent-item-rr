/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/display-name */
import React, { useState, forwardRef } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { toast } from 'react-toastify';

const Transitions = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const DeleteModal = () => {
  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    gap: '12px',
    backgroundColor: '#f70505',
    width: '112px',
    height: '32px',
    borderRadius: '10px',
    color: '#fff',
    fontSize: '18px',
    textTransform: 'capitalize',
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    handleClose();
    toast.success('Residency successfully deleted');
  };

  return (
    <>
      <div className="mt-6">
        <Button
          variant="outlined"
          onClick={handleClickOpen}
          sx={buttonStyle}
        >
          <FaTrashAlt />
          Delete
        </Button>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transitions}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Delete Residency</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete}>OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteModal;
