import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography, useTheme } from '@mui/material';
import { tokens } from '../theme';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
// import 'react-clock/dist/Clock.css';

const SaveEvent = ({open, setOpen, saveEvent, currentView, selectedDateEvent}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const inititalValues = {
    title: "",
    allDay: true,
    startTime: '00:00',
    endTime: '00:00',
  };

  const [formData, setFormData] = useState(inititalValues);
  const [errors, setErrors] = useState(inititalValues);

  useEffect(() => {
    if(open && currentView === "timeGridDay") {
      const startTime = `${selectedDateEvent.start.getHours()}:${selectedDateEvent.start.getMinutes()},${selectedDateEvent.start.getSeconds()}`;
      const endTime = `${selectedDateEvent.end.getHours()}:${selectedDateEvent.end.getMinutes()},${selectedDateEvent.end.getSeconds()}`;
      setFormData({ ...formData, allDay: false, startTime: startTime, endTime: endTime })
    }
  }, [open]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleInput = (key, value) => {
    setFormData({...formData, [key]: value});
  };

  const handleRadioChange = (event) => {
    handleInput("allDay", event.target.value === 'allDay')
    if(event.target.value === 'allDay'){
      handleInput("startTime", "00.00");
      handleInput("endTime", "00.00");
    }
  };

  const formValidated = () => {
    let err = 0;
    setErrors(inititalValues);
    if(formData.title == ""){
      err++;
      setErrors({...errors , title: "Please input event title"});
    }
    return err > 0 ? false : true;
  }

  const handleSubmit = () => {
    if(formValidated()){
      if(!formData.allDay){
        const dateStr = selectedDateEvent.startStr;
        selectedDateEvent.startStr = `${dateStr} ${formData.startTime}`;
        selectedDateEvent.endStr = `${dateStr} ${formData.endTime}`;
        selectedDateEvent.start = new Date(selectedDateEvent.startStr);
        selectedDateEvent.end = new Date(selectedDateEvent.endStr);
      }
      selectedDateEvent.title = formData.title;
      selectedDateEvent.allDay = formData.allDay;
      saveEvent({...selectedDateEvent});
      setFormData(inititalValues);
      handleClose();
    }
  };

  const timepickerBoxStyles = {
    mr: 2,
    gridRow: 2,
    display: "flex",
    flexDirection: "column",
    "& .react-time-picker--disabled": theme.palette.mode==="dark" ? {
      color: '#fff',
      opacity: 0.6,
      backgroundColor: 'transparent'
    } : {}
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: { width: "500px", backgroundColor: theme.palette.mode==="dark" ? colors.primary[500] : "unset"  } }}
      >
        <DialogTitle>Add Event</DialogTitle>
        <DialogContent>
          <TextField
            id="title"
            required
            autoFocus
            fullWidth
            sx={{mb: 3}}
            name="title"
            margin="dense"
            color="secondary"
            variant="outlined"
            label="Event Title"
            value={formData.title}
            onChange={e => handleInput("title" , e.target.value)}
            error={errors.title}
            helperText={errors.title}
          />
          <FormControl>
            {/* <FormLabel id="demo-radio-buttons-group-label">Event Time</FormLabel> */}
            <Typography paddingBottom={0}>Event Time</Typography>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              value={formData.allDay ? 'allDay' : 'timed'}
              onChange={handleRadioChange}
              name="radio-buttons-group"
              sx={{display: "grid"}}
            >
              <FormControlLabel value="allDay" control={<Radio color="secondary" />} label="All Day"  sx={{gridRow: 1, gridColumn: 1}} />
              <FormControlLabel value="timed" control={<Radio color="secondary" />} label="Timed" sx={{gridRow: 2, gridColumn: 1}} />
              <Box sx={{...timepickerBoxStyles, gridRow: 2, gridColumn: 2}}>
                <Typography component="small">Start</Typography>
                <TimePicker
                  disableClock={true}
                  value={formData.startTime}
                  nativeInputAriaLabel="Start Time"
                  disabled={formData.allDay ? true : false}
                  onChange={val => handleInput("startTime" , val)}
                />
              </Box>
              <Box sx={{...timepickerBoxStyles, gridColumn: 3}}>
                <Typography component="small">End</Typography>
                <TimePicker
                  disableClock={true}
                  value={formData.endTime}
                  nativeInputAriaLabel="End Time"
                  disabled={formData.allDay ? true : false}
                  onChange={val => handleInput("endTime" , val)}
                />
              </Box>
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="secondary" onClick={handleClose} >Cancel</Button>
          <Button variant="contained" color="secondary" onClick={handleSubmit} sx={{color: '#fff'}} >Add Event</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SaveEvent;