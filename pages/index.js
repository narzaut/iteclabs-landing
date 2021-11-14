import Head from 'next/head'
import { NavBar } from '../components/NavBar'
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-700">
      <Head>
        <title>iTec Labs - Instituto Tecnologico Rio Cuarto</title>
        <link rel="icon" href="https://lh6.googleusercontent.com/YC87gVhr4Z2lPNmBFqsf7x5prGUq1WbF6ZLhD4-Fg3sXxhPb6g7MmXzIcGymV0aCplBuuR1Fg9c2ekNShTi3EMEkjKJWtg0" />        
      </Head>
      <NavBar />
      <p>asd</p>

    </div>
  )
}
