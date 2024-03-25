import React from 'react';
import StatBox from './StatBox';
import TrafficIcon from "@mui/icons-material/Traffic";
import { tokens } from '../../theme';
import { useTheme } from '@mui/material';

const TrafficStatCard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
      <StatBox
        title="1,325,134"
        subtitle="Traffic Received"
        progress="0.80"
        increase="+43%"
        icon={
          <TrafficIcon
            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
          />
        }
      />
  );
};

export default TrafficStatCard;
