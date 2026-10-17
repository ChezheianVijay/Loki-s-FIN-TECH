const API_BASE_URL = "http://localhost:8080/api/auth";

export async function userLogin(formData) {
    const response = await fetch(API_BASE_URL + "/login",
        {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(formData)
        }
    );

    const data = await response.json();

    return {
        status: response.status,
        data: data
    };
}

export async function userSignUp(formData) {
    const response = await fetch(API_BASE_URL + "/signup",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }
    );

    const data = await response.json();

    return {
        status: response.status,
        data: data
    };
} 