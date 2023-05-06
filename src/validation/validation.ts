import * as yup from 'yup'



export const signupSchema = yup.object({
    name: yup
        .string()
        .min(2, 'Please enter the name correctly')
        .required('Your name is required'),
    email: yup
        .string()
        .email('please enter a valid Email')
        .required("Please Enter Your Email")
    ,
    password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, { message: "Please create a stronger password(special characters,numbers..)" })
        .required('Password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), ''], 'Passwords must match')
        .required('Password confirmation is required'),
    contact: yup
        .string()
        .min(10, "Please enter a valid phone number")
        .max(10, "Please enter a valid phone number")
        .required('Your contact details is required')
})


export const otpSchema = yup.object({
    otp: yup
        .number()
        .required("Please enter your OTP")
})


export const loginSchema = yup.object({
    email: yup
        .string()
        .email("Please Enter a valid Email")
        .required("Email cannot be empty"),
    password: yup
        .string()
        .required("Password cannot be empty")
})