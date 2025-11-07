import React from "react";

const scheduleData = [
  {
    city: "Chennai",
    date: "08 March 2026 Sunday",
    time: "9:00am – 5:00pm",
    venue: "Four Points by Sheraton Chennai OMR",
    address:
      "Survey No 169, Plot 1B-1A, Rajiv Gandhi Salai, Sholinganallur Chennai, Tamil Nadu 600119",
  },
  {
    city: "Hyderabad",
    date: "10 March 2026 Tuesday",
    time: "9:00am – 5:00pm",
    venue: "Red Fox Hotel Hyderabad",
    address:
      "Survey No. 64, Plot No. 2, Hitech City Main Rd, HITEC City, Telangana 500081",
  },
  {
    city: "Pune",
    date: "12 March 2026 Thursday",
    time: "9:00am – 5:00pm",
    venue: "ibis Pune Viman Nagar",
    address:
      "Survey No 32, Viman Nagar Rd, Viman Nagar, Pune, Maharashtra 411014",
  },
  {
    city: "Bengaluru",
    date: "14 March 2026 Saturday",
    time: "9:00am – 5:00pm",
    venue: "Bloom Hub | ORR Marathahalli",
    address:
      "3, Outer Ring Road Kadubeesanahalli, Panathur, Marathahalli, Bengaluru, Karnataka 560037",
  },
  {
    city: "Mumbai",
    date: "17 March 2026 Tuesday",
    time: "9:00am – 5:00pm",
    venue: "Mirage Hotel Mumbai",
    address:
      "International Airport Approach Road, Andheri East, Mumbai, Maharashtra 400059",
  },
  {
    city: "Kochi",
    date: "19 March 2026 Thursday",
    time: "9:00am – 5:00pm",
    venue: "The Avenue Regent Kochi",
    address:
      "39/2026, Mahatma Gandhi Rd, Jos Junction, Pallimukku, Kochi, Ernakulam, Kerala 682016",
  },
  {
    city: "Delhi",
    date: "22 March 2026 Sunday",
    time: "9:00am – 5:00pm",
    venue: "The Muse Sarovar Portico Nehru Place",
    address:
      "A-1, Chirag Enclave, Nehru Place, New Delhi, Delhi 110048",
  },
];

const WhoShouldAttend = () => {
  return (
    <div className=" min-h-fit relative bg-gradient-to-br from-sky-500 to-blue-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Event Details
          </h1>
          {/* <p className="text-xl sm:text-2xl text-white max-w-3xl mx-auto">
            The NUS MTech entrance test is your first step toward securing a
            spot in one of our highly regarded MTech programs.
          </p> */}
          <h2 className="text-3xl sm:text-4xl animate-bounce font-bold text-white mt-8 mb-12">
            8<sup>th</sup> March – 22<sup>th</sup> March 2026
          </h2>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="overflow-x-auto p-5">
            <table className="min-w-full divide-y shadow divide-gray-200">
              <thead>
                <tr className="relative bg-gradient-to-br from-sky-500 to-blue-600 shadow rounded-t-lg">
                  <th className="px-6 py-3 text-left text-sm font-semibold whitespace-nowrap text-white first:rounded-tl-lg last:rounded-tr-lg">
                    City
                  </th>
                  <th className="px-6 py-3 text-left text-sm whitespace-nowrap font-semibold text-white">
                    Preview Talk, Entrance Test & Interview
                  </th>
                  <th className="px-6 py-3 text-left text-sm whitespace-nowrap font-semibold text-white first:rounded-tl-lg last:rounded-tr-lg">
                    Venue
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {scheduleData.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 border-b border-gray-200"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-200">
                      {item.city}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">
                      <div>{item.date}</div>
                      <div>{item.time}</div>
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                      <div className="font-medium">{item.venue}</div>
                      <div className="text-gray-600">{item.address}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoShouldAttend;
