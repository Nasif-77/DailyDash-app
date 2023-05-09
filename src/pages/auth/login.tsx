import Login from '../../components/Login'
import { decrement, decrementByAmount, increment, incrementByAmount, reset, selectCount } from '@/store/reducers/counterSlice'
import { Button, Typography } from '@mui/material'
import { GetServerSideProps } from 'next'
import { NextRequest } from 'next/server'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

function login() {
    const dispatch = useDispatch()
    const count = useSelector(selectCount)

    return (
        <div>
            <Login />
            {/* <Typography variant='h1' textAlign={'center'}>{count}</Typography>
            <Button onClick={() => dispatch(increment())}>+</Button>
            <Button onClick={() => dispatch(decrement())}>-</Button>
            <Button onClick={() => dispatch(incrementByAmount(5))}>+5</Button>
            <Button onClick={() => dispatch(decrementByAmount(5))}>-5</Button>
            <Button onClick={() => dispatch(reset())}>Reset</Button> */}
        </div>
    )
}

export default login


export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const referer = req.url
    console.log(referer, '-----refereerererrer')
    return {
        props: {}
    }
}
