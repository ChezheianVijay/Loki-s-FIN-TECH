const API_BASE_URL = "http://localhost:8080/api/products";
const token = localStorage.getItem("token");

export async function createProduct(formdata) {

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

export async function fetchProduts() {

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

export async function getProdutById(id) {

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

export async function updateProdutById(id, formdata) {

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

export async function deleteProdutById(id) {

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