import React from 'react';
import GeoChart from '../GeoChart';
import { styled } from "@mui/system";
import { tokens } from '../../theme';
import { Box, Typography, useTheme } from '@mui/material';


const GeoChartBox = () => {
    return (
        <>
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeoChart isDashboard={true} />
          </Box>
        </>
    );
};

export default GeoChartBox;
