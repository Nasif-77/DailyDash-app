import { Button } from '@mui/material'
import { GetServerSidePropsContext } from 'next'
import { SessionProviderProps, getSession, signOut, useSession } from 'next-auth/react'
import React from 'react'

function test({ session }: SessionProviderProps) {
    // const { data: session } = useSession()
    console.log(session, 'first')
    return (
        <div>
            Test
            <Button onClick={() => signOut()}>Sign out</Button>
        </div>
    )
}

export default test

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const session = await getSession(context)
    console.log(session, 'hi')
    return {
        props: { session }
    }
}