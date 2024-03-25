import React from 'react';
import StatBox from './StatBox';
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useTheme } from '@mui/material';
import { tokens } from '../../theme';

const NewClientsStatCard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <StatBox
      title="32,441"
      subtitle="New Clients"
      progress="0.30"
      increase="+5%"
      icon={
        <PersonAddIcon
          sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
        />
      }
    />
  );
};

export default NewClientsStatCard;
