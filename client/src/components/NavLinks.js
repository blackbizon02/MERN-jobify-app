import links from "../utils/links";
import { NavLink } from "react-router-dom";

const NavLinks = ({ toggleSidebar }) => {
  return links.map((link) => {
    const { icon, id, path, text } = link;

    return (
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        onClick={toggleSidebar}
        key={id}
      >
        <span className="icon">{icon}</span>
        {text}
      </NavLink>
    );
  });
};

export default NavLinks;
