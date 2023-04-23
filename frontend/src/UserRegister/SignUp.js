import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  firstName: yup
    .string()
    .required(),
  lastName: yup
    .string()
    .required(),
  phone: yup
    .string()
    .required(),
  ucn: yup
    .string()
    .required(),
});


const FormSignUp = ({closeModal}) => {

    const [cookies, setCookie] = useCookies(['id']);

    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phone: '',
        ucn:''
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        axios.post('https://localhost:7146/api/Account/Register', {
          email: values.email,
          password: values.password,
          firstName: values.firstName,
          lastName: values.lastName,
          phoneNumber: values.phone,
          ucn: values.ucn
        },{
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(function (response) {
          console.log(response);
          setCookie('id', response.data.id, { path: '/' });
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
          <TextField
            fullWidth
            id="firstName"
            name="firstName"
            label="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            sx={{margin:'10px'}}
          />
          <TextField
            fullWidth
            id="lastName"
            name="lastName"
            label="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            sx={{margin:'10px'}}
          />
          <TextField
            fullWidth
            id="phone"
            name="phone"
            label="Phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            sx={{margin:'10px'}}
          />
          <TextField
            fullWidth
            id="ucn"
            name="ucn"
            label="EGN"
            value={formik.values.ucn}
            onChange={formik.handleChange}
            sx={{margin:'10px'}}
          />
          <Button color="primary" variant="contained" fullWidth type="submit" sx={{margin:'10px'}}>
            Submit
          </Button>
        </form>
      </div>
    );
  };


export default FormSignUp;
