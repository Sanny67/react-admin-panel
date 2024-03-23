import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { tokens } from '../theme';

const Header = ({title, subtitle}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box mb="30px">

            <Typography
                variant="h2"
                sx={{mb: '5px'}}
                fontWeight="bold"
                textTransform="uppercase"
                color={colors.grey[100]}
            >{title}</Typography>

            <Typography
                variant="h5"
                color={colors.greenAccent[400]}
            >{subtitle}</Typography>

        </Box>
    );
};

export default Header;
