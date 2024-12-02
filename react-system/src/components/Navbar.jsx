import React from "react";
import { Link } from "react-router-dom";
 

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/user-management">User Management</Link></li>
                <li><Link to="/class-schedule">Class Schedule</Link></li>
                <li><Link to="/login">Login Page</Link></li>
                <li><Link to="/register">Register Page</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;