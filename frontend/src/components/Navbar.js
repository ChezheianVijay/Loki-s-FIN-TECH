import { useEffect, useState } from "react"

export default function Navbar({ onToggleBar, onMobileTogglebar }) {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleSize = () => {
            setIsMobile(window.innerWidth <= 768);
        }

        window.addEventListener("resize", handleSize);
        return () => window.removeEventListener("resize", handleSize);
    }, []);

    const handleToggleBar = () => {
        isMobile ? onMobileTogglebar() : onToggleBar();
    }

    return (
        <div className="dashboard-header">

            <button className="ham-menu-btn" onClick={handleToggleBar}>
                <span className="material-icons">menu</span>
            </button>

            <div className="ham-menu-profile">

                <div className="ham-menu-avatar">
                    <span className="material-icons">account_circle</span>
                </div>

                <div className="ham-menu-avatar-content">

                    <div className="ham-menu-avatar-name">Lora Piterson</div>
                    <div className="ham-menu-avatar-role">USER</div>

                </div>

            </div>

        </div>
    )
}