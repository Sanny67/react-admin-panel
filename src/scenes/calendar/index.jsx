import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { formatDate } from "@fullcalendar/core";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isTablet = useMediaQuery('(max-width: 769px)');
    const isMobile = useMediaQuery('(max-width: 710px)');

    const [showEventsBar, setShowEventsBar] = useState(false);
    const [currentEvents, setCurrentEvents] = useState([]);
    
    const handleDateClick = (selected) => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();
    
        if (title) {
          calendarApi.addEvent({
            id: `${selected.dateStr}-${title}`,
            title,
            start: selected.startStr,
            end: selected.endStr,
            allDay: selected.allDay,
          });
        }
    };

    const handleEventClick = (selected) => {
        if (
          window.confirm(
            `Are you sure you want to delete the event '${selected.event.title}'`
          )
        ) {
          selected.event.remove();
        }
    };

    return (
        <Box m="20px">
            <Header
                title="Calendar"
                subtitle="Full Calendar Interactive Page"
            />
            
            <Box display="flex" justifyContent="space-between" position="relative">
                {/* CALENDAR SIDEBAR */}
                {isMobile ? <Box
                    p="15px"
                    zIndex={9}
                    height="100%"
                    flex="1 1 20%"
                    borderRadius="4px"
                    position="absolute"
                    sx={{transition: "all 0.3s ease"}}
                    backgroundColor={colors.primary[400]}
                    top={"-30px"}
                    left={showEventsBar ? "-5vw" : "-100vw"}
                    width={showEventsBar ? "100vw" : "95vw"}
                >
                    <Box display="flex" justifyContent="space-between" position="relative" sx={{transition: "all 0.3s ease"}} >
                        <Typography variant="h5">Events</Typography>
                        <Tooltip title="Close">
                            <IconButton sx={{paddingTop: 0}} onClick={() => {setShowEventsBar(!showEventsBar)}}>
                                <CloseIcon/>
                            </IconButton>
                        </Tooltip>
                        <Box borderRadius="0 8px 8px 0" position="absolute" top="-15px" left="calc(100% + 12px)" backgroundColor={colors.primary[400]} >
                            <Tooltip title="Close">
                                <IconButton onClick={() => {setShowEventsBar(!showEventsBar)}}>
                                    <ArrowForwardIosIcon/>
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Box>
                    <List>
                        {currentEvents.map(event => (
                            <ListItem
                                key={event.id}
                                sx={{
                                    backgroundColor: colors.greenAccent[500],
                                    margin: "10px 0",
                                    borderRadius: "2px"
                                }}
                            >
                                <ListItemText
                                primary={event.title}
                                secondary={
                                    <Typography>
                                        {formatDate(event.start, {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric"
                                        })}
                                    </Typography>
                                }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box> : <Box
                    flex="1 1 20%"
                    backgroundColor={colors.primary[400]}
                    p="15px"
                    borderRadius="4px"
                >
                    <Typography variant="h5">Events</Typography>
                    <List>
                        {currentEvents.map(event => (
                            <ListItem
                                key={event.id}
                                sx={{
                                    backgroundColor: colors.greenAccent[500],
                                    margin: "10px 0",
                                    borderRadius: "2px"
                                }}
                            >
                                <ListItemText
                                primary={event.title}
                                secondary={
                                    <Typography>
                                        {formatDate(event.start, {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric"
                                        })}
                                    </Typography>
                                }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>}

                {/* CALENDAR */}
                <Box flex="1 1 100%" ml={isMobile ? "0px" : "15px"} sx={isMobile ? {
                            "& .fc-header-toolbar": {
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gridTemplateRows: 'auto auto',
                            },
                            "& .fc-header-toolbar .fc-toolbar-chunk:first-child": {
                                display: 'flex',
                                gridColumn: '1 / span 2',
                                justifyContent: 'space-between',
                                marginBottom: '10px',
                            },
                            "& .fc-button-primary": {
                                borderColor: theme.palette.mode==="light" ? colors.primary[300] : "unset",
                                backgroundColor: theme.palette.mode==="light" ? colors.primary[300] : "unset",
                            },
                            "& .fc-button-active, & .fc-button-primary:active, & .fc-button-primary:hover": {
                                borderColor: `${colors.primary[200]} !important`,
                                backgroundColor: theme.palette.mode==="light" ? `${colors.primary[200]} !important` : "unset",
                            },
                            "& .fc-button-primary:disabled": {
                                borderColor: theme.palette.mode==="light" ? colors.primary[300] : "unset",
                                backgroundColor: theme.palette.mode==="light" ? colors.primary[300] : "unset",
                            },
                            "& .fc-list-day-cushion": {
                                backgroundColor: colors.primary[400]
                            },
                        } : {}}>
                    <FullCalendar
                        height="70vh"
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
                        headerToolbar={isMobile ? {
                            start: 'title prev,next',
                            center: 'today',
                            end: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
                        } : {
                            left:"prev, next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={events => setCurrentEvents(events)}
                        initialEvents={[
                            {id: "1234", title: "All-day-event", date: "2024-03-25"},
                            {id: "1235", title: "Timed-event", date: "2024-03-28 09:30:00"}
                        ]}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default Calendar;
