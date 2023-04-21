import React, { useState } from 'react'
import { useFormik } from 'formik'
import { Box, Button, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import { signupSchema } from '@/validation/validation';
import classes from '../styles/general.module.scss'
import { VisibilityOff, Visibility } from '@mui/icons-material';


function Signup() {

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
            console.log(values)
        } catch (error) {

        }
    }


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



    return (
        <div className="vh-100 d-flex flex-column justify-content-center align-items-center">

            <form className={`${classes.form}`} onSubmit={formik.handleSubmit}>
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

                    <FormControl className={classes.FormControl} sx={{ width: '35ch' }} variant="outlined">
                        <InputLabel error={touched.password && Boolean(errors.password)} className={classes.InputLabel} htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            className={classes.Input}
                            name='password'
                            id='password'
                            value={values.password}
                            error={touched.password && Boolean(errors.password)}
                            onBlur={handleBlur}
                            onChange={handleChange}
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


                    <FormControl className={classes.FormControl} sx={{ width: '35ch' }} variant="outlined">
                        <InputLabel error={touched.confirmPassword && Boolean(errors.confirmPassword)} className={classes.InputLabel} htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                        <OutlinedInput
                            className={classes.Input}
                            name='confirmPassword'
                            id='confirmPassword'
                            value={values.confirmPassword}
                            error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                            onBlur={handleBlur}
                            onChange={handleChange}
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
                        name='contact'
                        id='contact'
                        label='Phone Number'
                        type='number'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.contact && Boolean(errors.contact)}
                        helperText={touched.contact && errors.contact}
                    />

                </Box>

                <Button type='submit'>Submit</Button>

            </form>
        </div>
    )
}

export default Signup