const Subtitle = ({ subtitle }) => {
  const styles = {
    color: "#fff",
    fontSize: "12px",
    margin: "30px 35px",
    borderBottom: "1px solid #515252",
    paddingBottom: "15px"
  };
  return (
    <div className="subtitle" style={styles}>
      {subtitle}
    </div>
  );
};

export default Subtitle;
