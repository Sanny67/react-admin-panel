import { Box } from "@mui/material";
import Header from "../../../components/Header";
import PieChart from "../../../components/PieChart";
import ContentWrapper from "../../../components/ContentWrapper";

const PieChartPage = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <ContentWrapper>
        <PieChart />
      </ContentWrapper>
    </Box>
  );
};

export default PieChartPage;
