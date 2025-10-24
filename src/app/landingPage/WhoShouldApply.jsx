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
                    Master of Technology in Software Engineering (MTech SE)
                  </h2>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    Graduates with relevant work experience in I.T-related jobs
                    (preferably some relevant work experience).
                  </li>
                  <li>
                    Graduates who are currently working in I.T firms; such as
                    Infosys, Wipro, CTS, TCS, Tech Mahindra, etc. (just to name
                    a few) or consulting firms; IBM, Accenture, Deloitte
                    Consulting, etc.
                  </li>
                </ul>
              </div>
            </div>

            {/* Master of Technology in Artificial Intelligence Systems (MTech AIS) */}
            <div className="bg-white overflow-hidden rounded-lg shadow-lg border-2 hover:border-blue-500">
              <div className="p-6">
                <div className="bg-gradient-to-br from-sky-500 to-blue-600 text-white p-4 -mx-6 -mt-6 mb-6">
                  <h2 className="text-xl font-semibold">
                    Master of Technology in Artificial Intelligence Systems
                    (MTech AIS)
                  </h2>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    Graduates preferably some relevant working experience as an
                    ICT professional.
                  </li>
                  <li>
                    Graduates with relevant work experience in I.T-related jobs
                    (preferably some relevant work experience).
                  </li>
                  <li>
                    Graduates who are currently working in I.T firms; such as
                    Infosys, Wipro, CTS, TCS, Tech Mahindra, etc. (just to name
                    a few) or consulting firms; IBM, Accenture, Deloitte
                    Consulting, etc.
                  </li>
                </ul>
              </div>
            </div>

            {/* Master of Technology in Enterprise Business Analytics (MTech EBAC) */}
            <div className="bg-white overflow-hidden rounded-lg shadow-lg border-2 hover:border-blue-500">
              <div className="p-6">
                <div className="bg-gradient-to-br from-sky-500 to-blue-600 text-white p-4 -mx-6 -mt-6 mb-6">
                  <h2 className="text-xl font-semibold">
                    Master of Technology in Enterprise Business Analytics (MTech
                    EBAC)
                  </h2>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    Candidates preferably with some relevant experience with
                    quantitative skills
                  </li>
                  <li>
                    Graduates having Bachelor's degree preferably in Finance,
                    Accountancy, Mathematics, Statistics, Econometrics,
                    Management Science, Engineering, Computer Science & IT, etc.
                  </li>
                  <li>Freshers are welcome to apply</li>
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
