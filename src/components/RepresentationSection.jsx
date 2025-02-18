import React from "react";

export function RepresentationSection() {
  return (
    <section className="py-16 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32" aria-label="Why Choose Creative Plus Studio">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-600 leading-tight mb-6" itemProp="headline">
            WHY CHOOSE US?
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-4" itemProp="description">
            At Creative Plus Studio, we craft experiences through graphic design, video editing, animation, digital marketing, and web development.
          </p>
          <p className="text-gray-500 text-md sm:text-lg" itemProp="text">
            Here's why we are the perfect choice for your creative needs:
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-6" itemScope itemType="https://schema.org/ItemList">
          {[{
            icon: '🚀', title: 'Expert Team', description: 'A highly skilled and passionate team with years of experience.'
          }, {
            icon: '💡', title: 'Innovative Solutions', description: 'We blend creativity with technology to deliver outstanding results.'
          }, {
            icon: '🎯', title: 'Customer-Centric Approach', description: 'Your vision is our priority! We tailor solutions to meet your needs.'
          }, {
            icon: '⏰', title: 'On-Time Delivery', description: 'We respect deadlines and ensure timely project completion.'
          }, {
            icon: '💲', title: 'Affordable & Quality', description: 'Premium quality services at competitive pricing.'
          }, {
            icon: '✅', title: '100% Satisfaction', description: 'We don’t stop until you’re fully satisfied with the results!'
          }].map((item, index) => (
            <div key={index} className="flex items-start" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <div className="text-orange-500 text-3xl mr-4" aria-hidden="true">{item.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-slate-800" itemProp="name">{item.title}</h3>
                <p className="text-gray-600" itemProp="description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
