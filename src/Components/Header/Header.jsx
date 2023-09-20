import {  NavLink } from "react-router-dom";
import "./Style.css"
const Header = () => {
    return (
        <div className="text-center">
            <h1 className="text-3xl">This is header</h1>
            <nav className="space-x-6 space-y-8 font-bold">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </nav>
        </div>
    );
};

export default Header;