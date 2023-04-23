import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import axios from 'axios';
import { useCookies } from 'react-cookie';
import { margin } from '@mui/system';



const Profile = ({}) => {
  const getCookie=(key)=> {
    let b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    return b;
  }
  const isAdmin=()=>{
    let id=getCookie("id");
    axios.post('https://localhost:7146/api/Account/IsAdmin', {
        id:id[2]
      },{
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(function (response) {
        console.log(response);
        return(response.data);
      })
      .catch(function (error) {
        console.log(error);
        //emiiiiiii
        return(true);
    });
  }

  const displayStuff=()=>{

    if(isAdmin()){
      return(
        <form onSubmit={formik.handleSubmit}>
        <TextField
            fullWidth
            id="brand"
            name="brand"
            label="brand"
            value={formik.values.brand}
            onChange={formik.handleChange}
            sx={{margin:'10px'}}
          />
        <TextField
            fullWidth
            id="model"
            name="model"
            label="model"
            value={formik.values.model}
            onChange={formik.handleChange}
            sx={{margin:'10px'}}
          />
          <TextField
            fullWidth
            id="type"
            name="type"
            label="type"
            value={formik.values.type}
            onChange={formik.handleChange}
            sx={{margin:'10px'}}
          />
          <TextField
            fullWidth
            id="description"
            name="description"
            label="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            sx={{margin:'10px'}}
          />
          <TextField
            fullWidth
            id="price"
            name="price"
            label="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            sx={{margin:'10px'}}
          />
          <TextField
            fullWidth
            id="imgDir"
            name="imgDir"
            label="imgDir"
            value={formik.values.imgDir}
            onChange={formik.handleChange}
            sx={{margin:'10px'}}
          />
          <TextField
            fullWidth
            id="year"
            name="year"
            label="year"
            value={formik.values.year}
            onChange={formik.handleChange}
            sx={{margin:'10px'}}
          />
          <TextField
            fullWidth
            id="numberOfSeats"
            name="numberOfSeats"
            label="numberOfSeats"
            value={formik.values.numberOfSeats}
            onChange={formik.handleChange}
            sx={{margin:'10px'}}
          />
        <Button color="primary" variant="contained" fullWidth type="submit" sx={{margin:'10px'}}>
          Submit
        </Button>
      </form>
      );
    }else{
      return(<p>ne si admin</p>);
    }
  }

  const formik = useFormik({
    initialValues: {
      brand: '',
      model: '',
      type: '',
      price: '',
      imgDir: '',
      description: '',
      numberOfSeats: 4,
      year: 2000,
    },
    onSubmit: (values) => {
      axios.post('https://localhost:7146/api/Car/Create', {
        brand: values.brand,
        model: values.model,
        type: values.type,
        price: values.price,
        imgDir: values.imgDir,
        description: values.description,
        numberOfSeats: values.numberOfSeats,
        year: values.year,
      },{
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(function (response) {
        console.log(response);
        
      })
      .catch(function (error) {
        console.log(error);
        alert("there has been an error! Try again");
      });
    },
  });


  return (
    <div>
      {displayStuff()}
    </div>
  );
};


export default Profile;