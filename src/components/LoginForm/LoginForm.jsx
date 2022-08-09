import React, { useState } from "react";


function LoginForm() {


    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setCredentials((prevCredentials)) => ({
            ...prevCredentials,
            [id]: value,
            }));
};

const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
        fetch(`${process.env.REACT_APP_API_URL}api-token-auth/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify(credentials),
        }).then((response) => {
            console.log(response.json());
        });
        }
    };
}
    return (
        <form>
            <div>
                <label htmlFor="username">Username :</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Enter username"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                    />

            </div>
            <button type="submit">
                Login
            </button>
        </form>
    );
}

export default LoginForm;