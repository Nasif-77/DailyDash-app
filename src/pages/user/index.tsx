import { authService } from '@/helpers/services/auth'
import { Button } from '@mui/material'
import axios from 'axios'
import Cookies from 'js-cookie'
import cookie from 'cookie'
import { GetServerSidePropsContext } from 'next'
import { signOut, getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Session } from 'next-auth'

interface props {
    session: Session,
    googleToken: any
}

function index({ session, googleToken }: props) {
    const router = useRouter()

    const [authorized, setAuthorized] = useState(false)
    const [users, setUsers] = useState([])



    useEffect(() => {
        const isAuth = async () => {
            const token = Cookies.get('token')
            try {

                if (token || googleToken) {
                    const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/user`, {
                        headers: {
                            Authorization: `Bearer ${token || googleToken}`
                        }
                    })

                    if (response.status === 200) {
                        setAuthorized(true)
                        setUsers(response.data)
                    }
                    console.log(response)
                }

            } catch (error: any) {
                console.log(error)
                const status = error.response?.status
                if (status === 401) {
                    setAuthorized(false)
                    // router.push('/auth/login')
                }
            }
        }
        isAuth()
    }, [])

    const logout = async () => {
        try {
            if (!session) {
                authService.logout()
                router.push('/auth/login')
            } else {
                signOut()
            }
        } catch (error) {

        }
    }

    if (session || authorized) {
        return (
            <div>
                {users.map((user: any) => {
                    return (
                        <li key={user._id}>
                            Name:{user.name}
                        </li>
                    )
                })}
                {session ? <h1>{session.user?.name}</h1> : ''}
                <Button onClick={logout}>Logout</Button>
            </div >
        )
    }

}

export default index


export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const session = await getSession(context)
    let googleToken: any = cookie.parse(context.req.headers.cookie ?? '')

    googleToken = googleToken['next-auth.session-token']

    // if (!session) {
    //     console.log('Not authorized')
    // }
    // else {
    //     console.log('Authorized')
    // }
    return {

        props: { session, googleToken }

    }
}