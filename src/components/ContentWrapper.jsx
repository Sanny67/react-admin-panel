import { Box } from '@mui/material';
import React from 'react';

const ContentWrapper = ({children, sx={}}) => {
    return (
        <Box height="70vh" sx={{...sx}}>
            {children}
        </Box>
    );
};

export default ContentWrapper;
