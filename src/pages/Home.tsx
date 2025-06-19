
import { ArrowRight, Sun, Zap, Power, Timer, ChevronRight, Droplet, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const backgroundImage = 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg';

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-white to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#EAB441' }}>
            Powering a Sustainable Future with Solar Energy
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            India’s leading provider of solar energy solutions and energy-efficient products since 2015
          </p>
          <div className="flex flex-wrap gap-4">

            <Link
              to="/products"
              className="bg-[#398bda] hover:bg-blue-700 text-white px-12 py-3 rounded-md font-semibold flex items-center"
            >
              Know More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/products"
              className="bg-transparent border border-white hover:bg-white text-white hover:text-blue-900 px-8 py-3 rounded-md font-semibold"
            >
              Our Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-4">Our Mission</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl leading-relaxed mx-auto" style={{ maxWidth: '64rem' }}>
            At the heart of our mission is a commitment to revolutionizing energy through powerful, affordable, and scalable solar solutions. We provide high-quality renewable energy products backed by expert project management, unwavering integrity, and dedicated customer support. More than just a supplier, we’re your trusted partner on the path to clean, limitless energy and true energy independence.
          </p>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-4">Trusted By Industry Leaders</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 text-center mb-12">We're proud to partner with leading organizations across various sectors</p>
          
          <div className="flex overflow-hidden relative w-full">
            <div className="flex animate-carousel space-x-8 py-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17].map((num) => (
                <div 
                  key={num}
                  className={`h-20 w-auto object-contain min-w-[150px] company-logo-${num}`}
                />
              ))}
            </div>
            <div className="flex animate-carousel space-x-8 py-4" aria-hidden="true">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17].map((num) => (
                <div 
                  key={`clone-${num}`}
                  className={`h-20 w-auto object-contain min-w-[150px] company-logo-${num}`}
                />
              ))}
            </div>

          <p className="text-gray-600 text-center mt-12 italic">1000+ Satisfied customers.... continuing</p>
        </div>
        </div>
      </section>

      {/* How Solar Rooftop Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-green-500">Harness the Sun.</span>
                <br />
                <span className="text-blue-900">Empower Your World</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Aasna Urza Solar Rooftops delivers customized solar solutions for households,
                commercial spaces, industries, and utilities — empowering every need with clean,
                reliable, and sustainable energy
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <Sun className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900">SOLAR MODULES</h3>
                    <p className="text-gray-600">Convert sunlight into DC electricity</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <Zap className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900">INVERTER</h3>
                    <p className="text-gray-600">Converts DC electricity into usable AC electricity</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <Power className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900">CONVENTIONAL GRID</h3>
                    <p className="text-gray-600">Supplies electricity to premises, the sum towards excess electricity is credited to the owner's account</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <Timer className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900">METERING ARRANGEMENT</h3>
                    <p className="text-gray-600">To measure how much power your premises use and electricity that the solar power system feeds to the grid</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/src/assets/solar.png"
                  alt="Solar Panel Installation"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold">
                <p className="text-lg">Sustainable Energy</p>
                <p className="text-sm">For a Brighter Future</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Products & Services
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive solution and a full-service portfolio of solar energy and energy-efficient products, catering to all scales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Solar Photovoltaic */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Sun className="h-8 w-8 text-yellow-500" />
                <h3 className="text-xl font-bold text-blue-900">Solar Photovoltaic</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li>Solar Power Plant (Off Grid / On Grid)</li>
                <li>Solar Street Lighting System</li>
                <li>Solar Powered Fence</li>
                <li>Solar Pumping System</li>
              </ul>
              <Link to="/products" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
                Learn more <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
            </div>

            {/* Solar Thermo Technology */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="h-8 w-8 text-blue-500" />
                <h3 className="text-xl font-bold text-blue-900">Solar Thermo Technology</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li>Solar Water Heating System</li>
                <li>Solar Space Heating</li>
                <li>Air Source Heat Pumps</li>
              </ul>
              <Link to="/products" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
                Learn more <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
            </div>

            {/* Pumping Solutions */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Droplet className="h-8 w-8 text-blue-500" />
                <h3 className="text-xl font-bold text-blue-900">Pumping Solutions</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li>Commercial Boosting VFD Pumps</li>
                <li>Household Pumping Solution</li>
              </ul>
              <Link to="/products" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
                Learn more <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
            </div>

            {/* Mounting Structure and BOS */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <PenTool className="h-8 w-8 text-green-500" />
                <h3 className="text-xl font-bold text-blue-900">Mounting Structure and BOS</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li>Solar PV Mounting Structure (Fixed)</li>
                <li>Solar Single / Dual Axis Manual Tracking</li>
                <li>Solar Single / Dual Axis Auto Tracking</li>
                <li>All Solar Plant Components</li>
              </ul>
              <Link to="/products" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
                Learn more <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Solar Switch Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              The Solar Switch Made Simple
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Switching to solar was never this easy. We've got you covered, here's how it works
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

            <div className="space-y-20">
              {/* Free In-home Consultation */}
              <div className="flex items-center justify-center relative">
                <div className="w-1/2 pr-16 text-right">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Free In-home Consultation</h3>
                  <p className="text-gray-600">A knowledgeable consultant will survey your home, assess your generated and potential savings and design a custom solar system that suits your roof</p>
                </div>
                <div className="absolute z-10 bg-white p-4 rounded-full border-4 border-blue-200">
                  <PenTool className="h-8 w-8 text-blue-500" />
                </div>
                <div className="w-1/2 pl-16"></div>
              </div>

              {/* Personalized Solar Proposal */}
              <div className="flex items-center justify-center relative">
                <div className="w-1/2 pr-16"></div>
                <div className="absolute z-10 bg-white p-4 rounded-full border-4 border-blue-200">
                  <Droplet className="h-8 w-8 text-blue-500" />
                </div>
                <div className="w-1/2 pl-16">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Personalized Solar Proposal & Dedicated Manager</h3>
                  <p className="text-gray-600">Based on your requirements, our team will create a custom proposal for you. A budget Manager is also assigned to answer your queries and keep you updated on the project.</p>
                </div>
              </div>

              {/* Paperwork and Subsidy */}
              <div className="flex items-center justify-center relative">
                <div className="w-1/2 pr-16 text-right">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Paperwork and Subsidy Assistance</h3>
                  <p className="text-gray-600">End-to-end paperwork management by us let those files rest, we'll handle all the documentation and subsidy application process</p>
                </div>
                <div className="absolute z-10 bg-white p-4 rounded-full border-4 border-blue-200">
                  <Power className="h-8 w-8 text-blue-500" />
                </div>
                <div className="w-1/2 pl-16"></div>
              </div>

              {/* Professional Installation */}
              <div className="flex items-center justify-center relative">
                <div className="w-1/2 pr-16"></div>
                <div className="absolute z-10 bg-white p-4 rounded-full border-4 border-blue-200">
                  <Zap className="h-8 w-8 text-blue-500" />
                </div>
                <div className="w-1/2 pl-16">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Step-by-step Professional & Safe Installation</h3>
                  <p className="text-gray-600">Once you validate the electrical drawings, your solar system will be installed by our team of certified technicians in a safe and professional manner.</p>
                </div>
              </div>

              {/* Grid Connection */}
              <div className="flex items-center justify-center relative">
                <div className="w-1/2 pr-16 text-right">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Connection to the Grid</h3>
                  <p className="text-gray-600">We coordinate with the discom to connect your system to the power grid and install a new electricity meter</p>
                </div>
                <div className="absolute z-10 bg-white p-4 rounded-full border-4 border-blue-200">
                  <Sun className="h-8 w-8 text-yellow-500" />
                </div>
                <div className="w-1/2 pl-16"></div>
              </div>

              {/* Power On */}
              <div className="flex items-center justify-center relative">
                <div className="w-1/2 pr-16"></div>
                <div className="absolute z-10 bg-white p-4 rounded-full border-4 border-blue-200">
                  <Timer className="h-8 w-8 text-green-500" />
                </div>
                <div className="w-1/2 pl-16">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Power On Your New System</h3>
                  <p className="text-gray-600">Switch on your system to enjoy reduced electricity bills and an energy-independent future</p>
                </div>
              </div>

              {/* Maintenance */}
              <div className="flex items-center justify-center relative">
                <div className="w-1/2 pr-16 text-right">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Deep Cleaning and Maintenance</h3>
                  <p className="text-gray-600">We'll call you to schedule quarterly deep cleaning and preventive health checks of your system for 5 years</p>
                </div>
                <div className="absolute z-10 bg-white p-4 rounded-full border-4 border-blue-200">
                  <Droplet className="h-8 w-8 text-blue-500" />
                </div>
                <div className="w-1/2 pl-16"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;