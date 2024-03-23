import { Box } from "@mui/material";
import LineChart from "../../../components/LineChart";
import Header from "../../../components/Header";
import ContentWrapper from "../../../components/ContentWrapper";

const LineChartPage = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <ContentWrapper>
        <LineChart />
      </ContentWrapper>
    </Box>
  );
};

export default LineChartPage;
