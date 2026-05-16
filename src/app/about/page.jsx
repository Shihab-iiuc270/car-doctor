// app/about/page.js
export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Car Doctor</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your Trusted Partner for Quality Car Care Since 2015
        </p>
      </section>

      {/* Story Section */}
      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2015, Car Doctor started with a simple mission: 
            to provide honest, reliable, and affordable car repair services.
          </p>
          <p className="text-gray-600">
            Today, we've served over 10,000+ satisfied customers and 
            grown into a team of 50+ certified mechanics.
          </p>
        </div>
        <div className="bg-gray-500 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
          <p className="text-gray-50">
            To deliver exceptional auto repair services with transparency, 
            expertise, and customer-first approach.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <div className="text-center p-4 bg-orange-50 rounded-lg">
          <div className="text-3xl font-bold text-orange-500">10K+</div>
          <div className="text-gray-600">Happy Customers</div>
        </div>
        <div className="text-center p-4 bg-orange-50 rounded-lg">
          <div className="text-3xl font-bold text-orange-500">50+</div>
          <div className="text-gray-600">Expert Mechanics</div>
        </div>
        <div className="text-center p-4 bg-orange-50 rounded-lg">
          <div className="text-3xl font-bold text-orange-500">5+</div>
          <div className="text-gray-600">Years Experience</div>
        </div>
        <div className="text-center p-4 bg-orange-50 rounded-lg">
          <div className="text-3xl font-bold text-orange-500">24/7</div>
          <div className="text-gray-600">Customer Support</div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16 ">
        <h2 className="text-3xl font-bold text-center mb-4">Owner of Car Doctor</h2>
        <div className="items-center">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              {/* <Image src={member.image} width={200} height={200} className="rounded-full mx-auto mb-4"  alt=" "/> */}
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-orange-500">{member.role}</p>
              <p className="text-gray-600 mt-2">{member.experience}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-500 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Car Doctor?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-3">🔧</div>
            <h3 className="text-xl font-bold mb-2">Expert Technicians</h3>
            <p className="text-gray-50">ASE certified mechanics with years of experience</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="text-xl font-bold mb-2">Fair Pricing</h3>
            <p className="text-gray-50">Transparent pricing with no hidden costs</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-xl font-bold mb-2">Quick Service</h3>
            <p className="text-gray-50">Most repairs completed in 24-48 hours</p>
          </div>
        </div>
      </section>
    </div>
  );
}

const teamMembers = [
  { name: "MSU", role: "Senior Mechanic", experience: "15 years exp", image: "/team/john.jpg" },
];