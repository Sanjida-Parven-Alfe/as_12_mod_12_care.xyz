import Image from "next/image";
import React from "react";
import { FaHandHoldingHeart, FaUserNurse, FaShieldAlt, FaUsers } from "react-icons/fa";

export const metadata = {
  title: "About Us - Care.xyz",
  description: "Learn more about our mission to provide the best caregiving services.",
};

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen">
      
      <div className="relative h-[400px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1470&auto=format&fit=crop"
          alt="About Us Hero"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            We Care Like Family
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Providing compassionate, professional, and reliable care services for your loved ones at the comfort of your home.
          </p>
        </div>
      </div>


      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-xl transform rotate-2 hover:rotate-0 transition-all duration-500">
            <Image
              src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=1470&auto=format&fit=crop"
              alt="Our Story"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-rose-600 font-bold uppercase tracking-wide text-sm mb-2">Our Story</h4>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Building a Bridge of Care & Trust</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Care.xyz started with a simple mission: to make high-quality care accessible to everyone. We noticed how difficult it was for families to find reliable professionals for elderly care, child care, or post-surgery support.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we are proud to be a trusted partner for thousands of families. We don't just provide services; we build relationships based on trust, empathy, and professional excellence.
            </p>
          </div>
        </div>
      </div>

   
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
            <p className="text-gray-500 mt-2">Our core values define who we are.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all text-center group">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rose-600 transition-colors">
                <FaHandHoldingHeart className="text-2xl text-rose-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Compassion</h3>
              <p className="text-gray-500 text-sm">We treat every individual with kindness, empathy, and dignity.</p>
            </div>

        
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all text-center group">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rose-600 transition-colors">
                <FaUserNurse className="text-2xl text-rose-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professionalism</h3>
              <p className="text-gray-500 text-sm">Our caregivers are certified, trained, and highly experienced.</p>
            </div>

     
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all text-center group">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rose-600 transition-colors">
                <FaShieldAlt className="text-2xl text-rose-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safety First</h3>
              <p className="text-gray-500 text-sm">We conduct rigorous background checks to ensure your safety.</p>
            </div>

    
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all text-center group">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rose-600 transition-colors">
                <FaUsers className="text-2xl text-rose-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-500 text-sm">Our support team is always ready to assist you anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </div>

  
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-extrabold text-rose-500">500+</h3>
              <p className="text-gray-300 mt-2 text-sm">Expert Caregivers</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold text-rose-500">2000+</h3>
              <p className="text-gray-300 mt-2 text-sm">Happy Families</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold text-rose-500">5+</h3>
              <p className="text-gray-300 mt-2 text-sm">Years Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold text-rose-500">100%</h3>
              <p className="text-gray-300 mt-2 text-sm">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>

 
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
          <p className="text-gray-500 mt-2">The minds behind the care.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
            <div className="text-center">
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 border-4 border-rose-100">
                    <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop" alt="CEO" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">James Anderson</h3>
                <p className="text-rose-600 text-sm font-medium">Founder & CEO</p>
            </div>
      
             <div className="text-center">
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 border-4 border-rose-100">
                    <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop" alt="Manager" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Sarah Connor</h3>
                <p className="text-rose-600 text-sm font-medium">Head of Operations</p>
            </div>
    
             <div className="text-center">
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 border-4 border-rose-100">
                    <Image src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop" alt="Doctor" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Dr. Emily Blunt</h3>
                <p className="text-rose-600 text-sm font-medium">Medical Advisor</p>
            </div>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;