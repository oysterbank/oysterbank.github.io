import { NavLink } from "react-router"

export function Nav() {
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
        })}
      >
        About
      </NavLink>
    </nav>
  )
}

export default Nav
