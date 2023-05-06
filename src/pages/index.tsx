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
        
        <Link style={{ textDecoration: 'none' }} href={'/user/login'}>
          <Button className='m-2' color='inherit' variant='contained' >Login</Button>
        </Link>
        
        <Link style={{ textDecoration: 'none' }} href={'/user/signup'}>
          <Button className='m-2' color='inherit' variant='contained' >Signup</Button>
        </Link>
      </div>
    </main>
  )
}
