import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa"
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-card">
            <ul className="footer-card-text">
                <li className="font-bold">COMPANY</li>
                <li>About</li>
                <li>Premium</li>
                <li>Blog</li>
                <li>Referal Program</li>
            </ul>
            <ul className="footer-card-text">
                <li className="font-bold">HELP AND SUPPORT</li>
                <li>Contact Us</li>
                <li>Knowledge Center</li>
                <li>Premium Support</li>
            </ul>
            <ul className="footer-card-text">
                <li className="font-bold">LEARNING</li>
                <li>Learn Hub</li>
                <li>Tutorials</li>
                <li>Communities</li>
            </ul>
            <ul className="footer-card-text">
                <li className="font-bold">RESOURCES</li>
                <li>Third Party Tools</li>
                <li>Illustrations</li>
                <li>Stock Photos</li>
            </ul>
            <ul className="footer-card-text">
                <li className="font-bold">Legal</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Eula</li>
            </ul>
        </div>
        <div className="footer-links">
            <p className="text-gray-800 font-bold text-lg">GO Business</p>
            <p className="text-gray-500">@ 2024 GO Business, Inc. All rights reserved</p>
            <div className="flex item-center gap-5">
                <FaLinkedin className="h-6 w-6 text-gray-400"/>
                <FaFacebookF className="h-6 w-6 text-gray-400"/>
                <FaInstagram className="h-6 w-6 text-gray-400"/>
            </div>
        </div>
    </div>
  )
}

export default Footer
