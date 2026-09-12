import BannerImg from '../assets/banner-stack.png'

export default function Banner() {
  return (
    <section className=" bg-white px-6 py-12 md:px-16 md:py-20 container mx-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <div className="flex flex-col items-start text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Build Your Ideal
          </h1>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent tracking-tight leading-tight mb-6">
            Development Stack
          </h2>

          <p className="text-slate-500 text-base sm:text-lg max-w-lg mb-8 leading-relaxed">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your
            next project.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-linear-to-r from-orange-500 to-pink-500 hover:opacity-90 text-white font-semibold px-6 py-3 rounded-lg shadow-sm transition duration-200">
              Explore Technologies
            </button>
            <button className="bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3 rounded-lg border border-slate-200 transition duration-200">
              Learn More
            </button>
          </div>
        </div>


        {/* Right Image Column */}
        <div className="flex justify-center md:justify-end">
          <img
            src={BannerImg}
            alt="Development Stack Illustration"
            className="w-full max-w-md lg:max-w-lg object-contain"
          />
        </div>

      </div>
    </section>
  );
}