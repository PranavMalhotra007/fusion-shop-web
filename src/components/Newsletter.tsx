
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
    toast({ title: "You're in!", description: "You'll get our special 50% deals.", duration: 3000 });
  }

  return (
    <section className="w-full rounded-2xl bg-gradient-to-tr from-primary via-blue-400 to-violet-400 p-8 my-8 flex flex-col md:flex-row items-center gap-8 shadow-lg animate-fade-in">
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Get 50% OFF on first purchase!
        </h2>
        <p className="text-white/90 mb-4">Subscribe to our newsletter and get exclusive deals.</p>
      </div>
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col md:flex-row gap-3 md:justify-end">
        <input
          className="rounded-md px-4 py-3 w-full md:w-72 outline-none ring-primary focus:ring-2 font-medium text-base"
          type="email" required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Your email"
        />
        <button
          className="rounded-md px-7 py-3 bg-white text-primary font-bold hover:bg-primary hover:text-white hover:shadow-md transition-all" type="submit">
          Subscribe
        </button>
      </form>
    </section>
  );
}
