import React from "react";
import Image from "../../assets/WSA.webp";

export default function WhoShouldApply() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#014189] text-white py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Who Should Apply?
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto">
            The NUS MTech program is designed for ambitious graduates with an
            interest in AI, Business Analytics, and Software Engineering. Ideal
            candidates include:
          </p>
        </div>
      </div>

      {/* Programs Section */}
      <div className="bg bg-2 mx-auto min-h-screen px-4 pb-12 sm:py-12 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid order-2 md:order-1 md:grid-cols-1 gap-8">
            {/* AI & Software Engineering Card */}
            {/* Master of Technology in Software Engineering (MTech SE) */}
            <div className="bg-white overflow-hidden rounded-lg shadow-lg border-2 hover:border-blue-500">
              <div className="p-6">
                <div className="bg-gradient-to-br from-sky-500 to-blue-600 text-white p-4 -mx-6 -mt-6 mb-6">
                  <h2 className="text-xl font-semibold">
                  Software Egineering
                  </h2>
                </div>
              <p className="text-gray-600 space-y-2">
              Individuals who have a few years of experience in software engineering roles and are looking to further enhance their knowledge and skills in architecting scalable, secure and smart systems and platforms
              </p>
              </div>
            </div>

            {/* Master of Technology in Artificial Intelligence Systems (MTech AIS) */}
            <div className="bg-white overflow-hidden rounded-lg shadow-lg border-2 hover:border-blue-500">
              <div className="p-6">
                <div className="bg-gradient-to-br from-sky-500 to-blue-600 text-white p-4 -mx-6 -mt-6 mb-6">
                  <h2 className="text-xl font-semibold">
                  Artifical Intelligence
                  </h2>
                </div>
               <p className="text-gray-600 space-y-2">
               Software developers, business analysts, domain experts, scientists, and engineers who wish to be able to design and build systems that utilise Artificial Intelligence and other Smart Systems techniques.
               </p>
              </div>
            </div>

            {/* Master of Technology in Enterprise Business Analytics (MTech EBAC) */}
            <div className="bg-white overflow-hidden rounded-lg shadow-lg border-2 hover:border-blue-500">
              <div className="p-6">
                <div className="bg-gradient-to-br from-sky-500 to-blue-600 text-white p-4 -mx-6 -mt-6 mb-6">
                  <h2 className="text-xl font-semibold">
                  Enterprise Business Analytics
                  </h2>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                  IT professionals who wish to carve a new career in the area of analytics
                  </li>
                  <li>
                  Research professionals in quantitative disciplines, who wish to increase proficiency in the area of business analytics
                  </li>
                  <li>Marketing professionals who wish to leverage data for better targeting and achieve increased business growth</li>
                  <li>
                  Data and business analysts who are interested to upskill or cross-skill in the field of business analytics
                  </li>
                  <li>
                  Individuals who would like to incorporate data analytics for planning, forecasting, increasing productivity and better decision making
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="rounded-xl lg:sticky top-16 order-1 md:order-2 h-fit overflow-hidden shadow-2xl">
            <img
              src={Image}
              alt="Students collaborating"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
