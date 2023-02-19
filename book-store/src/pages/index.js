import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Register from './register'
import Navbar from 'components/Navbar'
import BestSeller from 'components/BestSeller'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <BestSeller/>
    </div>
  )
}
