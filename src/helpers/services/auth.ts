import axios from "axios"
import Cookies from 'js-cookie'

export const authService = {
    login: async (values: any) => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/login`, values)
        const data = response.data
        if (data.token) {
            Cookies.set('token', data.token, { expires: 1 })
        }
        return response
    },

    logout:()=>{
        Cookies.remove('token')
    },

    isAuthenticated: () => {
        return !!Cookies.get('token')
      }
} 