import React, { useState } from "react"; 
import { Button } from "../components/Button"; 
import Sms from "../assets/mail.gif";

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 text-sm mb-4">{content}</p>
        <Button text="Close" onClick={onClose} />
      </div>
    </div>
  );
};

export function Contact() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

  const showModal = (title, content) => {
    setModalContent({ title, content });
    setModalOpen(true);
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
            Need help? Go to our <a href="#" className="text-orange-500 font-medium">Contact Us</a> page.
          </p>
        </div>
        <img src={Sms} alt="Contact" className="w-full h-full max-h-[550px] object-cover rounded-lg mt-6 shadow-md" />
      </div>

      <div className="p-8 rounded-2xl shadow-lg flex flex-col justify-center">
        <h3 className="text-3xl font-bold text-orange-500 mb-6">Send Request To Us</h3>

        <form action="https://formspree.io/f/xvgzvjrq" method="POST">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" name="firstName" placeholder="First Name" className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" required />
            <input type="text" name="lastName" placeholder="Last Name" className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="email" name="email" placeholder="Email" className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" required />
            <input type="text" name="phone" placeholder="Phone Number" className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" required />
          </div>

          <input type="url" name="companyUrl" placeholder="https:// Company URL" className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4" />
          <input type="text" name="interest" placeholder="Interested In" className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4" />
          <textarea name="message" placeholder="Your Message" rows="4" className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4" required></textarea>
          <input type="text" name="budget" placeholder="Budget" className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4" />

          <div className="flex items-center mb-4">
            <input type="checkbox" name="policy" className="mr-2" required />
            <p className="text-slate-700 text-sm">
              Accept to agree with our 
              <span className="text-orange-500 cursor-pointer" onClick={() => showModal("Privacy Policy", "We value your privacy and ensure data protection.")}> Privacy Policy</span> 
              and <span className="text-orange-500 cursor-pointer" onClick={() => showModal("Cookies Policy", "We use cookies to enhance your experience.")}> Cookies Policy</span>.
            </p>
          </div>

          <button type="submit" className="bg-orange-500 text-white p-4 rounded-lg w-full hover:bg-white hover:text-orange-500 hover:border-orange-500 transition">Submit</button>
        </form>
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={modalContent.title} content={modalContent.content} />
    </section>
  );
}
