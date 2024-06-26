import { Box, IconButton, Typography, useTheme } from '@mui/material';
import React from 'react';
import { tokens } from '../../theme';
import { styled } from "@mui/system";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from '../LineChart';

const BarBox = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    return (
        <>
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </>
    );
};

export default BarBox;
