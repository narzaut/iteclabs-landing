import Head from 'next/head'
import jsonData from '../lang/spanish.json';
//Custom components
import { NavBar } from '../components/NavBar'
import { Header } from '../components/Header'
import { About } from '../components/About'
import { Services } from '../components/Services'



export default function Home() {
  const data =  JSON.parse(JSON.stringify(jsonData));


  return (
    <div   className="fadeIn flex flex-col min-h-screen bg-gray-700">
      <Head>
        <title>iTec Labs - Instituto Tecnologico Rio Cuarto</title>
        <link rel="icon" href="./assets/favicon.png" />        
        <link 
          href='https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      {data && 
       <>
        <NavBar navBar={ data.navBar } />
        <div className='pt-24 '>
          <Header />
          <About />
          <Services services={ data.services } />
        </div>
        
       </>
      }
     
    </div>
  )
}
