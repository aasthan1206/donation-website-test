import Image from 'next/image'
import { Inter } from 'next/font/google'
import Organizations from './organizations'
import RegistrationForm from './registrationForm'
import Hero from '@/components/hero'
import HomePage from './homePage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <HomePage />
  )
}
