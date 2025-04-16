export const metadata = {
  title: 'Home',
  description: 'The braining company home',
  referrer: 'no-referrer',
  keywords: ['forex', 'projects', 'braining company', 'company braining', 'stocks', 'trading'],
}

import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16">
        {/* Hero Section */}
        <div className="text-center pt-20 pb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Welcome to The Braining Co.</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming the future of trading through innovation and expertise
          </p>
        </div>

        {/* Vision Section */}
        <div className="my-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Vision</h2>
              <ul className="space-y-4">
                {[
                  "Trading stocks with cutting-edge strategies and tools",
                  "Providing data-driven insights to optimize your investments",
                  "Developing innovative solutions to streamline workflows",
                  "Empowering businesses to thrive in the digital age"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-blue-500 mr-2">•</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/static/assets/hero.png"
                alt="Trading visualization"
                fill
                style={{ objectFit: 'cover' }}
                className="transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="my-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/static/assets/hero2.png"
                alt="Professional trading environment"
                fill
                style={{ objectFit: 'cover' }}
                className="transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Us</h2>
              <ul className="space-y-4">
                {[
                  "Proven track record of successful market analysis and predictions",
                  "Advanced algorithmic trading systems built on robust architecture",
                  "Comprehensive risk management strategies and portfolio optimization",
                  "24/7 professional support and expert consultation services"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-blue-500 mr-2">•</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}