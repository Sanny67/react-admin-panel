import React from 'react';
import StatBox from './StatBox';
import EmailIcon from "@mui/icons-material/Email";
import { tokens } from '../../theme';
import { useTheme } from '@mui/material';

const EmailsStatCard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
            <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
            }
        />
    );
};

export default EmailsStatCard;
