import Subtitle from "../../components/Subtitle";
import Category from "./_Category";
import Logo from "./_Logo";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo />
      <div className="categories">
        {/* Dashboard */}
        <Subtitle subtitle={"ENDPOINTS"} />
        <Category name={"Endpoints"} icon={"Monitor"} link={"/"} />
        <Category name={"Dashboard"} icon={"PieChart"} link={"/dashboard"} />

        {/* Security */}
        <Subtitle subtitle={"SECURITY"} />
        <Category name={"Alerts"} icon={"AlertTriangle"} link={"alerts"} />
        <Category name={"Incident Management"} icon={"HardDrive"} link={"incidents"} />

        {/* Network */}
        <Subtitle subtitle={"NETWORK"} />
        <Category name={"Network Traffic"} icon={"Server"} link={"network-traffic"} />

        {/* Settings */}
        <Subtitle subtitle={"CONFIGURATION"} />
        <Category name={"Settings"} icon={"Settings"} link={"settings"} />
      </div>
    </div>
  );
};

export default Sidebar;
