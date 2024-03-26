import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, useTheme } from '@mui/material';
import { tokens } from '../theme';
import TimePicker from 'react-time-picker';

const SaveEvent = ({open, setOpen, saveEvent, selectedDateEvent}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const inititalValues = {
    title: ""
  };
  const [formData, setFormData] = useState(inititalValues);
  const [value, onChange] = useState('10:00');

  const handleClose = () => {
    setOpen(false);
  };

  const handleInput = (key, value) => {
    setFormData({...formData, [key]: value});
  };

  const handleSubmit = () => {
    saveEvent({...formData, ...selectedDateEvent});
    setFormData(inititalValues);
    handleClose();
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: { width: "500px" } }}
      >
        <DialogTitle>Add Event</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <TextField
            id="title"
            required
            autoFocus
            fullWidth
            name="title"
            margin="dense"
            color="secondary"
            variant="outlined"
            label="Event Title"
            value={formData.title}
            onChange={e => handleInput("title" , e.target.value)}
          />
          {/* <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Event Time</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel value="allDay" control={<Radio />} label="All Day" />
              <FormControlLabel value="timed" control={<Radio />} label="Timed" />
            </RadioGroup>
          </FormControl>
          <TimePicker onChange={onChange} value={value} /> */}
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="secondary" onClick={handleClose} >Cancel</Button>
          <Button variant="contained" color="secondary" onClick={handleSubmit} >Add Event</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SaveEvent;