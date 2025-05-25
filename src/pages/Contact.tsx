
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    toast({ title: "Thank you!", description: "Your inquiry has been sent." });
    setValues({ name: "", email: "", message: "" });
  }

  return (
    <main className="max-w-3xl mx-auto py-14 px-4 font-sans flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-2 text-primary">Contact Us</h1>
      <form className="w-full max-w-lg mt-5 flex flex-col gap-4 bg-white rounded-xl shadow-xl p-8"
        onSubmit={handleSubmit}>
        <input
          required
          className="border rounded px-4 py-3 outline-primary"
          placeholder="Your Name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <input
          required
          className="border rounded px-4 py-3 outline-primary"
          placeholder="Your Email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <textarea
          required
          className="border rounded px-4 py-3 outline-primary"
          placeholder="Message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
        />
        <button className="bg-primary text-white font-bold rounded py-3 hover:bg-primary/80 mt-2 transition-all">
          Send Message
        </button>
      </form>
    </main>
  );
}
