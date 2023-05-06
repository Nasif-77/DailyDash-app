import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import React, { FormEvent, useEffect, useState } from 'react'
import classes from '../styles/general.module.scss'
import { useFormik } from 'formik'
import { otpSchema } from '../validation/validation'
import axios from 'axios'
import { useRouter } from 'next/router'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify'


function Otp() {

    const router = useRouter()

    const [timeLeft, setTimeLeft] = useState(6)
    const [email, setEmail] = useState('')



    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            if (timeLeft === 60) {
                setEmail(localStorage.getItem('email') || '')
            }
        }
        if (timeLeft === 0) {
            const expireOtp = async () => {
                try {
                    const email = localStorage.getItem('email')
                    const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/user`, {
                        email: email,
                        subject: "Expire OTP"
                    })
                    if (response.status === 200) toast.info("Your otp has been expired")
                } catch (error) {

                }
            }
            expireOtp()
        }

    }, [timeLeft]);

    const { values, handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            otp: ''
        },
        validationSchema: otpSchema,
        onSubmit: () => {
            sentOtp()
        }
    })

    const sentOtp = async () => {
        try {
            const email = localStorage.getItem('email')
            const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/user`, {
                otp: values.otp,
                email: email
            })
            console.log(response)
            if (response.status === 200) {
                localStorage.removeItem('email')
                router.push('/login')
            }

        } catch (error: any) {
            if (error) toast.error("Wrong OTP")
            console.log(error)
        }
    }

    const resendOtp = async () => {
        try {
            const email = localStorage.getItem('email')
            const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/user`, {
                email: email
            })
            if (response.status === 200) {
                toast.info(`A new OTP has been sent to ${email}`)
                setTimeLeft(60)
            }
        } catch (error) {

        }
    }


    return (

        <div className={classes.otp}>

            <form onSubmit={handleSubmit}>
                <Paper sx={{ padding: '30px' }} elevation={4} className={classes.paper}>
                    <Box className={classes.box}>
                        <Typography>An OTP has been sent to your email <strong>{email}</strong></Typography>

                        <TextField
                            margin='normal'
                            name="otp"
                            label="Enter Your OTP"
                            variant="outlined"
                            fullWidth
                            type="number"
                            value={values.otp}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.otp && Boolean(errors.otp)}
                            helperText={touched.otp && errors.otp}
                            onInput={(e: React.ChangeEvent<HTMLInputElement>) => e.target.value = e.target.value.slice(0, 6)}
                        />

                        <Box
                            display={'flex'}
                            justifyContent={'space-evenly'}
                            alignItems={'center'}
                        >
                            <Typography>Your otp expires in:{timeLeft}Sec</Typography>
                            <Button disabled={timeLeft === 0 ? false : true} onClick={resendOtp}>Resend otp</Button>
                        </Box>

                        <Button disabled={values.otp.toString().length !== 6 ? true : false} variant='outlined' type='submit'>submit Otp</Button>

                    </Box>
                </Paper>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Otp