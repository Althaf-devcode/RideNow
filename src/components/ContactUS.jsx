import React, { useState } from "react"
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Contact Form Data:", formData)
    alert("Message sent successfully!")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section className="py-20 px-5 lg:px-20 bg-gray-50" id="Contact">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT SECTION */}
          <div className="space-y-8 " data-aos="fade-up">
            
            {/* Heading */}
            <div>
              <h2 className="text-4xl pb-2 font-bold text-gray-900">
                Contact Us
              </h2>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Have questions or need help with your car rental? Our RideNow support team is here to provide quick and reliable assistance, ensuring your journey is smooth and hassle-free
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="bg-blue-600 p-3 rounded-full text-white">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Our Location</h4>
                  <p className="text-gray-600 text-sm">
                    Colombo, Sri Lanka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-blue-600 p-3 rounded-full text-white">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-gray-600 text-sm">
                    support@ridenow.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-blue-600 p-3 rounded-full text-white">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-gray-600 text-sm">
                    +94 77 123 4567
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION - FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-8 rounded-2xl shadow-lg space-y-5"
            data-aos="fade-left"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  )
}

export default ContactUs
