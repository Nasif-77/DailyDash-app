import Image from 'next/image'
import { Inter } from 'next/font/google'
import Signup from '@/components/Signup'
import { Button } from '@mui/material'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="">
      <div className="p-4">
        <Button className='m-2' color='inherit' variant='contained' ><Link style={{textDecoration:'none'}} href={'/login'}>Login</Link></Button>
        <Button className='m-2' color='inherit' variant='contained' ><Link style={{textDecoration:'none'}} href={'/signup'}>Signup</Link></Button>
      </div>
    </main>
  )
}
