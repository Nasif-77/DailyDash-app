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

        <Link style={{ textDecoration: 'none' }} href={'/auth/login'}>
          <Button sx={{margin:'10px'}} variant='contained' >Login</Button>
        </Link>

        <Link style={{ textDecoration: 'none' }} href={'/auth/signup'}>
          <Button sx={{margin:'10px'}} variant='contained' >Signup</Button>
        </Link>
      </div>
    </main>
  )
}
