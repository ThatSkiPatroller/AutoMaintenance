import React from "react";
import { useHistory } from "react-router-dom";

function Signup () {
    const [handleFieldChange, fields] = useFormFields ({
        email: "",
        password: "",
        confirmPassword: ""
    });
    
    const [newUser, setNewUser ] = useState(null)

    function validateForm () {
        return (
            fields.email.length > 0 && 
            fields.password.length > 0 &&
            fields.password === fields.confirmPassword
        )
    }

    async function handleSubmit (event) {
        event.preventDefault();

        setNewUser("newusertest");

    }

    function renderForm () {
        return (
            <Form onSubmit={handleSubmit}
        )
    }
}

export defualt Signup;