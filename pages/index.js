import Head from 'next/head'
//Custom components
import { NavBar } from '../components/NavBar'
import { Header } from '../components/Header'
import { About } from '../components/About'
import { Services } from '../components/Services'
import { Footer } from '../components/Footer';

export default function Home( { home } ) {
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
      {home && 
       <body>
        <div className='flex lg:min-h-screen flex-col'>
          <NavBar navBar={ home.navBar } />
          <Header header={ home.header } />
        </div>
          <About about={ home.about } />
          <Services services={ home.services } />
          <Footer footer={ home.footer } />
       </body>
      }
    </html>
  )
}


export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/data/home')
  const home = await res.json()
  return {
    props: {
      home,
    },
  }
}

