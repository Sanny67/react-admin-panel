import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import { styled } from "@mui/system";
import BarChart from '../BarChart';

const SalesBox = () => {
    return (
        <>
            <Typography
                variant="h5"
                fontWeight="600"
                sx={{ padding: "30px 30px 0 30px" }}
            >
                Sales Quantity
            </Typography>
            <Box height="250px" mt="-20px">
                <BarChart isDashboard={true} />
            </Box>
        </>
    );
};

export default SalesBox;
