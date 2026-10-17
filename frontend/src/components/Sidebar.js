import { NavLink } from "react-router-dom";
import sidebarlogo from "../assets/13_horns_sidebar_logo_dark.png";

export default function Sidebar({ handleLogout, onMobileClose }) {
    return (
        <div className="sidebar" onClick={(e) => e.stopPropagation()}>

            <div className="sidebar-logo">
                <img src={sidebarlogo} alt="loki's-fin-tech-logo" className="logo" />
            </div>

            <nav className="menu-container">

                <div className="menu">
                    <NavLink to='/dashboard' end onClick={onMobileClose}>
                        <span className="material-icons">home</span>
                        <span className="menu-label">Home</span>
                    </NavLink>
                </div>
                <div className="menu">
                    <NavLink to='/dashboard/users' onClick={onMobileClose}>
                        <span className="material-icons">group</span>
                        <span className="menu-label">Users</span>
                    </NavLink>
                </div>
                <div className="menu">
                    <NavLink to='/dashboard/products' onClick={onMobileClose}>
                        <span className="material-icons">inventory_2</span>
                        <span className="menu-label">Products</span>
                    </NavLink>
                </div>

            </nav>

            <div className="sidebar-profile">

                <div className="sidebar-avatar">
                    <span className="material-icons">account_circle</span>
                </div>

                <div className="sidebar-avatar-content">
                    <div className="sidebar-avatar-name">Lora Piterson</div>
                    <div className="sidebar-avatar-role">HR Director</div>
                </div>

            </div>

            <div className="sidebar-logout">
                <button className="logout-btn" onClick={handleLogout}>
                    <span className="material-icons">logout</span>
                    <span className="menu-label">Logout</span>
                </button>
            </div>

        </div>
    )
}