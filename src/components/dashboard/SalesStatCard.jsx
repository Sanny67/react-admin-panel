import React from 'react';
import StatBox from './StatBox';
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import { tokens } from '../../theme';
import { useTheme } from '@mui/material';

const SalesStatCard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <StatBox
      title="431,225"
      subtitle="Sales Obtained"
      progress="0.50"
      increase="+21%"
      icon={
        <PointOfSaleIcon
          sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
        />
      }
    />
  );
};

export default SalesStatCard;
