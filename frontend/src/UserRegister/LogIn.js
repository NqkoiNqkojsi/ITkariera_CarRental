import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { margin } from '@mui/system';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});


const FormLogIn = ({closeModal}) => {
    const [cookies, setCookie] = useCookies(['id']);

    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        axios.post('https://localhost:7146/api/Account/Login', {
          email: values.email,
          password: values.password
        },{
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(function (response) {
          console.log(response);
          setCookie('id', "1", { path: '/' });
          closeModal();
        })
        .catch(function (error) {
          console.log(error);
        });
      },
    });
    return (
      <div>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{margin:'10px'}}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            sx={{margin:'10px'}}
          />
          <Button color="primary" variant="contained" fullWidth type="submit" sx={{margin:'10px'}}>
            Submit
          </Button>
        </form>
      </div>
    );
  };


export default FormLogIn;