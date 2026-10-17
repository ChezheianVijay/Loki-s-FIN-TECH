import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteUserById, fetchUsers } from "../services/userService";

export default function Users() {

    const navigate = useNavigate();

    const [userDatas, setUserDatas] = useState([]);
    const [userFields, setUserFields] = useState([
        "S.NO", "First Name", "Last Name", "Email", "Phone"
    ]);

    const [alertMsg, setAlertMsg] = useState("");

    useEffect(() => {
        loadusers();
    }, []);

    const loadusers = async () => {

        try {

            const response = await fetchUsers();
            const sortedData = [...response.data].sort((a, b) => a.id - b.id);

            console.log(response);
            if (response.status === 200 && response.data && response.data.length > 0) {

                const extractFields = response.data[0];
                const colFields = Object.keys(extractFields);

                if (colFields.length > 0) {
                    setUserFields(colFields);
                    userFields.unshift("S.NO");
                }

                setUserDatas(sortedData);
            }

        } catch (err) {
            setAlertMsg("Error while fetching user datas !");
            console.log("Fetchusers error:", err);
        }

    }

    const handleUserCRUD = () => {
        navigate("/dashboard/users/cruduser");
    }

    const handleUserEdit = (rowData) => {
        if (rowData) {
            navigate("/dashboard/users/cruduser", {
                state: { row: rowData, mode: 'edit', from: 'Users' }
            });
        }
    }

    const handleUserDelete = async (rowData) => {
        if (rowData) {
            const response = await deleteUserById(rowData.id);

            if (response.status === 204) {
                alert("User deleted successfully");
                loadusers();
            }
        }
    }

    return (
        <div className="dynamic-page-users">

            <div className="breadcrumb">

                <div className="content-header">Users List</div>

                <div className="content-right">

                    {/* <button className="add-btn" onClick={handleUserCRUD}>
                        <span className="material-icons">add</span>
                        Add User
                    </button> */}

                </div>

            </div>

            {userDatas && userDatas.length > 0 && (
                <div className="table-wrapper">
                    <table className="users-table">

                        <thead>
                            <tr>
                                {userFields && userFields.length > 0 && (
                                    userFields.map(field =>
                                        <th>{field}</th>
                                    )
                                )}
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {userDatas.map((row, rowIndex) =>
                                <tr key={rowIndex}>
                                    {
                                        userFields.map((field, colIndex) =>
                                            <td key={colIndex}>{row[field]}</td>
                                        )
                                    }
                                    <td>
                                        <button className="action-btn edit" title="Edit" onClick={() => handleUserEdit(row)}>
                                            <span className="material-icons" >edit</span>
                                        </button>
                                        <button className="action-btn delete" title="Delete" onClick={() => handleUserDelete(row)}>
                                            <span className="material-icons" >delete</span>
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            {(!userDatas || userDatas.length == 0) && (
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
            )}

        </div>
    )
}