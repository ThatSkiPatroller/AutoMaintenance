import React, { Component } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, TextField, FormLabel, Radio, FormControlLabel, RadioGroup, Grid, Typography, FormControl} from '@material-ui/core';
import './style.css';
import axios from 'axios';
import { Container } from "reactstrap";
import "./style.css";

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
    ),
    address: Yup.string()
    .required("An Address is required"),
    phoneNo: Yup.string()
    .required("Phone number is required")
});



function SignupDealer () {
   // const [pickup, setPickup] = React.useState('pickup-Yes');
    const [dropOff, setDropoff] = React.useState('drop-yes');
    const [pickup, setPickup] = React.useState('');
    const [value, setValue] = React.useState('');

    const overnightRadioChange = (event) => {
        console.log("inn22")
        console.log("Pic22up ", event.target.value)
        setValue(event.target.value);
      };
    
    const pickupRadioChange = (event) => {
        console.log("inn")
        console.log("Picup ", event.target.value)
        setPickup(event.target.value);
    };

    const dropOffRadioChange = (event) => {
        console.log("drop ", event.target.value)
        setDropoff(event.target.value);
    };

    const handleSubmit = (event) => {
        console.log("handle")

        const newUser = {
            username: formik.values.username,
            email: formik.values.email,
            password: formik.values.password,
            name: formik.values.name,
            address: formik.values.address,
            phoneNo: formik.values.phoneNo,

        }
        console.log("submi")
        const dealer = { name: newUser.name, address: newUser.address, phoneNo: newUser.phoneNo, username: newUser.username, password: newUser.password, overNightAvailable: newUser.overNightAvailable,pickUp: newUser.pickUp, dropOff: newUser.dropOff  };

        axios.post('/dealer/create', dealer)
        .then(response => console.log(response));
 
    };
    const formik = useFormik({
        initialValues: {
            username: 'username',
            email: 'email',
            password: 'password',
            confirm_password: 'confirm password',
            address: 'address',
            phoneNo:'phoneNo'
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log("sumcc")
            alert(JSON.stringify(values, null, 2))
            const newUser = {
                username: formik.values.username,
                email: formik.values.email,
                password: formik.values.password,
                name: formik.values.name,
                address: formik.values.address,
                phoneNo: formik.values.phoneNo,

            }
            console.log("submi")
            const dealer = { name: newUser.name, address: newUser.address, phoneNo: newUser.phoneNo, username: newUser.username, password: newUser.password, overNightAvailable: newUser.overNightAvailable,pickUp: newUser.pickUp, dropOff: newUser.dropOff  };

            axios.post('http://localhost:3000/dealer/create', dealer)
            .then(response => console.log(response));
        }
    })

    return (
        <div>
            <Grid  container  justify="center" alignItems="center"  direction="column">
            <Typography variant="h3" id="signupmsg">Signup</Typography>
            <form onSubmit={formik.handleSubmit}>
           
                <div className="form-group">
                <TextField  variant="outlined"  id="username"
                    placeholder="username"
                    onChange={formik.handleChange}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                    helperText={formik.touched.username && formik.errors.username}
                />
                </div>
                <div className="form-group">
                <TextField  variant="outlined"  id="name"
                    placeholder="Name"
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
                </div>
                <div className="form-group">
                <TextField  variant="outlined"  id="address"
                    placeholder="Address"
                    onChange={formik.handleChange}
                    error={formik.touched.address && Boolean(formik.errors.address)}
                    helperText={formik.touched.address && formik.errors.address}
                />
                </div>
                <div className="form-group">
                <TextField  variant="outlined"  id="phone"
                    placeholder="Phone No"
                    onChange={formik.handleChange}
                    error={formik.touched.phoneNo && Boolean(formik.errors.phoneNo)}
                    helperText={formik.touched.phoneNo && formik.errors.phoneNo}
                />
                </div>
                <div className="form-group"> 
                <TextField  className="textfield" variant="outlined"
                    id="email" placeholder="email"  onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                </div>

                <div className="form-group">
                <TextField  id="password" variant="outlined" placeholder="password"  onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                </div>
                <div className="form-group">
                <TextField variant="outlined"
                    id="confirm_password"
                    placeholder="confirm_password"
                    onChange={formik.handleChange}
                    error={formik.touched.confirm_password && Boolean(formik.errors.confirm_password)}
                    helperText={formik.touched.confirm_password && formik.errors.confirm_password}
                />
                </div>
               
                
                <div className="form-group">
                <FormControl>
                    <FormLabel component="legend">Pick-up option available</FormLabel>
                    <RadioGroup  onChange={pickupRadioChange}  style={{display: 'inline', flexDirection: 'row'}}>
                    <FormControlLabel value="pickup-Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="pickup-no" control={<Radio />} label="No" />
                </RadioGroup>
                </FormControl>
                </div>

                <div className="form-group">
                <FormControl >
                    <FormLabel component="legend">Drop-off option available</FormLabel>
                    <RadioGroup value={dropOff} onChange={dropOffRadioChange}  style={{display: 'inline', flexDirection: 'row'}}>
                    <FormControlLabel value="drop-yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="drop-no" control={<Radio />} label="No" />
                </RadioGroup>
                </FormControl>
                </div>

                <div className="form-group">

                <FormControl component="fieldset">
        <FormLabel component="legend">Overnight service available ?</FormLabel>
        <RadioGroup value={value} onChange={overnightRadioChange}  style={{display: 'inline', flexDirection: 'row'}}>
          <FormControlLabel value="overnight-yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="overnight-no" control={<Radio />} label="No" />
        </RadioGroup>
        
      </FormControl>
                </div>
                
                <Button onClick={handleSubmit} color="primary" id="button" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>

            </Grid>
        </div>
    )
    
}


export default SignupDealer;