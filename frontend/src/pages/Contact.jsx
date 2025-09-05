import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // 🚨 Replace with your backend endpoint
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch (error) {
      setStatus("Error: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-blue-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-4xl w-full grid md:grid-cols-2 gap-8">
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            Have questions or suggestions? Reach out and we’ll get back to you
            as soon as possible.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>
              📍 <span className="font-semibold">Address:</span> Pune, India
            </p>
            <p>
              📞 <span className="font-semibold">Phone:</span> +91 98765 43210
            </p>
            <p>
              ✉️ <span className="font-semibold">Email:</span>{" "}
              support@healthfuture.com
            </p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>

          {status && <p className="text-sm text-center mt-2">{status}</p>}
        </form>
      </div>
    </div>
  );
}
