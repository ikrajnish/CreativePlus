import React, { useState, memo } from "react";
import Sms from "../assets/mail.gif";

// Reusable Button Component (Memoized to prevent unnecessary re-renders)
const Button = memo(({ text, onClick, type = "button" }) => (
  <button
    type={type}
    className="bg-orange-500 text-white p-4 rounded-lg w-full hover:bg-white hover:text-orange-500 hover:border-orange-500 transition"
    onClick={onClick}
  >
    {text}
  </button>
));

// Modal Component (Memoized for performance)
const Modal = memo(({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" aria-hidden={!isOpen} role="dialog">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 text-sm mb-4">{content}</p>
        <Button text="Close" onClick={onClose} />
      </div>
    </div>
  );
});

export function Contact() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyUrl: "",
    interest: "",
    message: "",
    budget: "",
    policy: false,
  });

  const FORM_ENDPOINT = "https://formspree.io/f/xvgzvjrq"; // Store form endpoint in a variable

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Show Modal
  const showModal = (title, content) => {
    setModalContent({ title, content });
    setModalOpen(true);
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, interest, message, budget, policy } = formData;

    // Validation
    if (!firstName || !lastName || !email || !phone || !interest || !message || !budget || !policy) {
      alert("Please fill out all required fields before submitting.");
      return;
    }

    e.target.submit(); // Submit form if validation passes
  };

  return (
    <section className="container mx-auto p-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-600 leading-tight mb-6">
            HOW CAN WE HELP YOU?
          </h2>
          <p className="text-slate-700 text-lg mb-4">
            Questions, collabs, inquiries? Use the contact form, and we will get in touch, or mail us at 
            <a href="mailto:info@creativeplusstudio.com" className="text-orange-500 font-medium"> info@creativeplusstudio.com</a>. 
            Need help? Go to our <a href="/contact" className="text-orange-500 font-medium">Contact Us</a> page.
          </p>
        </div>
        <img src={Sms} alt="Contact" className="w-full h-full max-h-[550px] object-cover rounded-lg mt-6 shadow-md" loading="lazy" />
      </div>

      <div className="p-8 rounded-2xl bg-white shadow-lg flex flex-col justify-center">
        <h3 className="text-3xl font-bold text-orange-500 mb-6">Send Request To Us</h3>

        <form action={FORM_ENDPOINT} method="POST" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" name="firstName" placeholder="First Name" className="p-4 border rounded-lg focus:ring focus:ring-offset-2" required onChange={handleChange} />
            <input type="text" name="lastName" placeholder="Last Name" className="p-4 border rounded-lg focus:ring focus:ring-offset-2" required onChange={handleChange} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="email" name="email" placeholder="Email" className="p-4 border rounded-lg focus:ring focus:ring-offset-2" required onChange={handleChange} />
            <input type="text" name="phone" placeholder="Phone Number" className="p-4 border rounded-lg focus:ring focus:ring-offset-2" required onChange={handleChange} />
          </div>

          <input type="url" name="companyUrl" placeholder="https:// Company URL" className="w-full p-4 border rounded-lg focus:ring focus:ring-offset-2 mb-4" onChange={handleChange} />
          <input type="text" name="interest" placeholder="Interested In" className="w-full p-4 border rounded-lg focus:ring focus:ring-offset-2 mb-4" required onChange={handleChange} />
          <textarea name="message" placeholder="Your Message" rows="4" className="w-full p-4 border rounded-lg focus:ring focus:ring-offset-2 mb-4" required onChange={handleChange}></textarea>
          <input type="text" name="budget" placeholder="Budget" className="w-full p-4 border rounded-lg focus:ring focus:ring-offset-2 mb-4" required onChange={handleChange} />

          <div className="flex items-center mb-4">
            <input type="checkbox" name="policy" className="mr-2" required onChange={handleChange} />
            <p className="text-slate-700 text-sm">
              Accept to agree with our 
              <span className="text-orange-500 cursor-pointer" onClick={() => showModal("Privacy Policy", "We value your privacy and ensure data protection.")}> Privacy Policy</span> 
              and <span className="text-orange-500 cursor-pointer" onClick={() => showModal("Cookies Policy", "We use cookies to enhance your experience.")}> Cookies Policy</span>.
            </p>
          </div>

          <Button text="Submit" type="submit" />
        </form>
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={modalContent.title} content={modalContent.content} />
    </section>
  );
}
