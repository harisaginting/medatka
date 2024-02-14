export default function Home() {
  return (
    <div className="bg-gray-200 h-screen" >
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-56">
          <div className="text-center">
            <div className="font-bold tracking-tight text-gray-900 sm:text-6xl">
              <span className={`glaciall-bold text-8xl tracking-widest text-morange`}>ME</span><span className="blanka text-[5.1rem] tracking-widest text-mblue">DAT</span><span className="blanka text-[5.1rem] tracking-widest text-mred">KA</span>
            </div>
            <p className="mt-2 leading-8 text-gray-600 glaciall text-2xl tracking-widest">
              Mengenal Dengan Adat Kita
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-2">
              <a href="./login" 
                 className="text-sm font-semibold rounded-md bg-green-600 px-10 py-2.5 text-white shadow-sm  hover:bg-green-500">
                Gabung <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
