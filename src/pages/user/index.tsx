import { authService } from '@/helpers/services/auth'
import { Button } from '@mui/material'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function index() {
    const router = useRouter()

    const [authorized, setAuthorized] = useState(false)
    const [users, setUsers] = useState([])

    useEffect(() => {
        const isAuth = async () => {
            try {
                const token = Cookies.get('token')
                const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/user`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })


                if (response.status === 200) {
                    setAuthorized(true)
                    setUsers(response.data)
                }
                console.log(response)

            } catch (error: any) {
                console.log(error)
                if (error.response.status === 401) {
                    setAuthorized(false)
                    router.push('/auth/login')
                }
            }
        }
        isAuth()
    }, [])

    const logout = async () => {
        try {
            authService.logout()
            router.push('/auth/login')
        } catch (error) {

        }
    }

    return (
        <>
            {authorized ? <div>
                {users.map((user: any) => {
                    return (
                        <li key={user._id}>
                            {user.name}
                        </li>
                    )
                })}
                <Button onClick={logout}>Logout</Button>
            </div> : <div>Not authorized</div>}
        </>
    )
}

export default index