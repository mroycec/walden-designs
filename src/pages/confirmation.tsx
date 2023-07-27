export default function Home() {
  return (
    <div className="fixed w-screen h-screen bg-cover bg-bottom bg-fog">
      <div className="fixed z-50 inset-0 flex items-center justify-center space-y-4">
        <div className="bg-tint-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-main-bold text-tint-900 mb-4 text-center">
            🌱🎒🧵🌿🌞🏕️🐌 <br /> Walden Designs
          </h2>
          <div className="space-y-8 flex flex-col justify-center">
            <h1 className="text-md md:text-lg lg:text-xl text-center">You&apos;re on the list!</h1>
            <p className="text-sm md:text-md lg:text-lg text-center text-wrap">We&apos;ll keep you posted on what&apos;s in the works.</p>
          </div>
        </div>
      </div>
    </div>
  )
}