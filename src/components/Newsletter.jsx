export default function Newsletter() {
  return (
    <div className="container border-2 p-0 rounded-2xl bg-gradient-to-r from-violet-300 to-yellow-200">
      <div className="hero rounded-2xl bg-[url('/assets/bg-shadow.png')] bg-cover bg-center p-8 lg:p-16">
        <form className="flex flex-col items-center md:items-start mb-16">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 text-center md:text-left">
            Subscribe to our Newsletter
          </h1>
          <p className="font-medium text-base md:text-lg lg:text-xl text-center md:text-left mb-6 max-w-lg">
            Get the latest updates and news right in your inbox!
          </p>
          <fieldset className="w-full max-w-sm md:max-w-md lg:max-w-lg flex justify-center md:justify-start">
            <div className="join flex w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered join-item flex-grow px-4 py-2 rounded-l-lg"
              />
              <button className="btn border-none btn-primary join-item bg-gradient-to-r from-orange-300 to-orange-400 text-black font-bold text-lg px-6 py-2 rounded-r-lg">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
