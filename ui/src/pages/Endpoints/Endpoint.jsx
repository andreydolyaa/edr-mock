import { useState } from "react";
import { ChevronUp } from "../../icons/ChevronUp";
// import { iconsMapping } from "../../icons/index"
import { Monitor } from "../../icons/Monitor";

const Endpoint = ({ endpoint }) => {
  const [details, setDetails] = useState(false);

  const hostType = (name) => {
    if (name.includes("workstation")) return <Monitor />;
  };

  hostType(endpoint.hostname);

  const showDetails = () => {
    setDetails(!details);
  };

  return (
    <div className="endpoint" onClick={() => showDetails()}>
      {details}
      <div className="title">
        <div className="items">
          <div className="endpoint-icon">{hostType(endpoint.hostname)}</div>
          <div className="names">
            <div className="ip">{endpoint.ipAddress}</div>
            <div className="host">{endpoint.hostname}</div>
          </div>
        </div>
        <ChevronUp conditional={details ? "rotate" : "rotate-back"} />
      </div>
      {details && (
        <div className="details fade-in">
          {/* <div className="msg">
            Anomaly Detected: <span className="anomaly">{log.anomalyDetected}</span>
          </div>
          <div className="msg">Source IP Range: {log.sourceIpRange}</div>
          <div className="msg">Protocol: {log.protocol}</div>
          <div className="msg">Log ID: {log.id}</div>
          <div className="msg">Original Timestamp: {log.dateTime}</div> */}
        </div>
      )}
    </div>
  );
};

export default Endpoint;
