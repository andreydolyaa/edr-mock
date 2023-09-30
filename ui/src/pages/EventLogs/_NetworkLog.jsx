import { useState } from "react";
import { ChevronUp } from "../../icons/ChevronUp";

const NetworkLog = ({ log }) => {
  const [details, setDetails] = useState(false);

  const showDetails = () => {
    setDetails(!details);
  };

  return (
    <div className="log network-log" onClick={() => showDetails()}>
      {details}
      <div className="title">
        <div>[{log.dateTime}]: Network Traffic Activity</div>
        <ChevronUp conditional={details ? "rotate" : "rotate-back"} />
      </div>
      {details && (
        <div className="details fade-in">
          <div className="msg">
            Anomaly Detected: <span className="anomaly">{log.anomalyDetected}</span>
          </div>
          <div className="msg">Source IP Range: {log.sourceIpRange}</div>
          <div className="msg">Protocol: {log.protocol}</div>
          <div className="msg">Log ID: {log.id}</div>
          <div className="msg">Original Timestamp: {log.dateTime}</div>
        </div>
      )}
    </div>
  );
};

export default NetworkLog;
