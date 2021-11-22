import Head from 'next/head'
import useSWR from 'swr'
//Custom components
import { NavBar } from '../components/NavBar'
import { Header } from '../components/Header'
import { About } from '../components/About'
import { Services } from '../components/Services'
import { Footer } from '../components/Footer';

export default function Home( ) {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } =  useSWR('/api/data/home', fetcher)
  if (error) return <div>failed to load</div>
  return (
    
    <html lang='es' className="fadeIn flex flex-col min-h-screen bg-gray-700">
      <Head>
        <title>iTec Labs - Instituto Tecnologico Rio Cuarto</title>
        <link rel="icon" href="./assets/favicon.png" />        
        <link 
          href='https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700&display=swap'
          rel='stylesheet'
        />
        <meta 
          name="description"
          content="
            Author: Ignacio Arzaut,
            Company: iTec Labs,
            Category: Software Development
          "
        />
      </Head>
      {data && 
       <body>
          <NavBar navBar={ data.navBar } />
          <Header header={ data.header } />
          <About about={ data.about } />
          <Services services={ data.services } />
          <Footer footer={ data.footer } />
       </body>
      }
    </html>
  )
}
