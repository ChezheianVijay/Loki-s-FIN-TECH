import "../styles/Dashboard.css";
import { useNavigate, Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {

    const navigate = useNavigate();

    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    const handleCollapse = (e) => {
        setIsCollapsed(prev => !prev);
    }

    const handleMobileSidebarCollapse = (e) => {
        setIsMobileSidebarOpen(!isMobileSidebarOpen);
    }

    const handleMobileSidebarClose = (e) => {
        setIsMobileSidebarOpen(false);
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (
        <div className={`dashboard ${isCollapsed ? "collapsed" : ""} ${isMobileSidebarOpen ? "mobile-sidebar-open" : ""}`}>

            {/* Mobile Sidebar Overlay */}
            {isMobileSidebarOpen && (
                <div className="mobile-overlay" onClick={handleMobileSidebarClose}></div>
            )}

            {/* Sidebar */}

            <Sidebar handleLogout={handleLogout} onMobileClose={handleMobileSidebarClose} />

            {/* Main Container */}

            <div className="dashboard-main">

                {/* Header Container */}

                <Navbar onToggleBar={handleCollapse} onMobileTogglebar={handleMobileSidebarCollapse} />

                {/* Body Container */}

                <div className="dashboard-content">

                    <div className="content">

                        {/* <div className="dynamic-page-home"></div> */}

                        <Outlet />

                    </div>

                </div>

            </div>

        </div >
    )
}