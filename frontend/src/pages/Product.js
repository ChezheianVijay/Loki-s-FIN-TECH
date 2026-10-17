import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { createProduct, updateProdutById } from "../services/productService";

export default function Product() {

    const navigate = useNavigate();
    const location = useLocation();

    const mode = location.state?.mode || "" /*"add"*/;
    const rowData = location.state?.row || null;

    const [formdata, setFormData] = useState({
        name: "",
        type: "",
        interestRate: null,
        tenureMonths: null,
        status: ""
    });
    const [alertMsg, setAlertMsg] = useState({ status: "", message: "" });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (mode === 'edit') {
            setFormData({ name: rowData.name, type: rowData.type, interestRate: rowData.interestRate, tenureMonths: rowData.tenureMonths, status: rowData.status });
        }
    }, []);

    const handleChange = (e) => {
        setAlertMsg({ status: "", message: "" });
        const { name, value } = e.target;
        setFormData({ ...formdata, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setAlertMsg({ status: "", message: "" });
        if (!formdata.name) return setAlertMsg({ status: "error", message: "Name is required" });
        if (!formdata.type) return setAlertMsg({ status: "error", message: "Type is required" });
        if (!formdata.interestRate) return setAlertMsg({ status: "error", message: "Interest Rate is required" });
        if (!formdata.tenureMonths) return setAlertMsg({ status: "error", message: "Tenure Months is required" });
        if (!formdata.status) return setAlertMsg({ status: "error", message: "Status is required" });

        try {

            // const response = mode !== 'edit' ? await createProduct(formdata) : await updateProdutById(rowData.id, formdata);
            const response = await updateProdutById(rowData.id, formdata);
            console.log(response);

            if (response.status === 200) {
                setAlertMsg({ status: "success", message: "User updated in successfully !" });
                setFormData({});
                navigate("/dashboard/products");
            }

        } catch (err) {
            setAlertMsg({ status: "error", message: "Something went wrong !" });
            console.log("Signup error:", err);
        }
    }

    const handleCancel = () => {
        setFormData({});
        navigate('/dashboard/products');
    }
    return (

        <div className="dynamic-page-user">

            <div className="breadcrumb">

                <div className="content-header">
                    {/* {mode !== 'edit' ? "Add Product" : "Edit Product"} */}
                    Edit Product
                </div>

            </div>

            <form className="common-container" onSubmit={handleSubmit}>

                <div className="input-grp">
                    <label className="input-label" htmlFor="name">Name</label>
                    <input type="text" id="name" className="name" name="name" value={formdata.name} placeholder="Enter the Name" onChange={handleChange} />
                </div>
                <div className="input-grp">
                    <label className="input-label" htmlFor="type">Type</label>
                    <input type="text" id="type" className="type" name="type" value={formdata.type} placeholder="Enter the Type" onChange={handleChange} />
                </div>

                <div className="input-grp">
                    <label className="input-label" htmlFor="interestRate">Interest Rate</label>
                    <input type="number" id="interestRate" className="interestRate" name="interestRate" value={formdata.interestRate} placeholder="Enter the Interest Rate" onChange={handleChange} />
                </div>
                <div className="input-grp">
                    <label className="input-label" htmlFor="tenureMonths">Tenure Months</label>
                    <input type="number" id="tenureMonths" className="tenureMonths" name="tenureMonths" value={formdata.tenureMonths} placeholder="Enter the Tenure Months" onChange={handleChange} />
                </div>

                <div className="input-grp">
                    <label className="input-label" htmlFor="status">Status</label>
                    <input type="text" id="status" className="status" name="status" value={formdata.status} placeholder="Enter the Status" onChange={handleChange} />
                </div>

                <div className="common-err-block">
                    {alertMsg?.status && (
                        <p className="login-err-msg" style={{ color: alertMsg.status === "success" ? "green" : "red" }}>
                            {alertMsg.message}
                        </p>
                    )}
                </div>

                <div className="common-btn-grp">
                    <button className="create-btn" type="submit">
                        {/* {mode !== 'edit' ? (isLoading ? "Creating Product..." : "Create Product") : (isLoading ? "Updating Product..." : "Update Product")} */}
                        Update Product
                    </button>
                    <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>

    )
}