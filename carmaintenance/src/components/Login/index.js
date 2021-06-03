import React from 'react';
import './style.css';
import axios from 'axios';
import { useFormik } from "formik";
import { Grid, TextField, Typography, Button } from '@material-ui/core';

function Login () {
    const formik = useFormik({
        initialValues: {
            username: 'username',
            password: 'password',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
            const newUser = {
                username: formik.values.username,
                password: formik.values.password
            }
            axios.get('http://localhost:3001/users', newUser)
        }
    })

    return(
        <div>
            <Grid
                container
                justify="center"
                alignItems="center"
                direction="column">
            
            <Typography variant="h3" id="signupmsg">Login</Typography>
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
                    id="password"
                    variant="outlined"
                    placeholder="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
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

export default Login;