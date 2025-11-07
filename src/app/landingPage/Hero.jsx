import { useState } from "react";

const Hero = () => {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Submitting...");
    setIsSubmitting(true);
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(e.target["Contact No"].value)) {
      setMessage("Please enter a valid 10-digit mobile number");
      setIsSubmitting(false);
      return;
    }
    const formData = {
      name: e.target.Name.value,
      phone: e.target["Contact No"].value,
      email: e.target.Email.value,
      city: e.target.City.value,
      graduation: e.target.Graduation.value,
      qualification: e.target.Qualification.value,
      program: e.target["Program of Interest"].value,
    };

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycby1tNjzI09CaJSZC02g72fEqHzknSmzW0XyNuvSK41VXcVNikJCjVm5ZnDR8VQhBC6e/exec",
        {
          method: "POST",
          body: `name=${formData.name}&phone=${formData.phone}&email=${formData.email}&city=${formData.city}&graduation=${formData.graduation}&qualification=${formData.qualification}&program=${formData.program}`,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const data = await res.json();

      if (data.success) {
        setMessage("✅ Form submitted successfully!");
        e.target.reset();
      } else {
        setMessage("❌ Duplicate email or phone number found!");
      }
    } catch (error) {
      setMessage("⚠️ Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="container mx-auto max-w-screen-xl px-4 py-4 sm:py-8 flex flex-col text-center sm:text-left md:flex-row gap-8 items-center justify-between hero-bg">
      {/* Left Content */}
      <div className="space-y-6 text-center lg:text-left">
        <div className="space-y-2 sm:space-y-4">
          <h1 className="text-[24px] leading-7 sm:text-4xl font-bold text-[#1a237e]">
            Study at National University of Singapore (NUS)
          </h1>
          <div className="relative inline-block text-transparent text-3xl sm:text-4xl font-bold bg-clip-text bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 animate-glow">
            Admissions Open
          </div>

          <style jsx>{`
            @keyframes glow { 
              0% {
                background-position: -200%;
              }
              50% {
                text-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
              }
              100% {
                background-position: 200%;
              }
            }

            .animate-glow {
              background-size: 200% auto;
              animation: glow 3s ease-in-out infinite;
            }
          `}</style>

          <h2 className="text-xl leading-none sm:text-2xl text-[#1a237e]">
            for 1 Year M.Tech programme with <br /> 5-Months Paid Internship
          </h2>
        </div>

        <ul className="list-disc list-inside text-left w-max mx-auto sm:mx-0 text-gray-600 space-y-2">
          <li className="text-[#2c2760] text-xl font-bold">
            M.Tech Artificial Intelligence Systems
          </li>
          <li className="text-[#2c2760] text-xl font-bold">
            M.Tech Enterprise Business Analytics
          </li>
          <li className="text-[#2c2760] text-xl font-bold">
            M.Tech Software Engineering
          </li>
        </ul>
      </div>

      {/* Right Form */}
      <div className="relative bg-gradient-to-br from-sky-500 to-blue-600 p-6 !pt-14 shadow-xl max-w-[400px] custom-div rounded-sm">
        <h3 className="text-3xl text-center font-bold text-white mb-6">
          Start Your Journey at NUS Today!
        </h3>

        {message && (
          <div className="mb-4 p-3 rounded-md bg-white text-blue-700 font-medium text-base text-center">
            {message}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            name="Name"
            className="w-full bg-white p-2"
            required
          />
          <input
            placeholder="Contact No"
            type="tel"
            name="Contact No"
            className="w-full bg-white p-2"
            required
          />
          <input
            placeholder="Email ID"
            type="email"
            name="Email"
            className="w-full bg-white p-2"
            required
          />
          <select
            name="City"
            className="w-full bg-white p-2"
            required
            defaultValue=""
          >
            <option value="" disabled>
              City for Entrance Test
            </option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi NCR">Delhi NCR</option>
            <option value="Chennai">Chennai</option>
            <option value="Others">Others</option>
          </select>
          <select
            name="Graduation"
            className="w-full bg-white p-2"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Graduation
            </option>
            <option value="B.Tech">B.Tech</option>
            <option value="BCA">BCA</option>
            <option value="BBA">BBA</option>
            <option value="B.Com">B.Com</option>
            <option value="BA">BA</option>
            <option value="Others">Others</option>
          </select>
          <select
            name="Qualification"
            className="w-full bg-white p-2"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Graduate Year
            </option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
          <select
            name="Program of Interest"
            className="w-full bg-white p-2"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Program of Interest
            </option>
            <option value="Artificial Intelligence">
              M.Tech Artificial Intelligence
            </option>
            <option value="Business Analytics">
              M.Tech Business Analytics
            </option>
            <option value="Software Engineering">
              M.Tech Software Engineering
            </option>
          </select>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-14 rounded-sm py-2 block mx-auto bg-[#1a237e] hover:bg-[#1a237e]/90 text-white text-[1.4rem] font-normal ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : "animate-bounce"
            }`}
            style={{ marginTop: "2.5rem" }}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Hero;
