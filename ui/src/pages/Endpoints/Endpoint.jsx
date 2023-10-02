import { useState } from "react";
import { ChevronUp } from "../../icons/ChevronUp";
import { Monitor } from "../../icons/Monitor";
import { Server } from "../../icons/Server";
import Details from "./Details/Details";

const Endpoint = ({ endpoint }) => {
  const [details, setDetails] = useState(false);

  const hostType = (name) => {
    if (
      name.includes("workstation") ||
      name.includes("laptop") ||
      name.includes("desktop")
    )
      return <Monitor />;
    if (name.includes("server")) return <Server />;
  };

  const showDetails = () => {
    setDetails(!details);
  };

  return (
    <div className="endpoint">
      <div className="title" onClick={() => showDetails()}>
        <div className="items">
          <div className="endpoint-icon">{hostType(endpoint.hostname)}</div>
          <div className="names">
            <div className="ip">{endpoint.ipAddress}</div>
            <div className="host">{endpoint.hostname}</div>
          </div>
        </div>
        <ChevronUp conditional={details ? "rotate" : "rotate-back"} />
      </div>
      {details && <Details endpoint={endpoint} />}
    </div>
  );
};

export default Endpoint;
