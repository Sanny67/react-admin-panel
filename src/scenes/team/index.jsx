import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import ContentWrapper from '../../components/ContentWrapper';

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isTablet = useMediaQuery('(max-width:769px)');
    const isMobile = useMediaQuery('(max-width:710px)');
    const columns = [
      { field: "id", headerName: "ID" },
      {
        field: "name",
        headerName: "Name",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      {
        field: "age",
        headerName: "Age",
        type: "number",
        headerAlign: "left",
        align: "left",
      },
      {
        field: "phone",
        headerName: "Phone Number",
        flex: 1,
      },
      {
        field: "email",
        headerName: "Email",
        flex: 1,
      },
      {
        field: "accessLevel",
        headerName: "Access Level",
        flex: 1,
        renderCell: ({ row: { access } }) => {
          return (
            <Box
              width="60%"
              m="0 auto"
              p="5px"
              display="flex"
              justifyContent="center"
              backgroundColor={
                access === "admin"
                  ? colors.greenAccent[800]
                  : access === "manager"
                  ? colors.greenAccent[700]
                  : colors.greenAccent[600]
              }
              borderRadius="4px"
            >
              {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
              {access === "manager" && <SecurityOutlinedIcon />}
              {access === "user" && <LockOpenOutlinedIcon />}
              <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                {access}
              </Typography>
            </Box>
          );
        },
      },
    ];
  
    return (
      <Box m="20px">
        <Header title="Team" subtitle="Managing the Team Members" />
        <ContentWrapper
          sx={{
            m: "40px 0 0 0",
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-toolbarContainer": {
              display: "none",
            },
            "& .MuiDataGrid-columnHeader:not(:first-of-type), & .MuiDataGrid-cell:not(:first-of-type)": {
              minWidth: isMobile ? "100px !important" : "unset",
            },
            "& .MuiDataGrid-columnHeader:last-of-type, & .MuiDataGrid-cell:last-of-type": {
              minWidth: isTablet ? "200px !important" : isMobile ? "180px !important" : "unset",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          {/* <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} /> */}
          <DataGrid
            checkboxSelection
            rows={mockDataTeam}
            columns={columns}
          />
        </ContentWrapper>
      </Box>
    );
};

export default Team;
