import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialsSection = () => {
  const stats = [
    { id: 1, value: "500+", label: "Happy Families" },
    { id: 2, value: "120+", label: "Verified Caretakers" },
    { id: 3, value: "4.9", label: "Average Rating" },
  ];

  const reviews = [
      {id: 1, name: "Rahim Ahmed", comment: "Found an amazing babysitter for my twins. Very secure and easy process.", rating: 5},
      {id: 2, name: "Fatima Begum", comment: "The elderly care service for my mother has been a blessing. The caretaker is very polite.", rating: 5},
      {id: 3, name: "Sultana Kamal", comment: "Quick response when I needed support for my sick sister. Highly recommended.", rating: 4},
  ]

  return (
    <section className="py-20 px-5 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-20 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {stats.map(stat => (
                <div key={stat.id} className="py-5">
                    <h3 className="text-5xl font-extrabold text-primary">{stat.value}</h3>
                    <p className="text-gray-600 text-lg font-medium mt-2">{stat.label}</p>
                </div>
            ))}
        </div>

        {/* Testimonials */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Trusted by Families</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map(review => (
                <div key={review.id} className="card bg-base-100 shadow-lg border border-gray-50 p-8 relative">
                    <FaQuoteLeft className="text-4xl text-primary opacity-20 absolute top-5 left-5" />
                    <div className="card-body relative z-10">
                        <div className="flex text-yellow-400 mb-4">
                            {[...Array(review.rating)].map((_, i) => <FaStar key={i}/>)}
                        </div>
                        <p className="text-gray-700 italic">"{review.comment}"</p>
                        <h4 className="text-xl font-bold mt-6">{review.name}</h4>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;