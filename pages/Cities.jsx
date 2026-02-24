import React from 'react'

function Cities() {
  const cities = [
    {
      name: 'Mumbai',
      description: 'Full service available in all areas of Mumbai including South Mumbai, North Mumbai, and suburbs.',
      areas: ['Andheri', 'Bandra', 'Powai', 'Juhu', 'Worli', 'Malad']
    },
    {
      name: 'Delhi',
      description: 'Comprehensive home care services across Delhi NCR with trained and verified staff.',
      areas: ['Connaught Place', 'Gurgaon', 'Noida', 'Dwarka', 'Rohini', 'Saket']
    },
    {
      name: 'Bangalore',
      description: 'Professional staff management and home care services throughout Bangalore.',
      areas: ['Koramangala', 'Whitefield', 'Indiranagar', 'HSR Layout', 'Marathahalli', 'Electronic City']
    },
    {
      name: 'Chennai',
      description: 'Reliable home care solutions available in all major areas of Chennai.',
      areas: ['T Nagar', 'Adyar', 'Anna Nagar', 'OMR', 'Velachery', 'Porur']
    },
    {
      name: 'Hyderabad',
      description: 'Quality home servants, nurses, and babysitters available across Hyderabad.',
      areas: ['Hitech City', 'Banjara Hills', 'Jubilee Hills', 'Gachibowli', 'Kondapur', 'Madhapur']
    },
    {
      name: 'Pune',
      description: 'Complete home care services in Pune with experienced and trustworthy staff.',
      areas: ['Koregaon Park', 'Hinjewadi', 'Viman Nagar', 'Kothrud', 'Baner', 'Wakad']
    }
  ]

  return (
    <section className="py-24 bg-bg min-h-[80vh]">
      <div className="max-w-container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-text">
          Cities We Serve
        </h2>
        <p className="text-center text-text-light text-lg mb-16">
          We provide our services across major cities in India
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {cities.map((city, index) => (
            <div key={index} className="bg-bg border border-border rounded-xl p-10 text-center transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary">
              <h3 className="text-2xl font-semibold mb-4 text-text">{city.name}</h3>
              <p className="text-text-light leading-relaxed mb-6">{city.description}</p>
              <div className="mt-6">
                <h4 className="text-base font-semibold mb-3 text-text">
                  Areas Covered:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {city.areas.map((area, idx) => (
                    <span 
                      key={idx}
                      className="py-1 px-3 bg-bg-light rounded-full text-sm text-text"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cities

