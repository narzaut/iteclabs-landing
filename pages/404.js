import Head from 'next/head'

export default function Home() {
  return (
    <div className="App">
			<div class="bg-indigo-300 text-indigo-800 min-h-screen flex items-center">
  			<div class="container mx-auto p-4 flex flex-wrap items-center">
    			<div class="w-full md:w-5/12 flex items-center justify-center lg:justify-end md:justify-end">
      			<img src={process.env.PUBLIC_URL + "/assets/logo-placeholder.png"} alt="Not Found" />
    			</div>
    			<div class="w-full md:w-7/12 text-center md:text-left p-4">
      			<div class="text-6xl font-medium">404</div>
      				<div class="text-xl md:text-3xl font-medium mb-4">
        				¡Ups! Esta página ha desaparecido.
      				</div>
      				<div class="text-lg mb-8">
        			Es posible que haya escrito mal la dirección o que la página se haya movido.
      			</div>
      			<a href="/" class="border border-indigo-700 rounded p-4">Ir al inicio</a>
    			</div>
  			</div>
			</div>
    </div>
  )
}
