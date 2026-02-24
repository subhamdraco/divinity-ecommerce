import { useState } from "react";
import "./Index.css";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.message) {
      alert("All fields are required");
      return;
    }

    setLoading(true);

    // 🔹 API call can be added later
    console.log("Contact form data:", form);

    setTimeout(() => {
      setSuccess("Thank you! We will contact you shortly.");
      setForm({ name: "", email: "", phone: "", message: "" });
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p className="subtitle">
          Have questions? We'd love to hear from you.
        </p>
{/* 
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
          />

          <button disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && <p className="success-msg">{success}</p>}
        </form> */}

        {/* CONTACT INFO */}
        <div className="contact-info">
          <p><strong>📞 Phone:</strong> +971 525914261</p>
          <p><strong>📧 Email:</strong> exports@divinityimpex.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
