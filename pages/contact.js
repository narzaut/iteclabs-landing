export default function Contact({ contact }) {
  return (
    contact && 
        <div className='flex lg:min-h-screen flex-col'>
            {contact.main.brandName}
        </div>
  )
}

export async function getStaticProps() {

    const res = await fetch('http://localhost:3000/api/data/contact')
    const contact = await res.json()

    return {
      props: {
        contact,
      },
    }
  }
  