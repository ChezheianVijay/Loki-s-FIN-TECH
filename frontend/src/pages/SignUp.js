import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { userSignUp } from "../services/authService";

import brandlogo from "../assets/13_horns_sidebar_logo_dark.png";
import "../styles/Signup.css";

export default function SignUp() {

    const [formdata, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: ""
    });
    const [alertMsg, setAlertMsg] = useState({ status: "", message: "" });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setAlertMsg({ status: "", message: "" });
        const { name, value } = e.target;
        setFormData({ ...formdata, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setAlertMsg({ status: "", message: "" });
        if (!formdata.firstName) return setAlertMsg("Firstname is required");
        if (!formdata.lastName) return setAlertMsg("Lastname is required");
        if (!formdata.email) return setAlertMsg("Email is required");
        if (!formdata.phone) return setAlertMsg("Phone is required");
        if (!formdata.password) return setAlertMsg("Password is required");
        if (formdata.password.length <= 6) return setAlertMsg("Password must be at least 6 characters");

        try {
            const response = await userSignUp(formdata);
            console.log(response);
            if (response.status === 201) {
                setAlertMsg({ status: "success", message: "Account created successfully !" });
                navigate("/login");
            } else {
                setAlertMsg({ status: "error", message: "Something went wrong !" });
            }

        } catch (err) {
            setAlertMsg({ status: "error", message: "Something went wrong !" });
            console.log("Signup error:", err);
        }
    }

    return (
        <div className="main-block">

            <div className="signup-left-panel">
                <div className="signup-logo">
                    <img src={brandlogo} alt="loki's-fin-tech-logo" className="logo" />
                </div>

                <div className="signup-brand-quote">
                    Everything finance,
                    simplified.
                </div>

                <div className="signup-brand-desc">
                    Set up your financial workspace in minutes. Explore live user management and asset tracking instantly.
                </div>

                <div className="signup-card-grps">

                    <div className="signup-container">
                        <div className="signup-feature-icon">
                            <span className="material-icons">group</span>
                        </div>
                        <div className="signup-feature-content">
                            <div className="signup-feature-content-header">User & Portfolio Management</div>
                            <p className="signup-feature-content-desc">Comprehensive user directories, account tracking, and custom asset views.</p>
                        </div>
                    </div>

                    <div className="signup-container">
                        <div className="signup-feature-icon">
                            <span className="material-icons">payments</span>
                        </div>
                        <div className="signup-feature-content">
                            <div className="signup-feature-content-header">Transactions & Invoicing</div>
                            <p className="signup-feature-content-desc">CRUD operations, automated financial reporting, and transaction histories.</p>
                        </div>
                    </div>

                    <div className="signup-container">
                        <div className="signup-feature-icon">
                            <span className="material-icons">analytics</span>
                        </div>
                        <div className="signup-feature-content">
                            <div className="signup-feature-content-header">Analytics & Insights</div>
                            <p className="signup-feature-content-desc">Real-time balance trends, performance metrics, and financial summaries.</p>
                        </div>
                    </div>

                    <div className="signup-container">
                        <div className="signup-feature-icon">
                            <span className="material-icons">security</span>
                        </div>
                        <div className="signup-feature-content">
                            <div className="signup-feature-content-header">Enterprise-Grade Security</div>
                            <p className="signup-feature-content-desc">Role-based access controls, secure tokens, and encrypted data handling.</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="signup-right-panel">

                <div className="signup-right-container">

                    <div className="signup-logo">
                        <img src={brandlogo} alt="loki's-fin-tech-logo" className="logo" />
                    </div>

                    <div className="signup-greet">Create your account</div>
                    <div className="signup-greet-desc">
                        Create a Loki's FIN-TECH account to manage dashboards, active loans, credits, and debits in one place.
                    </div>

                    <form className="signup-form-container" onSubmit={handleSubmit}>
                        <div className="input-grp">
                            <label className="input-label" htmlFor="firstName">FirstName</label>
                            <input type="text" id="firstName" className="firstName" name="firstName" value={formdata.firstName} placeholder="Enter the FirstName" onChange={handleChange} />
                        </div>
                        <div className="input-grp">
                            <label className="input-label" htmlFor="lastName">LastName</label>
                            <input type="text" id="lastName" className="lastName" name="lastName" value={formdata.lastName} placeholder="Enter the LastName" onChange={handleChange} />
                        </div>

                        <div className="input-grp">
                            <label className="input-label" htmlFor="email">Email</label>
                            <input type="email" id="email" className="email" name="email" value={formdata.email} placeholder="Enter the Email" onChange={handleChange} />
                        </div>
                        <div className="input-grp">
                            <label className="input-label" htmlFor="phone">Phone</label>
                            <input type="text" id="phone" className="phone" name="phone" value={formdata.phone} placeholder="Enter the Phone" onChange={handleChange} />
                        </div>

                        <div className="input-grp">
                            <label className="input-label" htmlFor="password">Password</label>
                            <input type="password" id="password" className="password" name="password" value={formdata.password} placeholder="Enter the password" onChange={handleChange} />
                        </div>

                        <div className="signup-err-block">
                            {alertMsg?.status && (
                                <p className="signup-err-msg" style={{ color: alertMsg.status === "success" ? "green" : "red" }}>
                                    {alertMsg.message}
                                </p>
                            )}

                        </div>

                        <div className="signup-btn-grp">
                            <button className="signup-btn" type="submit">
                                Create Account
                            </button>
                            <div className="login-desc">
                                <span>Already have an account ?</span>
                                <Link to='/login' className="login-link">
                                    Login →
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}