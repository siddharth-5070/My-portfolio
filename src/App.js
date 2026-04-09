import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";

export default function App() {
  // State for contact form
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = React.useState("");

  return (
    <div className="font-sans bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <header className="fixed top-0 w-full backdrop-blur-md bg-white/60 dark:bg-gray-800/60 shadow z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
            Siddharth Kumar Singh
          </h1>
          <nav className="hidden md:flex space-x-6 font-medium">
            <a
              href="#about"
              className="hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Projects
            </a>
            <a
              href="#certifications"
              className="hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Certifications
            </a>
            <a
              href="#internships"
              className="hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Internships
            </a>
            <a
              href="#contact"
              className="hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Contact
            </a>
          </nav>
          <a
            href="/Siddharth_Singh__CV.pdf"
            download
            className="ml-4 flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
          >
            <Download size={18} /> <span>Download CV</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="h-screen flex items-center justify-center text-center bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
              Siddharth
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            A passionate Web Developer & Cybersecurity Enthusiast. I build
            modern, responsive websites and focus on secure applications.
          </p>
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
          >
            View My Work
          </a>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4 text-indigo-600"
        >
          About Me
        </motion.h2>
        <p className="text-lg leading-relaxed">
          I'm a passionate Web Developer and Cybersecurity enthusiast with a
          strong foundation in building modern, responsive, and secure web
          applications. I enjoy solving challenging problems, learning new
          technologies, and applying security best practices to protect
          applications from potential threats. Always eager to grow, I strive to
          create impactful digital experiences while continuously expanding my
          technical expertise.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-white dark:bg-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-indigo-600 text-center">
            Skills
          </h2>

          {/* Technical Skills */}
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Programming & Development
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">C / Java / Python</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                    <div className="bg-indigo-500 h-2 rounded-full w-[80%]"></div>
                  </div>
                </div>
                <div>
                  <p className="font-medium">
                    HTML / CSS / JavaScript / React / Node.js / PHP
                  </p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                    <div className="bg-pink-500 h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
                <div>
                  <p className="font-medium">SQL / MongoDB</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                    <div className="bg-green-500 h-2 rounded-full w-[75%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-indigo-100 text-indigo-700 dark:bg-indigo-700 dark:text-indigo-100 rounded-full text-sm font-medium">
                  Team Collaboration
                </span>
                <span className="px-4 py-2 bg-pink-100 text-pink-700 dark:bg-pink-700 dark:text-pink-100 rounded-full text-sm font-medium">
                  Problem-Solving
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100 rounded-full text-sm font-medium">
                  Adaptability
                </span>
                <span className="px-4 py-2 bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-100 rounded-full text-sm font-medium">
                  Leadership
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-blue-100 rounded-full text-sm font-medium">
                  Communication
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 dark:bg-purple-700 dark:text-purple-100 rounded-full text-sm font-medium">
                  Open to Learning
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="py-20 bg-gradient-to-r from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-indigo-600 text-center">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 border rounded-xl shadow bg-white dark:bg-gray-800 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-indigo-700">
                  🍴 7th Heaven (Restaurant Website)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  A full-stack restaurant web application that allows users to
                  browse menus, manage their carts, and place orders securely.
                  Built with a responsive design for a seamless customer
                  experience.
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
                  <li>User authentication (Signup/Login with sessions)</li>
                  <li>Menu browsing with categorized items</li>
                  <li>Cart management & order placement</li>
                  <li>MongoDB backend for secure data storage</li>
                  <li>Mobile-friendly responsive UI</li>
                </ul>
                <p className="font-medium text-sm mb-4">
                  Tech Stack:{" "}
                  <span className="text-gray-800 dark:text-gray-100">
                    React, Node.js, Express, MongoDB, Tailwind CSS
                  </span>
                </p>
              </div>
              <div className="mt-4 flex space-x-4">
                <a
                  href="https://github.com/Siddharth-5070"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://seventh-heaven-g20e.onrender.com/"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>

          
  {/* Project - Pentesting Tool */}
<motion.div
  whileHover={{ scale: 1.05 }}
  className="p-6 border rounded-xl shadow bg-white dark:bg-gray-800 flex flex-col justify-between"
>
  <div>
    <h3 className="text-2xl font-semibold mb-2 text-indigo-700">
      🔐 HackBuddy (Web Security Testing)
    </h3>
    <p className="text-gray-700 dark:text-gray-300 mb-4">
      HackBuddy is designed to help security researchers and
      developers identify vulnerabilities in web applications. Built with Flask
      and Python, it provides modules for scanning, reporting, and simulating
      common attack vectors in a controlled environment.
    </p>
    <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
      <li>Secure user authentication for tool access</li>
      <li>Automated vulnerability scanning modules</li>
      <li>Customizable payloads for testing injection flaws</li>
      <li>Detailed reporting with export options</li>
      <li>Responsive dashboard with Flask templates</li>
    </ul>
    <p className="font-medium text-sm mb-4">
      Tech Stack:{" "}
      <span className="text-gray-800 dark:text-gray-100">
        Flask, Python, HTML/CSS, Bootstrap, SQLAlchemy
      </span>
    </p>
  </div>
  <div className="mt-4 flex space-x-4">
    <a
      href="https://github.com/siddharth-5070/Pentesting-Tool"
      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </a>
    <a
      href="https://your-pentesting-tool-demo-link.com"
      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      Live Demo
    </a>
  </div>
</motion.div>

{/* Project 3 - EasyStay */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-6 border rounded-xl shadow bg-white dark:bg-gray-800 flex flex-col justify-between"
      >
        <div>
          <h3 className="text-2xl font-semibold mb-2 text-indigo-700">
            🏨 EasyStay (Hotel Booking Platform)
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            A professional hotel booking web application that allows users to
            browse rooms, register securely, and make bookings with integrated
            payment options. Designed with recruiter-friendly presentation and
            real-world usability in mind.
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-4">
            <li>Secure user registration & login system</li>
            <li>Room browsing with photos and professional descriptions</li>
            <li>Booking management with full CRUD functionality</li>
            <li>Integrated payment gateway (Razorpay, PayPal, COD)</li>
            <li>Responsive UI with accessibility improvements</li>
          </ul>
          <p className="font-medium text-sm mb-4">
            Tech Stack:{" "}
            <span className="text-gray-800 dark:text-gray-100">
              PHP, MySQL, Bootstrap, JavaScript, Razorpay/PayPal Integration
            </span>
          </p>
        </div>
        <div className="mt-4 flex space-x-4">
          <a
            href="https://github.com/Siddharth-5070"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="http://easystay.free.nf/"
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* Certifications */}
      <section
        id="certifications"
        className="py-20 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-indigo-600 text-center">
            Certifications
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Certification 1 - Cisco */}
            <motion.a
              href="/certificates/cisco.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow cursor-pointer"
            >
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.HKa9prJvg87Ee9VDw3SJFgHaD6?pid=Api&P=0&h=180"
                alt="Cisco Cybersecurity Certificate"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Introduction to Cybersecurity
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Cisco Networking Academy
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">2025</p>
            </motion.a>

            {/* Certification 2 - GeeksforGeeks */}
            <motion.a
              href="/certificates/gfg.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow cursor-pointer"
            >
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.D4XI2Rda44z6l59KWzRwWwHaEZ?pid=Api&P=0&h=180"
                alt="GeeksforGeeks Bootcamp Certificate"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Full Stack Developer Bootcamp
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                GeeksforGeeks
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">2025</p>
            </motion.a>

            {/* Certification 3 - Deloitte */}
            <motion.a
              href="/certificates/deloitte.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow cursor-pointer"
            >
              <img
                src="https://logos-world.net/wp-content/uploads/2021/08/Deloitte-Emblem.png"
                alt="Deloitte Cyber Job Simulation"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Cyber Job Simulation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Deloitte</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">2025</p>
            </motion.a>

            {/* Certification 4 - Tata Forage */}
            <motion.a
              href="/certificates/tata_internship-1.png"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow cursor-pointer"
            >
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.pRQmB5XKY1xZUQteLm0tFwAAAA?pid=Api&P=0&h=180"
                alt="Tata Cybersecurity Analyst Simulation"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Cybersecurity Analyst Job Simulation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Tata Consultancy Services – Forage
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Completed: July 14th, 2025
              </p>
            </motion.a>

            {/* Certification 5 - AWS */}
            <motion.a
              href="/certificates/aws_certificate-1.png"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow cursor-pointer"
            >
              <img
                src="https://gadget.co.za/wp-content/uploads/2020/12/aws-logo-scaled.jpg"
                alt="AWS Security Incident Response"
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                AWS Security Incident Response Overview
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                AWS Training & Certification
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Completed: June 21st, 2025
              </p>
            </motion.a>
          </div>
        </div>
      </section>
      {/* Internship */}
      <section id="internships" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-indigo-600 text-center">
            Internships
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Internship 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow"
            >
              <h3 className="text-xl font-semibold mb-2">
                Cybersecurity Analyst Intern
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Tata Consultancy Services – Virtual Internship
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                July 2025 – August 2025
              </p>
              <ul className="mt-3 text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
                <li>Completed cybersecurity job simulation tasks on Forage.</li>
                <li>Worked on security incident response and log analysis.</li>
                <li>
                  Hands-on exposure to vulnerability assessment & reporting.
                </li>
              </ul>
            </motion.div>

            {/* Internship 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow"
            >
              <h3 className="text-xl font-semibold mb-2">
                Cybersecurity Intern
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">CodeBeat</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                June 2025 – July 2025
              </p>
              <ul className="mt-3 text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
                <li>
                  Assisted in penetration testing and vulnerability scanning.
                </li>
                <li>Monitored security logs and incident reports.</li>
                <li>
                  Worked on securing APIs and strengthening authentication.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 dark:bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-indigo-600">Contact</h2>
          <p className="mb-6">
            Let's connect! Fill out the form or reach me on any platform:
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 text-lg mb-8">
            <a
              href="mailto:siddharthsingh4658@gmail.com"
              className="flex items-center space-x-2 hover:text-indigo-600 dark:hover:text-indigo-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={20} /> <span>Email</span>
            </a>
            <a
              href="tel:+916204784600"
              className="flex items-center space-x-2 hover:text-indigo-600 dark:hover:text-indigo-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone size={20} /> <span>Phone</span>
            </a>
            <a
              href="https://github.com/Siddharth-5070"
              className="flex items-center space-x-2 hover:text-indigo-600 dark:hover:text-indigo-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} /> <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/siddharthsingh-941502314"
              className="flex items-center space-x-2 hover:text-indigo-600 dark:hover:text-indigo-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} /> <span>LinkedIn</span>
            </a>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();

              // Validation
              if (!formData.name || !formData.email || !formData.message) {
                setStatus("Please fill in all fields.");
                return;
              }
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(formData.email)) {
                setStatus("Please enter a valid email address.");
                return;
              }

              setStatus("Message sent successfully!");

              // Clear form
              setFormData({ name: "", email: "", message: "" });
            }}
            className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={5}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
            {status && (
              <p className="text-center text-sm mt-2 text-red-500 dark:text-red-400">
                {status}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white text-center py-6">
        <p>
          © {new Date().getFullYear()} Siddharth Kumar Singh. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
