export const metadata = {
    title: 'About',
    description: 'About page for Linkan333',
    referrer: 'no-referrer',
    keywords: ['linkan333', 'projects', 'about', 'linkan'],
  }
  
  export default function About() {
    return (
      <div className="flex min-h-screen flex-col items-center bg-white">
        <h1 className="text-black pt-20">About</h1>
        <div className="w-3/4 p-8 bg-white shadow-sm rounded-lg mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Vision</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Trading stocks with cutting-edge strategies and tools.</li>
            <li>Providing data-driven insights to optimize your investments.</li>
            <li>Developing innovative solutions to streamline workflows.</li>
            <li>Empowering businesses to thrive in the digital age.</li>
          </ul>
        </div>
        <div className="w-3/4 p-8 bg-white shadow-sm rounded-lg mt-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Commitment to Excellence</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Trading stocks with cutting-edge strategies and tools.</li>
            <li>Providing data-driven insights to optimize your investments.</li>
            <li>Developing innovative solutions to streamline workflows.</li>
            <li>Empowering businesses to thrive in the digital age.</li>
          </ul>
        </div>
      </div>
    )
  }