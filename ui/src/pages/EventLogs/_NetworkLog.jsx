const NetworkLog = ({ log }) => {
  return <div className="log network-log">{JSON.stringify(log)}</div>;
};

export default NetworkLog;
