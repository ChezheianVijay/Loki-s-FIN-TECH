import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { createUser, updateUserById } from "../services/userService";

export default function User() {

    const navigate = useNavigate();
    const location = useLocation();

    const mode = location.state?.mode || "" /*"add"*/;
    const rowData = location.state?.row || null;

    const [formdata, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        authUserId: ""
    });
    const [alertMsg, setAlertMsg] = useState({ status: "", message: "" });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (mode === 'edit') {
            setFormData({ firstName: rowData.firstName, lastName: rowData.lastName, email: rowData.email, phone: rowData.phone, authUserId: rowData.authUserId })
        }
    }, [])

    const handleChange = (e) => {
        setAlertMsg({ status: "", message: "" });
        const { name, value } = e.target;
        setFormData({ ...formdata, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setAlertMsg({ status: "", message: "" });
        setIsLoading(true);

        if (!formdata.firstName) return setAlertMsg({ status: "error", message: "Firstname is required" });
        if (!formdata.lastName) return setAlertMsg({ status: "error", message: "Lastname is required" });
        if (!formdata.email) return setAlertMsg({ status: "error", message: "Email is required" });
        if (!formdata.phone) return setAlertMsg({ status: "error", message: "Phone is required" });
        if (!formdata.authUserId) return setAlertMsg({ status: "error", message: "Auth UserId is required" });

        try {
            // const response = mode !== 'edit' ? await createUser(formdata) : await updateUserById(rowData.id, formdata);
            const response = await updateUserById(rowData.id, formdata);
            console.log(response);
            if (response.status === 200) {
                setAlertMsg({ status: "success", message: "User updated in successfully !" });
                setFormData({});
                navigate("/dashboard/users");
            }

        } catch (err) {
            setAlertMsg({ status: "error", message: "Something went wrong !" });
            console.log("Signup error:", err);
        }
    }

    const handleCancel = () => {
        setFormData({});
        navigate('/dashboard/users');
    }

    return (
        <div className="dynamic-page-user">

            <div className="breadcrumb">

                <div className="content-header">
                    {/* {mode !== 'edit' ? "Add User" : "Edit User"} */}
                    Edit User
                </div>

            </div>

            <form className="common-container" onSubmit={handleSubmit} >

                <div className="input-grp">
                    <label className="input-label" htmlFor="authuserid">Auth UserId</label>
                    <input type="number" id="authuserid" className="authuserid" name="authUserId" value={formdata.authUserId} placeholder="Enter the Auth UserId" onChange={handleChange} disabled={true /*mode !== 'edit' ? false : true*/} />
                </div>

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

                <div className="common-err-block">
                    {alertMsg?.status && (
                        <p className="login-err-msg" style={{ color: alertMsg.status === "success" ? "green" : "red" }}>
                            {alertMsg.message}
                        </p>
                    )}
                </div>

                <div className="common-btn-grp">
                    <button className="create-btn" type="submit" disabled={isLoading}>
                        {/* {mode !== 'edit' ? (isLoading ? "Creating Account..." : "Create Account") : (isLoading ? "Updating User..." : "Update User")} */}
                        {isLoading ? "Updating User..." : "Update User"}
                    </button>
                    <button className="cancel-btn" type="button" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}