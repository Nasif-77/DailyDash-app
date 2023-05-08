import React, { useState } from 'react'
import { useFormik } from 'formik'
import { Box, Button, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, TextField, Typography } from '@mui/material'
import { signupSchema } from '@/validation/validation';
import classes from '../styles/general.module.scss'
import { VisibilityOff, Visibility } from '@mui/icons-material';
import axios from 'axios'
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify'



function Signup() {

    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            contact: ''
        },
        onSubmit: () => {
            sentValues()
        },
        validationSchema: signupSchema
    });

    const { values, handleChange, handleSubmit, handleBlur, touched, errors } = formik

    const [showPassword, setShowPassword] = useState(false);
    const [showCPassword, setShowCPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: any) => {
        event.preventDefault();
    };
    const handleClickShowCPassword = () => setShowCPassword((show) => !show);

    const handleMouseDownCPassword = (event: any) => {
        event.preventDefault();
    };



    const sentValues = async () => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/user`, values)
            console.log(response)
            if (response.status === 201) {
                localStorage.setItem('email', values.email)
                router.push('/user/otp')
            }

        } catch (error) {
            if (error) toast.error("An error has been occurred");

        }
    }




    return (

        <>

            <div className={`${classes.signup}`}>

                <form className={`${classes.signupForm}`} onSubmit={handleSubmit}>
                    <Paper className={classes.paper} elevation={4}>

                        <Typography variant='body1' >Fill this form to create your dailydash account</Typography>

                        <Box
                            className={classes.child}
                        >
                            <TextField
                                name="name"
                                label="Name"
                                variant="outlined"
                                fullWidth
                                type="text"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.name && Boolean(errors.name)}
                                helperText={touched.name && errors.name}
                            />

                            <TextField
                                name="email"
                                label="E-mail"
                                variant="outlined"
                                fullWidth
                                type="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                            />

                            <FormControl className={classes.FormControl} variant="outlined">
                                <InputLabel error={touched.password && Boolean(errors.password)} className={classes.InputLabel} htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    className={classes.Input}
                                    name='password'
                                    id='password'
                                    value={values.password}
                                    error={touched.password && Boolean(errors.password)}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    fullWidth
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label='Password'
                                />
                                <FormHelperText className={classes.FormHelperText} sx={{ color: '#d32f2f' }}>{touched.password && errors.password}</FormHelperText>
                            </FormControl>


                            <FormControl className={classes.FormControl} variant="outlined">
                                <InputLabel error={touched.confirmPassword && Boolean(errors.confirmPassword)} className={classes.InputLabel} htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                                <OutlinedInput
                                    className={classes.Input}
                                    name='confirmPassword'
                                    id='confirmPassword'
                                    value={values.confirmPassword}
                                    error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    fullWidth
                                    type={showCPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowCPassword}
                                                onMouseDown={handleMouseDownCPassword}
                                            >
                                                {showCPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label='Confirm Password'
                                />
                                <FormHelperText className={classes.FormHelperText} sx={{ color: '#d32f2f' }} >{touched.confirmPassword && errors.confirmPassword}</FormHelperText>
                            </FormControl>

                            <TextField
                                name="contact"
                                label="Phone number"
                                variant="outlined"
                                fullWidth
                                type="number"
                                value={values.contact}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.contact && Boolean(errors.contact)}
                                helperText={touched.contact && errors.contact}
                            />

                            <Button sx={{ backgroundColor: '#1976d2' }} variant='contained' >Submit</Button>
                        </Box>
                    </Paper>


                </form>
            </div>

            <ToastContainer />

        </>
    )
}

export default Signup