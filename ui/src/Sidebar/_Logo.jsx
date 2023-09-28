import { Hexagon } from "../Icons/Hexagon";
const Logo = () => {
  return (
    <div className="logo">
      <div className="icon">
        <Hexagon />
      </div>
      <h1>SIEM<span className="underscore"></span></h1>
    </div>
  );
};

export default Logo;
