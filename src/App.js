import React, { useEffect } from "react";
import { ColorModeContext, tokens, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from './scenes/global/Topbar';
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Profile from "./scenes/profile";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import BarChartPage from "./scenes/charts/bar";
import PieChartPage from "./scenes/charts/pie";
import LineChartPage from "./scenes/charts/line";
import GeoChartPage from "./scenes/charts/geo";

function App() {
  const root = document.documentElement;
  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    const scrollbarTrackColor = getComputedStyle(root).getPropertyValue('--scrollbar-track-color');
    const scrollbarThumbColor = getComputedStyle(root).getPropertyValue('--scrollbar-thumb-color');
    const scrollbarThumbHoverColor = getComputedStyle(root).getPropertyValue('--scrollbar-thumb-color-hover');

    if(theme.palette.mode === "dark") {
      root.style.setProperty('--scrollbar-thumb-color', colors.primary[600]);
      root.style.setProperty('--scrollbar-thumb-color-hover', colors.primary[700]);
    } else {
      root.style.setProperty('--scrollbar-thumb-color', colors.grey[700]);
      root.style.setProperty('--scrollbar-thumb-color-hover', colors.grey[600]);
    }
  }, [colors]);
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Router>
          <div className="app">
            <Sidebar/>
            <main className="content">
              <Topbar/>
              <Box sx={{overflowY: 'auto', flex: 1}} >
                <Routes>
                
                  <Route path="/" element={<Dashboard/>} />

                  <Route path="/team" element={<Team/>} />
                  <Route path="/contacts" element={<Contacts/>} />
                  <Route path="/invoices" element={<Invoices/>} />

                  <Route path="/profile" element={<Profile/>} />
                  <Route path="/calendar" element={<Calendar/>} />
                  <Route path="/faq" element={<FAQ/>} />

                  <Route path="/bar-chart" element={<BarChartPage/>} />
                  <Route path="/pie-chart" element={<PieChartPage/>} />
                  <Route path="/line-chart" element={<LineChartPage/>} />
                  <Route path="/geo-chart" element={<GeoChartPage/>} />

                </Routes>
              </Box>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
