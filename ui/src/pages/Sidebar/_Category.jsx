import { iconsMapping } from "../../icons/index";
import { NavLink } from "react-router-dom";

const Category = ({ name, icon, link }) => {
  const IconComponent = iconsMapping[icon] || null;
  return (
    <NavLink to={link} className="category">
      <div className="item">
        <div className="icon">{IconComponent && <IconComponent />}</div>
        <div>{name}</div>
      </div>
    </NavLink>
  );
};

export default Category;
