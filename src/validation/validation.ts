import * as yup from 'yup'



export const signupSchema = yup.object({
    name: yup
        .string()
        .min(2, 'Please enter the name correctly')
        .required('Your name is required'),
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
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
        .min(10, 'Contact must be 10 characters')
        .max(10, 'Contacts must be 10 characters')
        .required('Contacts is required')
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