import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
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
import BarChart from "./scenes/charts/bar";
import PieChart from "./scenes/charts/pie";
import LineChart from "./scenes/charts/line";
import GeoChart from "./scenes/charts/geo";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Router>
          <div className="app">
            <Sidebar/>
            <main className="content">
              <Topbar/>
              <Routes>
              
                <Route path="/" element={<Dashboard/>} />

                <Route path="/team" element={<Team/>} />
                <Route path="/contacts" element={<Contacts/>} />
                <Route path="/invoices" element={<Invoices/>} />

                <Route path="/profile" element={<Profile/>} />
                <Route path="/calendar" element={<Calendar/>} />
                <Route path="/faq" element={<FAQ/>} />

                <Route path="/bar-chart" element={<BarChart/>} />
                <Route path="/pie-chart" element={<PieChart/>} />
                <Route path="/line-chart" element={<LineChart/>} />
                <Route path="/geo-chart" element={<GeoChart/>} />

              </Routes>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
