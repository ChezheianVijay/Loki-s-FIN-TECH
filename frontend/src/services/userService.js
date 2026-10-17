const API_BASE_URL = "http://localhost:8080/api/users";

const token = localStorage.getItem("token");

export async function createUser(formdata) {

    const response = await fetch(API_BASE_URL,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(formdata)
        }
    );

    const data = await response.json();

    if (response.status === 401) {

        localStorage.removeItem("token");

        window.location.href = "/login";
    }

    return {
        status: response.status,
        data: data
    }
}

export async function fetchUsers() {

    const response = await fetch(API_BASE_URL,
        {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token
            }
        }
    );

    const data = await response.json();

    return {
        status: response.status,
        data: data
    }
}

export async function getUserById(id) {

    const response = await fetch(API_BASE_URL + "/" + id,
        {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + token
            }
        }
    );

    const data = await response.json();

    return {
        status: response.status,
        data: data
    }
}

export async function updateUserById(id, formdata) {

    const response = await fetch(API_BASE_URL + "/" + id,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(formdata)
        }
    );

    const data = await response.json();

    return {
        status: response.status,
        data: data
    }
}

export async function deleteUserById(id) {

    const response = await fetch(API_BASE_URL + "/" + id,
        {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + token
            },
        }
    );

    let data = null;

    if (response.status !== 204) {
        data = await response.json();
    }

    return {
        status: response.status,
        data: data
    }
}