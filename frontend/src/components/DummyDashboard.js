import { NavLink, Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";

import "../styles/Dashboard.css";
import sidebarlogo from "../assets/13_horns_sidebar_logo_dark.png";

export default function DummyDashboard() {

    return (
        <div className="dashboard">

            {/* Sidebar */}

            <div className="sidebar">

                <div className="sidebar-logo">
                    <img src={sidebarlogo} alt="loki's-fin-tech-logo" className="logo" />
                </div>

                <nav className="menu-container">

                    <div className="menu">
                        <NavLink to='/dashboard' end>
                            <span className="material-icons">home</span>
                            Home
                        </NavLink>
                    </div>
                    <div className="menu">
                        <NavLink to='/dashboard/users'>
                            <span className="material-icons">group</span>
                            Users
                        </NavLink>
                    </div>
                    <div className="menu">
                        <NavLink to='/dashboard/products'>
                            <span className="material-icons">inventory_2</span>
                            Products
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
                    <button className="logout-btn" >
                        <span className="material-icons">logout</span>
                        Logout
                    </button>
                </div>

            </div>

            {/* Main Container */}

            <div className="dashboard-main">

                {/* Header Container */}

                <div className="dashboard-header">

                    <div className="ham-menu-btn">
                        <span className="material-icons">menu</span>
                    </div>

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

                {/* Body Container */}

                <div className="dashboard-content">


                    <div className="content">

                        {/* <div className="dynamic-page-home"></div> */}

                        <div className="breadcrumb">
                            <div className="content-header">Welcome back, Lora</div>
                        </div>

                        <div className="summary-card-grps">

                            <div className="card">
                                <div>
                                    <span className="material-icons">group</span>
                                </div>
                                <div className="card-content">
                                    <p className="card-head">Total Users</p>
                                    <div className="card-count">12</div>
                                </div>
                            </div>

                            <div className="card">
                                <div>
                                    <span className="material-icons">inventory_2</span>
                                </div>
                                <div className="card-content">
                                    <p className="card-head">Total Products</p>
                                    <div className="card-count">06</div>
                                </div>
                            </div>

                        </div>

                        <div className="review-table">
                            <table className="users-table">
                                <thead>
                                    <tr>
                                        <th>S.NO</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Phone</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Alex</td>
                                        <td>Rivera</td>
                                        <td>+1 (555) 234-5678</td>
                                        <td>
                                            <button className="action-btn edit" title="Edit">
                                                <span className="material-icons">edit</span>
                                            </button>
                                            <button className="action-btn delete" title="Delete">
                                                <span className="material-icons">delete</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Sarah</td>
                                        <td>Chen</td>
                                        <td>+1 (555) 876-5432</td>
                                        <td>
                                            <button className="action-btn edit" title="Edit">
                                                <span className="material-icons">edit</span>
                                            </button>
                                            <button className="action-btn delete" title="Delete">
                                                <span className="material-icons">delete</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Michael</td>
                                        <td>Vance</td>
                                        <td>+1 (555) 345-6789</td>
                                        <td>
                                            <button className="action-btn edit" title="Edit">
                                                <span className="material-icons">edit</span>
                                            </button>
                                            <button className="action-btn delete" title="Delete">
                                                <span className="material-icons">delete</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Priya</td>
                                        <td>Sharma</td>
                                        <td>+91 98765 43210</td>
                                        <td>
                                            <button className="action-btn edit" title="Edit">
                                                <span className="material-icons">edit</span>
                                            </button>
                                            <button className="action-btn delete" title="Delete">
                                                <span className="material-icons">delete</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>David</td>
                                        <td>Miller</td>
                                        <td>+1 (555) 432-1098</td>
                                        <td>
                                            <button className="action-btn edit" title="Edit">
                                                <span className="material-icons">edit</span>
                                            </button>
                                            <button className="action-btn delete" title="Delete">
                                                <span className="material-icons">delete</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Elena</td>
                                        <td>Rostova</td>
                                        <td>+44 20 7946 0912</td>
                                        <td>
                                            <button className="action-btn edit" title="Edit">
                                                <span className="material-icons">edit</span>
                                            </button>
                                            <button className="action-btn delete" title="Delete">
                                                <span className="material-icons">delete</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Marcus</td>
                                        <td>Aurelius</td>
                                        <td>+1 (555) 678-9012</td>
                                        <td>
                                            <button className="action-btn edit" title="Edit">
                                                <span className="material-icons">edit</span>
                                            </button>
                                            <button className="action-btn delete" title="Delete">
                                                <span className="material-icons">delete</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Marcus</td>
                                        <td>Aurelius</td>
                                        <td>+1 (555) 678-9012</td>
                                        <td>
                                            <button className="action-btn edit" title="Edit">
                                                <span className="material-icons">edit</span>
                                            </button>
                                            <button className="action-btn delete" title="Delete">
                                                <span className="material-icons">delete</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>Marcus</td>
                                        <td>Aurelius</td>
                                        <td>+1 (555) 678-9012</td>
                                        <td>
                                            <button className="action-btn edit" title="Edit">
                                                <span className="material-icons">edit</span>
                                            </button>
                                            <button className="action-btn delete" title="Delete">
                                                <span className="material-icons">delete</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>Marcus</td>
                                        <td>Aurelius</td>
                                        <td>+1 (555) 678-9012</td>
                                        <td>
                                            <button className="action-btn edit" title="Edit">
                                                <span className="material-icons">edit</span>
                                            </button>
                                            <button className="action-btn delete" title="Delete">
                                                <span className="material-icons">delete</span>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="prdt-crd-grps">

                            <div className="prdt-crd">

                                <div className="prdt-crd-header">
                                    <p className="prdt-crd-header-desc">Product Information</p>

                                    <div className="prdt-crd-header-action">
                                        <button type="button" className="prdt-edit">
                                            <span className="material-icons">edit</span>
                                        </button>
                                        <button type="button" className="prdt-delete">
                                            <span className="material-icons">delete</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="prdt-crd-content">
                                    <div className="prdt-crd-left">
                                        <div className="prdt-crd-section">
                                            <div className="sub-head">S.NO</div>
                                            <div className="sub-cont">1</div>
                                        </div>
                                        <div className="prdt-crd-section">
                                            <div className="sub-head">Name</div>
                                            <div className="sub-cont">Karthi Keyan</div>
                                        </div>
                                        <div className="prdt-crd-section">
                                            <div className="sub-head">Type</div>
                                            <div className="sub-cont">Personal Loan</div>
                                        </div>
                                    </div>

                                    <div className="prdt-crd-right">
                                        <div className="prdt-crd-section">
                                            <div className="sub-head">Interest Rate</div>
                                            <div className="sub-cont">12.5 %</div>
                                        </div>
                                        <div className="prdt-crd-section">
                                            <div className="sub-head">Tenure months</div>
                                            <div className="sub-cont">6</div>
                                        </div>
                                        <div className="prdt-crd-section">
                                            <div className="sub-head">Status</div>
                                            <div className="sub-cont">ACTIVE</div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="prdt-crd">

                                <div className="prdt-crd-header">
                                    <p className="prdt-crd-header-desc">Product Information</p>

                                    <div className="prdt-crd-header-action">
                                        <button type="button" className="prdt-edit">
                                            <span className="material-icons">edit</span>
                                        </button>
                                        <button type="button" className="prdt-delete">
                                            <span className="material-icons">delete</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="prdt-crd-content">
                                    <div className="prdt-crd-left">
                                        <div className="prdt-crd-section">
                                            <div className="sub-head">S.NO</div>
                                            <div className="sub-cont">1</div>
                                        </div>
                                        <div className="prdt-crd-section">
                                            <div className="sub-head">Name</div>
                                            <div className="sub-cont">Karthi Keyan</div>
                                        </div>
                                        <div className="prdt-crd-section">
                                            <div className="sub-head">Type</div>
                                            <div className="sub-cont">Personal Loan</div>
                                        </div>
                                    </div>

                                    <div className="prdt-crd-right">
                                        <div className="prdt-crd-section">
                                            <div className="sub-head">Interest Rate</div>
                                            <div className="sub-cont">12.5 %</div>
                                        </div>
                                        <div className="prdt-crd-section">
                                            <div className="sub-head">Tenure months</div>
                                            <div className="sub-cont">6</div>
                                        </div>
                                        <div className="prdt-crd-section">
                                            <div className="sub-head">Status</div>
                                            <div className="sub-cont">ACTIVE</div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="prdt-crd">

                                <div className="prdt-crd-header">
                                    <p className="prdt-crd-header-desc">Product Information</p>

                                    <div className="prdt-crd-header-action">
                                        <button type="button" className="prdt-edit">
                                            <span className="material-icons">edit</span>
                                        </button>
                                        <button type="button" className="prdt-delete">
                                            <span className="material-icons">delete</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="prdt-crd-content">
                                    <div className="prdt-crd-left">
                                        <div className="prdt-crd-section">
                                            <div className="sub-head">S.NO</div>
                                            <div className="sub-cont">1</div>
                                        </div>
                                        <div className="prdt-crd-section">
                                            <div className="sub-head">Name</div>
                                            <div className="sub-cont">Karthi Keyan</div>
                                        </div>
                                        <div className="prdt-crd-section">
                                            <div className="sub-head">Type</div>
                                            <div className="sub-cont">Personal Loan</div>
                                        </div>
                                    </div>

                                    <div className="prdt-crd-right">
                                        <div className="prdt-crd-section">
                                            <div className="sub-head">Interest Rate</div>
                                            <div className="sub-cont">12.5 %</div>
                                        </div>
                                        <div className="prdt-crd-section">
                                            <div className="sub-head">Tenure months</div>
                                            <div className="sub-cont">6</div>
                                        </div>
                                        <div className="prdt-crd-section">
                                            <div className="sub-head">Status</div>
                                            <div className="sub-cont">ACTIVE</div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>

                    </div>

                </div>

                <Outlet />

            </div>
        </div>
    )
}