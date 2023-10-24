import { NavLink } from "react-router-dom";

const Nav = () => {
  return ( 
    <nav className="header-nav">
      <NavLink to="/">Strona główna</NavLink>
      <NavLink to="/o-nas">O nas</NavLink>
      <NavLink to="/kontakt">Kontakt</NavLink>
    </nav>
   );
}
 
export default Nav;