import Login from '../../components/Login'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'

function login() {

    const router = useRouter()
    const { data: session } = useSession()
    console.log(session)

    if (session) router.push('/user')


    return (
        <div>
            <Login />
        </div>
    )
}

export default login


export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const referer = req.url
    return {
        props: {}
    }
}
