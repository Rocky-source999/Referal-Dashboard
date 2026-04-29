import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
  return (
    <div className="head-cont px-2 flex justify-between items-center bg-gradient-to-r from-orange-500 via-blue-500 to-red-500 h-16 text-white">
        <div className="flex items-center">
            <img src='https://www.logo.wine/a/logo/Go_(programming_language)/Go_(programming_language)-Logo.wine.svg' alt="Go" className="h-20 w-20"/>
            <h1 className="text-3xl font-bold">Business</h1>
        </div>
        <ul className="flex gap-20 items-center cursor-pointer font-bold text-lg">
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About Us</li></Link>
            <Link to="/courses"><li>Courses</li></Link>
            <Link to="/projects"><li>Projects</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
        </ul>
        <button>Try for free</button>
    </div>
  )
}

export default Header
