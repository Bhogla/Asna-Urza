import React from 'react';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {


  return (
    <div className="bg-gray-50">
      {/* Contact Header */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch with us for any inquiries about our solar energy solutions and services.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-8 p-8 md:p-12 min-h-[600px]">
            {/* Contact Form */}
            <div className="lg:pr-8 flex flex-col justify-between">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Let's Connect!</h2>
              <p className="text-lg text-gray-600 mb-8">Have questions or ready to start your solar journey? Fill out the form below and we'll get back to you promptly.</p>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="lg:pl-8 mt-12 lg:mt-0">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Our Details</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="h-8 w-8 text-blue-600 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-700 text-lg">Raj Tower, Opp. Nirankari Satsang Bhawan, Haridwar Bypass Road, Dehradun-248001</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-8 w-8 text-blue-600 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-700 text-lg">
                      <a href="tel:+911234567890" className="hover:underline">+91 123 456 7890</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-8 w-8 text-blue-600 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-700 text-lg">
                      <a href="mailto:info@aasnaurza.com" className="hover:underline">info@aasnaurza.com</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-12 rounded-xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.9984630000007!2d78.0419599150779!3d30.31649498179499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c5f0000001%3A0x1234567890abcdef!2sRaj%20Tower%2C%20Haridwar%20Bypass%20Road%2C%20Dehradun%2C%20Uttarakhand%20248001!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;