import React from 'react';
import { styled } from "@mui/system";
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import ProgressCircle from '../ProgressCircle';

const CampaignBox = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <>
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </>
    );
};

export default CampaignBox;
