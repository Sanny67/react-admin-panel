import React, { useState } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { useTheme } from '@emotion/react';
import { tokens } from '../../theme';
import { Box, IconButton, ListItem, Typography, styled } from '@mui/material';
import { Sidebar as ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import UserImage from '../../assets/user.png';



const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    return (
      <MenuItem
        icon={icon}
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        component={<Link to={to} />}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    );
};

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
            sx={{
                
            }}
        >
            <ProSidebar collapsed={isCollapsed}
                rootStyles={{
                    height: '100%',
                    border: 'none',
                    background: `${colors.primary[400]} !important`,
                    "& *": {
                        background: `transparent !important`,
                    },
                    "& .ps-sidebar-container, & .ps-menu-root": {
                        backgroundColor: "transparent !important"
                    }
                }}
            >
                <Menu iconShape="square"
                    menuItemStyles={{
                        button: {
                            borderRadius: '10px',
                            '&.active': {
                                color: "#6870fa !important"
                            },
                            '&:hover': {
                                background: `${colors.primary[300]} !important`,
                            },
                        },
                    }}
                    rootStyles={{
                        background: `${colors.primary[400]} !important`,
                        padding: "5px 35px 5px 20px !important",
                        '& .ps-menuitem-root.main-menu .ps-menu-button': {
                            padding: 0,
                        },
                        '& .ps-menuitem-root.main-menu .ps-menu-button:hover': {
                            background: `${colors.primary[400]} !important`,
                        },
                    }}
                >
                    {/* LOGO AND MENU ICON */}
                    <MenuItem 
                        className='main-menu'
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant='h3' color={colors.grey[100]}>
                                    ADMIN
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon/>
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                alt="profile-user"
                                width="100px"
                                height="100px"
                                src={UserImage}
                                style={{ cursor: "pointer", background:`${colors.primary[500]}`,  borderRadius: "50%" }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                variant="h2"
                                color={colors.grey[100]}
                                fontWeight="bold"
                                sx={{ m: "10px 0 0 0" }}
                                >
                                Elon Musk
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>
                                VP Fancy Admin
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    {/* MENU */}
                    <Item
                        to="/"
                        title="Dashboard"
                        icon={<HomeOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <SubMenu
                        label="Data"
                        defaultOpen={true}
                        rootStyles={{
                            "& .ps-menu-button": {
                                paddingLeft: '25px !important'
                            }
                        }}
                    >
                        <Item
                            to="/team"
                            title="Manage Team"
                            icon={<PeopleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            to="/contacts"
                            title="Contacts Information"
                            icon={<ContactsOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            to="/invoices"
                            title="Invoices Balances"
                            icon={<ReceiptOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </SubMenu>

                    <SubMenu
                        label="Pages"
                        defaultOpen={true}
                        rootStyles={{
                            "& .ps-menu-button": {
                                paddingLeft: '25px !important'
                            }
                        }}
                    >
                        <Item
                            title="Profile Form"
                            to="/profile"
                            icon={<PersonOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Calendar"
                            to="/calendar"
                            icon={<CalendarTodayOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="FAQ Page"
                            to="/faq"
                            icon={<HelpOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </SubMenu>

                    <SubMenu
                        label="Charts"
                        defaultOpen={true}
                        rootStyles={{
                            "& .ps-menu-button": {
                                paddingLeft: '25px !important'
                            }
                        }}
                    >
                        <Item
                            title="Bar Chart"
                            to="/bar-chart"
                            icon={<BarChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Pie Chart"
                            to="/pie-chart"
                            icon={<PieChartOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Line Chart"
                            to="/line-chart"
                            icon={<TimelineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Geography Chart"
                            to="/geo-chart"
                            icon={<MapOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </SubMenu>

                    {/* <MenuItem component={<Link to="/documentation" />}> Documentation</MenuItem>
                    <MenuItem component={<Link to="/calendar" />}> Calendar</MenuItem>
                    <MenuItem component={<Link to="/e-commerce" />}> E-commerce</MenuItem> */}

                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;
