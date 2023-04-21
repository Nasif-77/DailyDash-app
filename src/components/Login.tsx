import { Box, Button, FormControl, FormHelperText, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import classes from '../styles/general.module.scss'
import { useFormik } from 'formik';
import { loginSchema } from '@/validation/validation';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectEmail, selectPassword, setEmail, setPassword } from '@/store/reducers/userSlice';


// const CustomTextField = styled(TextField)({
//     '& label.Mui-focused': {
//         color: 'green',
//     },
//     '& .MuiInput-underline:after': {
//         borderBottomColor: 'green',
//     },
//     '& .MuiOutlinedInput-root': {
//         '& fieldset': {
//             borderColor: 'info',
//         },
//         '&.Mui-focused fieldset': {
//             borderColor: 'green',
//         },
//     },
// });

// const CustomInputField = styled(FormControl)({
//     '&'
// })


function Login() {

    const dispatch = useDispatch()
    const iEmail = useSelector(selectEmail)
    const iPassword = useSelector(selectPassword)

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: any) => {
        event.preventDefault();
    };


    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit: () => {

        }
    })

    const { values, touched, handleBlur, handleChange, errors } = formik


    return (
        <div>

            <Typography>{iEmail}</Typography>
            <Typography>{iPassword}</Typography>
            <form >
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'space-evenly'}
                    alignItems={'center'}
                    width={500}
                    height={500}
                >

                    <TextField
                        label={'E-mail'}
                        name='email'
                        id='email'
                        type='email'
                        value={values.email}
                        error={touched.email && Boolean(errors.email)}
                        onBlur={handleBlur}
                        onChange={handleChange}
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
                        <FormHelperText className={classes.FormHelperText} sx={{ color: 'red' }}>{touched.password && errors.password}</FormHelperText>
                    </FormControl>
                    <Button onClick={() => { dispatch(setEmail(values.email)); dispatch(setPassword(values.password)) }}>Submit</Button>
                    <Typography>Login with <Button>Google</Button></Typography>
                </Box>
            </form>
        </div>
    )
}

export default Login