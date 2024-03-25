import React from 'react';
import { styled } from "@mui/system";
import { Box, useTheme } from '@mui/material';
import { tokens } from '../../theme';

const StatCard = styled(Box)(({ theme }) => {
    const theme1 = useTheme();
    const colors = tokens(theme1.palette.mode);

    return {
        gridColumn: 'span 3',
        backgroundColor: colors.primary[400],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            gridColumn: 'span 6',
        }
    };
});

export default StatCard;
