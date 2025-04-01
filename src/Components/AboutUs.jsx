import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section id="about" className="bg-gray-100 py-16 px-6 md:px-20 lg:px-32">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-red-600"
        >
          About Sawariya Kitchen Rack
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-gray-700 mt-6 text-lg leading-relaxed inter-font"
        >
          Sawariya Kitchen Rack, a brand by Giriraj Steel Company, is known for
          providing high-quality kitchen storage solutions. We specialize in
          stainless steel racks, multi-purpose stands, and fruit baskets,
          catering to various storage needs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-gray-700 mt-6 leading-relaxed inter-font w-full"
        >
          <span className="text-md md:text-3xl font-bold text-red-600 mb-10 border-b-2 border-red">
            Our office
          </span>
          <iframe
            className="w-full h-[400px] mt-7  "
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3720.9025013944497!2d79.10506711139043!3d21.156278034891105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sJagnath%20Budhwari%20Road%2C%20Teen%20Nal%20Chowk%2C%20Itwari%2C%20Nagpur-02!5e0!3m2!1sen!2sin!4v1743094517568!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-gray-700 mt-6 text-lg leading-relaxed inter-font"
        >
          Sawariya Kitchen Rack, a brand by Giriraj Steel Company, is known for
          providing high-quality kitchen storage solutions. We specialize in
          stainless steel racks, multi-purpose stands, and fruit baskets,
          catering to various storage needs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mt-10 bg-white shadow-md p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold text-gray-800">Our Location</h3>
          <p className="text-gray-600 mt-2">
            📍 Factory: 15, Ward No.3, Mahalgaon, Tah. Kamptee, Dist. Nagpur
          </p>
          <p className="text-gray-600">
            🏢 Office: Jagnath Budhwari Road, Teen Nal Chowk, Itwari, Nagpur-02
          </p>
          <p className="text-gray-600 mt-2">
            📧 Email: girirajsteelcompany@gmail.com
          </p>
          <p className="text-gray-600">📞 Contact: 0712-2777417, 2763762</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs; 