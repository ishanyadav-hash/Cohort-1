import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            About Us
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            We build the future of the web.
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Our mission is to provide the best tools for developers to create
            stunning and performant applications.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Our Vision",
                content:
                  "To empower every developer with state-of-the-art tools and resources.",
              },
              {
                title: "Our Values",
                content:
                  "Innovation, transparency, and community-driven development.",
              },
              {
                title: "Our Team",
                content:
                  "A diverse group of passionate individuals working towards a common goal.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden shadow rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;