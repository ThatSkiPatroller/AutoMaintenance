import React, { Component } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, TextField, Card, CardContent, Grid, Typography} from '@material-ui/core';
import './style.css';

const validationSchema = Yup.object().shape({
    username: Yup.string()
    .max(15, "Username is too long")
    .min(6, "Username is too short")
    .required("A username is required"),
    email: Yup.string()
    .email("Email is invalid")
    .required("An email is required"),
    password: Yup.string().required("A password is required"),
    confirm_password: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords do not match"
    )
});

function Signup () {
    
    const formik = useFormik({
        initialValues: {
            username: 'username',
            email: 'email',
            password: 'password',
            confirm_password: 'confirm password',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        }
    })

    return (
        <div>
            <Grid
                container
                justify="center"
                alignItems="center"
                direction="column">
            
            <Typography variant="h3" id="signupmsg">Signup</Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    variant="outlined"
                    id="username"
                    placeholder="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                    helperText={formik.touched.username && formik.errors.username}
                />
                <br></br>
                <TextField
                    variant="outlined"
                    id="email"
                    placeholder="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <br></br>
                <TextField
                    id="password"
                    variant="outlined"
                    placeholder="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <br></br>
                <TextField
                    variant="outlined"
                    id="confirm_password"
                    placeholder="confirm_password"
                    value={formik.values.confirm_password}
                    onChange={formik.handleChange}
                    error={formik.touched.confirm_password && Boolean(formik.errors.confirm_password)}
                    helperText={formik.touched.confirm_password && formik.errors.confirm_password}
                />
                <br></br>
                <Button color="primary" id="button" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>

            </Grid>
        </div>
    )
    
}


export default Signup;