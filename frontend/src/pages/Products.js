import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteProdutById, fetchProduts } from "../services/productService";

export default function Products() {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [prdtFields, setPrdtFields] = useState([
        "S.NO", "Name", "Type", "Interest Rate", "Tenure Months", "Status"
    ]);

    const [alertMsg, setAlertMsg] = useState("");

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {

            const response = await fetchProduts();
            const sorteddata = [...response.data].sort((a, b) => a.id - b.id);

            console.log(response);
            if (response.status === 200 && response.data && response.data.length > 0) {

                const extractFields = response.data[0];
                const colFields = Object.keys(extractFields);

                if (colFields.length > 0) {
                    setPrdtFields(colFields);
                    prdtFields.unshift("S.NO");
                }

                setProducts(sorteddata)
            }

        } catch (err) {
            setAlertMsg("Error while fetching product datas !");
            console.log("Fetchproducts error:", err);
        }
    }

    const handleProductCRUD = () => {
        navigate("/dashboard/products/crudproduct");
    }

    const handleUserEdit = (rowData) => {
        if (rowData) {
            navigate("/dashboard/products/crudproduct", {
                state: { row: rowData, mode: 'edit', from: 'Products' }
            });
        }
    }

    const handleUserDelete = async (rowData) => {
        if (rowData) {
            const response = await deleteProdutById(rowData.id);

            if (response.status === 204) {
                alert("Product deleted successfully");
                loadProducts();
            }
        }
    }

    return (
        <div className="dynamic-page-products">

            <div className="breadcrumb">
                <div className="content-header">Products List</div>

                <div className="content-right">

                    {/* <button className="add-btn" onClick={handleProductCRUD}>
                        <span className="material-icons">add</span>
                        Add Product
                    </button> */}

                </div>

            </div>

            {products && products.length > 0 && (
                <div className="prdt-crd-grps">
                    {products.map(prdt => (
                        <div className="prdt-crd" key={prdt.id}>

                            <div className="prdt-crd-header">
                                <p className="prdt-crd-header-desc">Product Information</p>

                                <div className="prdt-crd-header-action">
                                    <button type="button" className="prdt-edit" onClick={() => handleUserEdit(prdt)}>
                                        <span className="material-icons">edit</span>
                                    </button>
                                    <button type="button" className="prdt-delete" onClick={() => handleUserDelete(prdt)}>
                                        <span className="material-icons">delete</span>
                                    </button>
                                </div>
                            </div>

                            <div className="prdt-crd-content">
                                <div className="prdt-crd-left">
                                    <div className="prdt-crd-section">
                                        <div className="sub-head">S.NO</div>
                                        <div className="sub-cont">{prdt.id}</div>
                                    </div>
                                    <div className="prdt-crd-section">
                                        <div className="sub-head">Name</div>
                                        <div className="sub-cont">{prdt.name}</div>
                                    </div>
                                    <div className="prdt-crd-section">
                                        <div className="sub-head">Type</div>
                                        <div className="sub-cont">{prdt.type}</div>
                                    </div>
                                </div>

                                <div className="prdt-crd-right">
                                    <div className="prdt-crd-section">
                                        <div className="sub-head">Interest Rate</div>
                                        <div className="sub-cont">{prdt.interestRate}</div>
                                    </div>
                                    <div className="prdt-crd-section">
                                        <div className="sub-head">Tenure months</div>
                                        <div className="sub-cont">{prdt.tenureMonths}</div>
                                    </div>
                                    <div className="prdt-crd-section">
                                        <div className="sub-head">Status</div>
                                        <div className="sub-cont">{prdt.status}</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            )}

            {(!products || products.length === 0) && (
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
            )}

        </div>
    )
}