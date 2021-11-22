import useSWR from 'swr'


export default function Contact({ contact }) {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } =  useSWR('/api/data/contact', fetcher)
  if (error) return <div>failed to load</div>
  return (
    <div className='flex lg:min-h-screen flex-col'>
        asd
    </div>
  )
}
