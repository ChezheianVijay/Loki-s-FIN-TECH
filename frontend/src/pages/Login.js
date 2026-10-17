import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

import { userLogin } from "../services/authService";
import brandlogo from "../assets/13_horns_sidebar_logo_dark.png";

export default function Login() {

    const [formData, setFormdata] = useState({
        email: "",
        password: ""
    });
    const [alertMsg, setAlertMsg] = useState({ status: "", message: "" });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setAlertMsg({ status: "", message: "" });
        const { name, value } = e.target;
        setFormdata({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setAlertMsg({ status: "", message: "" });
        if (!formData.email) return setAlertMsg({ status: "error", message: "Email is required" });
        if (!formData.password) return setAlertMsg({ status: "error", message: "Password is required" });
        if (formData.password.length <= 6) return setAlertMsg({ status: "error", message: "Password must be at least 6 characters" });

        try {
            const response = await userLogin(formData);
            console.log(response);
            if (response.status === 200) {
                setAlertMsg({ status: "success", message: "Logged in successfully !" });
                localStorage.clear();
                localStorage.setItem("token", response.data.token);

                navigate("/dashboard");
            } else {
                setAlertMsg({ status: "error", message: "Something went wrong !" });
            }
        } catch (err) {
            setAlertMsg({ status: "error", message: "Something went wrong !" });
            console.log("Login error:", err);
        }
    }

    return (
        <div className="main-block">

            <div className="login-left-panel">

                <div className="login-logo">
                    <img src={brandlogo} alt="loki's-fin-tech-logo" className="logo" />
                </div>

                <div className="brand-quote">
                    Your finances,
                    one powerhouse.
                </div>

                <div className="brand-desc">
                    Transactions, analytics, user assets, and real-time security — all in one brilliantly simple workspace.
                </div>

                <div className="login-card-grps">

                    <div className="login-cards">
                        <div className="login-count">4.9★</div>
                        <div className="login-count-desc">Customer rating</div>
                    </div>

                    <div className="login-cards">
                        <div className="login-count">10k+</div>
                        <div className="login-count-desc">Active portfolios</div>
                    </div>

                    <div className="login-cards">
                        <div className="login-count">99.9%</div>
                        <div className="login-count-desc">Uptime SLA</div>
                    </div>

                </div>

                <div className="login-join-quote">
                    Join thousands of smart investors and enterprises already scaling with <b><i>Loki's FIN-TECH.</i></b>
                </div>

            </div>

            <div className="login-right-panel">

                <div className="login-right-container">

                    <div className="login-logo">
                        <img src={brandlogo} alt="loki's-fin-tech-logo" className="logo" />
                    </div>

                    <div className="login-greet">Welcome back</div>
                    <div className="login-greet-desc" >Login to your Loki's FIN-TECH workspace</div>

                    <form className="login-form-container" onSubmit={handleSubmit}>

                        <div className="input-grp">
                            <label className="input-label" htmlFor="email">Email</label>
                            <input type="email" id="email" className="email" name="email" value={formData.email} placeholder="Enter the email" onChange={handleChange} />
                        </div>
                        <div className="input-grp">
                            <label className="input-label" htmlFor="password">Password</label>
                            <input type="password" id="password" className="password" name="password" value={formData.password} placeholder="Enter the password" onChange={handleChange} />
                        </div>

                        <div className="login-err-block">
                            {alertMsg?.status && (
                                <p className="login-err-msg" style={{ color: alertMsg.status === "success" ? "green" : "red" }}>
                                    {alertMsg.message}
                                </p>
                            )}
                        </div>

                        <div className="login-btn-grp">

                            <button className="login-btn" type="submit">
                                Login
                            </button>
                            <div className="signup-desc">
                                <span>Don't have an account ?</span>
                                <Link to='/signup' className="signup-link">
                                    Create account →
                                </Link>
                            </div>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}