import { useEffect, useState } from "react";
import { fetchUsers } from "../services/userService";
import { fetchProduts } from "../services/productService";

export default function Home() {

    const [userDatas, setUserDatas] = useState([]);
    const [products, setProducts] = useState([]);

    const [alertMsg, setAlertMsg] = useState("");

    useEffect(() => {
        loadusers();
        loadProducts();
    }, []);

    const loadusers = async () => {

        try {

            const response = await fetchUsers();
            console.log(response);
            if (response.status === 200 && response.data && response.data.length > 0) {
                setUserDatas(response.data);
            }

        } catch (err) {
            setAlertMsg("Error while fetching user datas !");
            console.log("Fetchusers error:", err);
        }

    }

    const loadProducts = async () => {
        try {

            const response = await fetchProduts();
            console.log(response);
            if (response.status === 200 && response.data && response.data.length > 0) {
                setProducts(response.data)
            }

        } catch (err) {
            setAlertMsg("Error while fetching product datas !");
            console.log("Fetchproducts error:", err);
        }
    }
    return (
        <div className="dynamic-page-home">

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
                        <div className="card-count">{userDatas.length ? userDatas.length : 12}</div>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <span className="material-icons">inventory_2</span>
                    </div>
                    <div className="card-content">
                        <p className="card-head">Total Products</p>
                        <div className="card-count">{products.length ? products.length : 6}</div>
                    </div>
                </div>

            </div>

            <div className="table-wrapper">
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
    )
}