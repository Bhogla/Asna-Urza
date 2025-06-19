import { Sun, Lightbulb, Shield, Settings, Wind, Thermometer, Bolt, Car, Home, Factory, Sprout } from 'lucide-react';
import p1 from '../assets/Product/p1.jpg';
import p2 from '../assets/Product/p2.jpg';
import p3 from '../assets/Product/p3.jpg';
import p4 from '../assets/Product/p4.jpg';
import p5 from '../assets/Product/p5.jpg';
import p6 from '../assets/Product/p6.jpg';

const Products = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 relative overflow-hidden">
        <img src={p5} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products & Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            At Urza India, we offer comprehensive renewable energy solutions and energy-efficient products, from design to lifelong support. Explore our diverse range for residential, commercial, industrial, and agricultural needs.
          </p>
        </div>
      </section>

      {/* Solar Photovoltaic (PV) Solutions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">1. Solar Photovoltaic (PV) Solutions</h2>
          <p className="mb-8 text-center max-w-3xl mx-auto">
            Harness the abundant power of the sun to generate your own clean electricity. Our solar photovoltaic solutions are built with high-efficiency components and cutting-edge technology to ensure maximum power generation and energy independence.
          </p>
          <div className="mb-12">
            <img src={p1} alt="Solar Panels" className="w-full h-64 object-cover rounded-lg shadow-md mb-6" />
          </div>

          {/* Solar Power Plants */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-12">
            <h3 className="text-2xl font-bold mb-4 flex items-center"><Sun className="mr-3" /> Solar Power Plants (Grid-Interactive & Off-Grid/Hybrid)</h3>
            <p className="mb-4">Whether you want to reduce your electricity bills or go completely off-grid, we have the perfect solution.</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><span className="font-semibold">Grid-Interactive (On-Grid) Systems:</span> Seamlessly connect to the public utility grid. Reduce your monthly electricity bills by generating your own power and export any surplus energy for credit.</li>
              <li><span className="font-semibold">Off-Grid & Hybrid Systems:</span> Achieve true energy independence. These systems store excess energy in batteries, providing a reliable power supply during grid outages and at night. Ideal for remote locations or critical power needs.</li>
            </ul>
            <h4 className="text-xl font-semibold mb-3">Key Features:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>High-efficiency Poly-Crystalline or Mono-Crystalline Solar Modules.</li>
              <li>Smart Inverters with advanced protection measures and Wi-Fi monitoring.</li>
              <li>Heavy-duty, corrosion-resistant mounting structures.</li>
              <li>Complete safety with Surge Protection, Earthing, and Lightning Arrestors.</li>
            </ul>
          </div>

          {/* Solar Street Lighting Systems */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-12">
            <h3 className="text-2xl font-bold mb-4 flex items-center"><Lightbulb className="mr-3" /> Solar Street Lighting Systems</h3>
            <p className="mb-4">Illuminate public spaces, roadways, and campuses with our autonomous and reliable solar street lights. We offer both standalone and integrated systems that provide guaranteed lighting, enhance safety, and require minimal maintenance.</p>
            <h4 className="text-xl font-semibold mb-3">Available Configurations:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Options from 5Mtr to 12Mtr poles (Round/Octagonal).</li>
              <li><span className="font-semibold">High-Efficiency Luminaries:</span> High-lumen LED modules with MPPT controllers for optimized performance and power management.</li>
              <li><span className="font-semibold">Battery Options:</span> Choose from reliable C-10 Lead Acid/SMF batteries or modern, long-lasting LiFePo4 batteries for a maintenance-free experience.</li>
            </ul>
          </div>


        </div>
      </section>

      {/* Solar Thermotechnology */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">2. Solar Thermotechnology</h2>
          <p className="mb-8 text-center max-w-3xl mx-auto">
            Efficiently convert sunlight into thermal energy for your heating needs. Our solar thermotechnology products offer a cost-effective and eco-friendly alternative to traditional electric geysers and heaters.
          </p>
          <div className="mb-12">
            <img src={p2} alt="Solar Thermotechnology" className="w-full h-64 object-cover rounded-lg shadow-md mb-6" />
          </div>

          {/* Solar Water Heating Systems */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h3 className="text-2xl font-bold mb-4 flex items-center"><Thermometer className="mr-3" /> Solar Water Heating Systems</h3>
            <p className="mb-4">Enjoy hot water year-round with our advanced solar water heaters. We provide two market-leading technologies to suit different climates and requirements.</p>
            <h4 className="text-xl font-semibold mb-3">ETC (Evacuated Tube Collector) Systems:</h4>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li><span className="font-semibold">Technology:</span> Uses borosilicate twin glass vacuum tubes with a three-layer coating (Al-Ni-Cu) for rapid heat absorption and superior thermal efficiency.</li>
              <li><span className="font-semibold">Features:</span> Food-grade Stainless Steel (SS 304L) tank with high-density PUF insulation to keep water hot for hours, even during peak winters.</li>
            </ul>
            <h4 className="text-xl font-semibold mb-3">FPC (Flat Plate Collector) Systems:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li><span className="font-semibold">Technology:</span> A highly durable system that absorbs solar radiation through flat plate collectors with high-absorptivity coating.</li>
              <li><span className="font-semibold">Features:</span> Built for longevity (15-20 year shelf life), with 4MM toughened glass, an aluminum casing, and an inbuilt de-scaling technology in the tank.</li>
            </ul>
          </div>

          {/* Air Source Heat Pumps */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 flex items-center"><Wind className="mr-3" /> Air Source Heat Pumps</h3>
            <p className="mb-4">Experience the future of water and space heating with our high-efficiency Air Source Heat Pumps. An intelligent alternative to furnaces and geysers, these units use electricity to move heat from the ambient air, not create it. This process can lead to 70-80% energy savings compared to conventional electric geysers.</p>
            <h4 className="text-xl font-semibold mb-3">Key Features:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Powered by industry-leading Copeland or Sanyo compressors.</li>
              <li>Durable, anti-corrosion body suitable for Indian weather conditions (-25°C to 45°C).</li>
              <li>Automatic defrosting technology and multi-function smart controller.</li>
              <li>Provides a 24x7 hot water solution for homes and businesses.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Advanced Pumping Solutions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">3. Advanced Pumping Solutions</h2>
          <p className="mb-8 text-center max-w-3xl mx-auto">
            We provide high-quality water management systems designed for agricultural, commercial, and domestic use. Our solutions, backed by industry leaders like Grundfos, are built for efficiency and reliability.
          </p>
          <div className="mb-12">
            <img src={p3} alt="Advanced Pumping Solutions" className="w-full h-64 object-cover rounded-lg shadow-md mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Sprout className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Solar Water Pumping Solutions</h3>
              <p>A boon for Indian agriculture, our solar pumps bring water to remote farms, increasing crop yield and bringing smiles to farmers' faces. We pair these pumps with our specialized Auto Dual-Axis Solar Tracking Systems for maximum water flow from dawn to dusk.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Factory className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Commercial Boosting VFD Pumps</h3>
              <p>Intelligent, energy-efficient pumps for maintaining constant water pressure in large buildings and commercial establishments.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Home className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Household Pumping Solutions</h3>
              <p>Reliable and durable pumps for all your domestic water needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mounting Structures & Balance of System (BOS) */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">4. Mounting Structures & Balance of System (BOS)</h2>
          <p className="mb-8 text-center max-w-3xl mx-auto">
            The foundation of any solar plant is critical to its performance and lifespan. We design and install robust mounting structures that are built to last.
          </p>
          <div className="mb-12">
            <img src={p4} alt="Mounting Structures" className="w-full h-64 object-cover rounded-lg shadow-md mb-6" />
          </div>
          <h3 className="text-2xl font-bold mb-6 text-center">We Specialize in Auto-Tracking Systems for More Yield</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Settings className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fixed Mounting Structures</h3>
              <p>Standard, durable structures for a cost-effective installation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Bolt className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Single & Dual Axis Manual Tracking</h3>
              <p>A budget-friendly way to manually adjust panel angles and increase energy generation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <Car className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Single & Dual Axis Auto-Tracking</h3>
              <p>Our premium offering. These smart structures automatically follow the sun's path across the sky</p>
            </div>
          </div>
        </div>
      </section>

      {/* Turnkey EPC and DPR Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">5. Turnkey EPC and DPR Services</h2>
          <p className="mb-8 text-center max-w-3xl mx-auto">
            We are more than just a supplier; we are your project partner from concept to commissioning.
          </p>
          <div className="mb-12">
            <img src={p6} alt="Turnkey EPC and DPR Services" className="w-full h-64 object-cover rounded-lg shadow-md mb-6" />
          </div>

          <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-12">
            <h3 className="text-2xl font-bold mb-4 flex items-center"><Bolt className="mr-3" /> EPC (Engineering, Procurement, and Construction)</h3>
            <p className="mb-4">Our core service. We handle every aspect of your solar project, including:</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li><span className="font-semibold">Advisory & Design:</span> Creating a custom solution tailored to your needs.</li>
              <li><span className="font-semibold">Procurement:</span> Sourcing the highest quality components from trusted partners.</li>
              <li><span className="font-semibold">Construction & Integration:</span> Professional installation and commissioning by our skilled team.</li>
              <li><span className="font-semibold">Project Development:</span> Managing the project from start to finish.</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4 flex items-center"><Settings className="mr-3" /> DPR (Detailed Project Report) Services</h3>
            <p>For large-scale industrial or commercial projects, we provide comprehensive project reports that outline technical feasibility, financial analysis, and project timelines, ensuring a smooth and successful implementation.</p>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Products;