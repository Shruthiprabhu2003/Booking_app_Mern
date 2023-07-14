import { useNavigate } from "react-router-dom"
import "./navbar.css"

export const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate("/")
  }
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo" onClick={handleClick}>lamabooking</span>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}
