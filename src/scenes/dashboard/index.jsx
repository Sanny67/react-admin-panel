import React, { Suspense } from "react";
import { Box, Button, IconButton, Typography, useTheme, useMediaQuery, Tooltip, CircularProgress } from "@mui/material";
import { tokens } from "../../theme";
import { styled } from "@mui/system";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";

// import EmailsStatCard from "../../components/dashboard/EmailsStatCard";
// import SalesStatCard from "../../components/dashboard/SalesStatCard";
// import NewClientsStatCard from "../../components/dashboard/NewClientsStatCard";
// import TrafficStatCard from "../../components/dashboard/TrafficStatCard";
// import BarBox from "../../components/dashboard/BarBox";
// import TransactionsBox from "../../components/dashboard/TransactionsBox";
import CampaignBox from "../../components/dashboard/CampaignBox";
import SalesBox from "../../components/dashboard/SalesBox";
import GeoChartBox from "../../components/dashboard/GeoChartBox";
import StatCard from "../../components/dashboard/StatCard";

const EmailsStatCard = React.lazy(() => import('../../components/dashboard/EmailsStatCard'));
const SalesStatCard = React.lazy(() => import('../../components/dashboard/SalesStatCard'));
const NewClientsStatCard = React.lazy(() => import('../../components/dashboard/NewClientsStatCard'));
const TrafficStatCard = React.lazy(() => import('../../components/dashboard/TrafficStatCard'));

const BarBox = React.lazy(() => import('../../components/dashboard/BarBox'));
const TransactionsBox = React.lazy(() => import('../../components/dashboard/TransactionsBox'));
// const BarChart = React.lazy(() => import('../../components/BarChart'));
// const GeoChart = React.lazy(() => import('../../components/GeoChart'));
// const ProgressCircle = React.lazy(() => import('../../components/ProgressCircle'));

const CardLoader = () => {
  return (
    <Box height="100%" width="100%" display="flex" justifyContent="center" alignItems="center">
      <CircularProgress style={{ color: '#fff' }} />
    </Box>
  )
};

const BarBoxWrapper = styled(Box)(({ theme }) => {
  const theme1 = useTheme();
  const colors = tokens(theme1.palette.mode);
  
  return{
      gridRow: 'span 2',
      gridColumn: 'span 8',
      backgroundColor: colors.primary[400],
      [theme.breakpoints.down('md')]: {
          gridColumn: 'span 12',
      },
      [theme.breakpoints.down('sm')]: {
          gridColumn: 'span 12',
      },
  }
});

const TransactionsBoxWrapper = styled(Box)(({ theme }) => {
  const theme1 = useTheme();
  const colors = tokens(theme1.palette.mode);

  return{
      overflow: 'auto',
      gridRow: 'span 2',
      gridColumn: 'span 4',
      backgroundColor: colors.primary[400],
      "& .MuiBox-root":{
          borderColor: theme.palette.mode==="light" ? colors.primary[300] : "unset",
      },
      [theme.breakpoints.down('md')]: {
          gridColumn: 'span 6',
      },
      [theme.breakpoints.down('sm')]: {
          gridColumn: 'span 12',
      },
  }
});

const CampaignBoxWrapper = styled(Box)(({ theme }) => {
  const theme1 = useTheme();
  const colors = tokens(theme1.palette.mode);

  return{
      padding: '30px',
      gridRow: 'span 2',
      gridColumn: 'span 4',
      backgroundColor: colors.primary[400],
      [theme.breakpoints.down('md')]: {
          gridColumn: 'span 6',
      },
      [theme.breakpoints.down('sm')]: {
          gridColumn: 'span 12',
      },
  }
});

const SalesBoxWrapper = styled(Box)(({ theme }) => {
  const theme1 = useTheme();
  const colors = tokens(theme1.palette.mode);

  return{
      gridRow: 'span 2',
      gridColumn: 'span 4',
      backgroundColor: colors.primary[400],
      [theme.breakpoints.down('md')]: {
          gridColumn: 'span 6',
      },
      [theme.breakpoints.down('sm')]: {
          gridColumn: 'span 12',
      },
  }
});

const GeoChartBoxWrapper = styled(Box)(({ theme }) => {
  const theme1 = useTheme();
  const colors = tokens(theme1.palette.mode);

  return{
      padding: '30px',
      gridRow: 'span 2',
      gridColumn: 'span 4',
      backgroundColor: colors.primary[400],
      [theme.breakpoints.down('md')]: {
          gridColumn: 'span 6',
      },
      [theme.breakpoints.down('sm')]: {
          gridColumn: 'span 12',
      },
  }
});

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const DownloadReportButton = () => {
    const isMobile = useMediaQuery('(max-width:426px)');
    if(isMobile){
      return (
        <Box>
          <Tooltip title="Download Reports">
            <IconButton>
              <DownloadOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      );
    } else {
      return (
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      );
    }
  };

  return (
    <Box m="20px">

      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <DownloadReportButton/>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <StatCard>
          <Suspense fallback={<CardLoader/>}>
            <EmailsStatCard/>
          </Suspense>
        </StatCard>

        <StatCard>
          <Suspense fallback={<CardLoader/>}>
            <SalesStatCard/>
          </Suspense>
        </StatCard>

        <StatCard>
          <Suspense fallback={<CardLoader/>}>
            <NewClientsStatCard/>
          </Suspense>
        </StatCard>

        <StatCard>
          <Suspense fallback={<CardLoader/>}>
            <TrafficStatCard/>
          </Suspense>
        </StatCard>



        {/* ROW 2 */}
        <BarBoxWrapper>
          <Suspense fallback={<CardLoader/>}>
            <BarBox/>
          </Suspense>
        </BarBoxWrapper>

        <TransactionsBoxWrapper>
          <Suspense fallback={<CardLoader/>}>
            <TransactionsBox/>
          </Suspense>
        </TransactionsBoxWrapper>


        
        {/* ROW 3 */}
        <CampaignBoxWrapper>
          <Suspense fallback={<CardLoader/>}>
            <CampaignBox/>
          </Suspense>
        </CampaignBoxWrapper>


        <SalesBoxWrapper>
          <Suspense fallback={<CardLoader/>}>
            <SalesBox/>
          </Suspense>
        </SalesBoxWrapper>

        <GeoChartBoxWrapper>
          <Suspense fallback={<CardLoader/>}>
            <GeoChartBox/>
          </Suspense>
        </GeoChartBoxWrapper>


      </Box>
      
    </Box>
  );
};

export default Dashboard;
