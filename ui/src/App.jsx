import Dashboard from "./Dashboard/Dashboard";
import EventLogs from "./EventLogs/EventLogs";
import Alerts from "./Alerts/Alerts";
import ThreatIntl from "./ThreatIntl/ThreatIntl";
import Reports from "./Reports/Reports";
import UserActivity from "./UserActivity/UserActivity";
import Settings from "./Settings/Settings";
import NetworkTraffic from "./NetworkTraffic/NetworkTraffic";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Incidents from "./Incidents/Incidents";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="sub-app">
          <Topbar />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/event-logs" element={<EventLogs />} />
            <Route exact path="/alerts" element={<Alerts />} />
            <Route exact path="/incidents" element={<Incidents />} />
            <Route exact path="/threat-intl" element={<ThreatIntl />} />
            <Route exact path="/network-traffic" element={<NetworkTraffic />} />
            <Route exact path="/reports" element={<Reports />} />
            <Route exact path="/users-activity" element={<UserActivity />} />
            <Route exact path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
